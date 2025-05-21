import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lê a configuração dos projetos
const projectsConfig = JSON.parse(fs.readFileSync('./projects-config.json', 'utf8'));

// Função para formatar o nome do projeto para URL do Firebase Hosting
function formatProjectName(projectName) {
  // Remove underscores e caracteres especiais
  return projectName.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
}

// Função para gerar o .env do frontend
function writeFrontendEnv(project) {
  const envContent = `VITE_PROJECT_NUMBER=${project.projectNumber}
VITE_ENDPOINT_ID=${project.endpointId}
`;
  fs.writeFileSync(path.join(__dirname, '.env'), envContent);
}

// Função para atualizar o arquivo index.html
function updateIndexHtml(project) {
  const indexPath = path.join(__dirname, 'index.html');
  let content = fs.readFileSync(indexPath, 'utf8');

  // Atualiza o search widget
  content = content.replace(
    /configId="[^"]*"/,
    `configId="${project.searchConfigId}"`
  );
  
  // Adiciona o atributo location="us" se não existir
  if (!content.includes('location="us"')) {
    content = content.replace(
      /<gen-search-widget[^>]*>/,
      `<gen-search-widget configId="${project.searchConfigId}" triggerId="searchWidgetTrigger">`
    );
  }

  fs.writeFileSync(indexPath, content);
}

// Função para atualizar o VertexDialogflowIntegration.tsx
function updateVertexDialogflow(project) {
  const vertexPath = path.join(__dirname, 'src', 'VertexDialogflowIntegration.tsx');
  let content = fs.readFileSync(vertexPath, 'utf8');

  // Atualiza o project-id e agent-id
  content = content.replace(
    /project-id="[^"]*"/,
    `project-id="${project.projectId}"`
  );
  content = content.replace(
    /agent-id="[^"]*"/,
    `agent-id="${project.agentId}"`
  );

  fs.writeFileSync(vertexPath, content);
}

// Função para atualizar o .firebaserc
function updateFirebaserc(project) {
  const firebasercPath = path.join(__dirname, '.firebaserc');
  const targetName = `autoxpress-${formatProjectName(project.name)}`;
  
  const firebaserc = {
    projects: {
      default: project.projectId
    },
    targets: {
      [project.projectId]: {
        hosting: {
          [targetName]: [targetName]
        }
      }
    }
  };

  fs.writeFileSync(firebasercPath, JSON.stringify(firebaserc, null, 2));
}

// Função para atualizar o firebase.json
function updateFirebaseJson(project) {
  const firebaseJsonPath = path.join(__dirname, 'firebase.json');
  let firebaseJson = {};
  if (fs.existsSync(firebaseJsonPath)) {
    firebaseJson = JSON.parse(fs.readFileSync(firebaseJsonPath, 'utf8'));
  }

  const targetName = `autoxpress-${formatProjectName(project.name)}`;
  const hostingConfig = {
    target: targetName,
    public: 'dist',
    ignore: [
      'firebase.json',
      '**/.*',
      '**/node_modules/**'
    ],
    headers: [
      {
        source: '/service-worker.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache'
          }
        ]
      }
    ]
  };

  // Se já existe um array de hostings, atualiza ou adiciona
  if (Array.isArray(firebaseJson.hosting)) {
    const idx = firebaseJson.hosting.findIndex(h => h.target === targetName);
    if (idx !== -1) {
      firebaseJson.hosting[idx] = hostingConfig;
    } else {
      firebaseJson.hosting.push(hostingConfig);
    }
  } else if (firebaseJson.hosting) {
    // Se existe um único hosting, transforma em array
    firebaseJson.hosting = [firebaseJson.hosting, hostingConfig];
  } else {
    // Se não existe, cria o array
    firebaseJson.hosting = [hostingConfig];
  }

  fs.writeFileSync(firebaseJsonPath, JSON.stringify(firebaseJson, null, 2));
}

// Função para fazer o build e deploy
async function deployProject(project) {
  try {
    console.log(`\n🚀 Iniciando deploy para o projeto: ${project.name}`);
    console.log(`🌐 URL de destino: https://autoxpress-${formatProjectName(project.name)}.web.app`);
    
    // Gera o .env do frontend para este projeto
    writeFrontendEnv(project);

    // Atualiza os arquivos de configuração
    updateIndexHtml(project);
    updateVertexDialogflow(project);
    updateFirebaserc(project);
    updateFirebaseJson(project);

    // Aplica o target ao site do Firebase Hosting
    const targetName = `autoxpress-${formatProjectName(project.name)}`;
    const siteName = targetName;
    console.log(`🔗 Associando target ${targetName} ao site ${siteName}...`);
    execSync(`firebase target:apply hosting ${targetName} ${siteName}`, { stdio: 'inherit' });

    // Faz o build do projeto
    console.log('📦 Fazendo build do projeto...');
    execSync('npm run build', { 
      stdio: 'inherit',
      env: { ...process.env, PATH: process.env.PATH }
    });

    // Faz o deploy do backend (functions)
    console.log('🚀 Fazendo deploy das functions...');
    execSync('firebase deploy --only functions', { stdio: 'inherit' });

    // Faz o deploy do frontend
    console.log('🚀 Fazendo deploy...');
    execSync(`firebase deploy --only hosting:${targetName}`, { stdio: 'inherit' });

    console.log(`✅ Deploy concluído com sucesso para ${project.name}`);
    console.log(`🔗 URL: https://autoxpress-${formatProjectName(project.name)}.web.app`);
  } catch (error) {
    console.error(`❌ Erro ao fazer deploy para ${project.name}:`, error.message);
    throw error; // Re-throw to stop the deployment process
  }
}

// Função principal que executa o deploy para todos os projetos
async function deployAllProjects() {
  console.log('🚀 Iniciando processo de deploy para todos os projetos...');
  
  for (const project of projectsConfig.projects) {
    await deployProject(project);
  }
  
  console.log('\n✨ Processo de deploy finalizado!');
}

// Executa o deploy
deployAllProjects().catch(console.error); 