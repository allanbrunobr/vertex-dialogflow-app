import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {
  People,
  Build,
  Redeem,
  Functions,
  Folder,
  PlayArrow,
  Assessment,
  BarChart,
  Chat,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 290;

const firebaseTheme = createTheme({
  palette: {
    primary: {
      main: '#0288d1', // Azul para destaque
      contrastText: '#fff',
    },
    secondary: {
      main: '#fb8c00', // Laranja vibrante
      contrastText: '#fff',
    },
    background: {
      default: '#f7f8fa',
      paper: '#fff'
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});

const sidebarGroups = [
  {
    title: 'Criação',
    icon: <Build color="primary" />,
    items: [
      { text: 'Parceiros', icon: <People color="secondary" />, anchor: 'parceiros' },
      { text: 'Operações', icon: <Build color="secondary" />, anchor: 'operacoes' },
      { text: 'Recompensas', icon: <Redeem color="secondary" />, anchor: 'recompensas' },
    ],
  },
  {
    title: 'Execução',
    icon: <Functions color="primary" />,
    items: [
      { text: 'Simulações', icon: <PlayArrow color="secondary" />, anchor: 'simulacoes' },
      { text: 'Contratos', icon: <Assessment color="secondary" />, anchor: 'contratos' },
      { text: 'Cancelamentos', icon: <Folder color="secondary" />, anchor: 'cancelamentos' },
    ],
  },
  {
    title: 'Analytics',
    icon: <BarChart color="primary" />,
    items: [
      { text: 'Visão Geral', icon: <BarChart color="secondary" />, anchor: 'visao-geral' },
      { text: 'Relatórios', icon: <Folder color="secondary" />, anchor: 'relatorios' },
      { text: 'Desempenho de Parceiros', icon: <People color="secondary" />, anchor: 'desempenho-parceiros' },
    ],
  },
  {
    title: 'Inteligência Artificial',
    icon: <Chat color="primary" />,
    items: [
      { text: 'Assistente Virtual', icon: <Chat color="secondary" />, anchor: 'assistente-virtual' },
      { text: 'Classificação de Documentos', icon: <Functions color="secondary" />, anchor: 'classificacao-documentos' },
      { text: 'OCR de Sinistros', icon: <Folder color="secondary" />, anchor: 'ocr-sinistros' },
    ],
  },
];

export default function App() {
  const [expanded, setExpanded] = React.useState<string | false>('Criação');
  const [activeAnchor, setActiveAnchor] = React.useState<string>('parceiros');

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleMenuItemClick = (anchor: string) => {
    setActiveAnchor(anchor);
  };

  return (
    <ThemeProvider theme={firebaseTheme}>
      <Box sx={{ display: 'flex', bgcolor: 'background.default', minHeight: '100vh' }}>
        <CssBaseline />
        {/* Sidebar */}
        <Box
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            bgcolor: '#f5f6fa',
            borderRight: '1px solid #e0e0e0',
            p: 0,
            display: { xs: 'none', md: 'block' },
            minHeight: '100vh',
          }}
        >
          <Box sx={{ p: 3, pb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 32, height: 32, bgcolor: '#ff9900', borderRadius: '50%' }} />
            <Typography variant="h6" sx={{ color: '#ff9900', fontWeight: 700 }}>
              AutoXpress
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            {sidebarGroups.map((group) => (
              <Accordion
                key={group.title}
                expanded={expanded === group.title}
                onChange={handleAccordionChange(group.title)}
                disableGutters
                elevation={0}
                sx={{
                  bgcolor: 'transparent',
                  boxShadow: 'none',
                  mb: 1,
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ChevronRightIcon sx={{ color: expanded === group.title ? '#fb8c00' : '#bdbdbd', transform: expanded === group.title ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />}
                  aria-controls={`${group.title}-content`}
                  id={`${group.title}-header`}
                  sx={{
                    minHeight: 48,
                    pl: 0.5,
                    pr: 1,
                    bgcolor: 'background.sidebar',
                    fontWeight: 600,
                    color: expanded === group.title ? '#fb8c00' : 'inherit',
                    transition: 'color 0.2s',
                  }}
                >
                  <Box sx={{ mr: 1 }}>{group.icon}</Box>
                  <Typography sx={{ fontWeight: 600 }}>{group.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <List>
                    {group.items.map((item) => (
                      <ListItem key={item.text} disablePadding>
                        <ListItemButton
                          component="a"
                          href={`#${item.anchor}`}
                          onClick={() => handleMenuItemClick(item.anchor)}
                          sx={{
                            pl: 3,
                            py: 1.2,
                            borderLeft: activeAnchor === item.anchor ? '4px solid #fb8c00' : '4px solid transparent',
                            bgcolor: activeAnchor === item.anchor ? '#fff3e0' : 'transparent',
                            fontWeight: activeAnchor === item.anchor ? 600 : 400,
                            color: activeAnchor === item.anchor ? '#fb8c00' : 'inherit',
                            transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                            '&:hover': {
                              bgcolor: 'rgba(255,152,0,0.1)',
                              color: '#fb8c00',
                            },
                          }}
                          className={activeAnchor === item.anchor ? 'menu-item active' : 'menu-item'}
                        >
                          <ListItemIcon sx={{ minWidth: 36, color: activeAnchor === item.anchor ? '#fb8c00' : '#757575', transition: 'color 0.2s' }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
        {/* Main content */}
        <Box
          component="main"
          sx={{ flexGrow: 1, 
            p: { xs: 2, md: 5 }, width: { md: `calc(100% - ${drawerWidth}px)` }, 
            bgcolor: 'background.default' }}
        >
          {/* Topbar branca */}
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 700 }}>
              AutoXpress - Visão Geral
            </Typography>
          </Box>
          {/* Cards grandes */}
          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, mb: 4 }}>
            {/* Parceiros Card */}
            <Box id="parceiros" sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 3, boxShadow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 6px 15px rgba(0,0,0,0.10)' } }}>
              <HandshakeIcon sx={{ fontSize: 64, color: '#ff9900', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}>
                Seja um parceiro AutoXpress
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 2 }}>
                Aumente seus lucros oferecendo proteção veicular com tecnologia, suporte e benefícios exclusivos.
              </Typography>
              <ul style={{ textAlign: 'left', margin: 0, paddingLeft: 20, marginBottom: 16 }}>
                <li>Proteção total: colisão, roubo, desastres</li>
                <li>Assistência 24h + carro reserva</li>
                <li>Plataforma digital para gestão</li>
                <li>Cashback por desempenho</li>
                <li>Suporte técnico especializado</li>
              </ul>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<HandshakeIcon />}
                sx={{ mt: 1, borderRadius: 3, fontWeight: 600, textTransform: 'none', px: 3, py: 1 }}
              >
                Torne-se um Parceiro
              </Button>
            </Box>
            {/* Coberturas Principais Card */}
            <Box id="procedimentos" sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 3, boxShadow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 6px 15px rgba(0,0,0,0.10)' } }}>
              <GroupIcon sx={{ fontSize: 64, color: '#ff9900', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}>
                Proteção Veicular Completa
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 2 }}>
                Tenha tranquilidade com nossa cobertura contra os principais riscos veiculares.
              </Typography>
              <ul style={{ textAlign: 'left', margin: 0, paddingLeft: 20, marginBottom: 16 }}>
                <li>Colisão e roubo</li>
                <li>Danos naturais</li>
                <li>Vidros e acessórios</li>
                <li>Assistência em todo Brasil</li>
                <li>Carro reserva até 15 dias</li>
              </ul>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<GroupIcon />}
                sx={{ mt: 1, borderRadius: 3, fontWeight: 600, textTransform: 'none', px: 3, py: 1 }}
              >
                Simule Agora
              </Button>
            </Box>
            {/* Recompensas Card */}
            <Box id="recompensas" sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 3, boxShadow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 6px 15px rgba(0,0,0,0.10)' } }}>
              <UploadFileIcon sx={{ fontSize: 64, color: '#ff9900', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}>
                Teste com IA
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 2 }}>
                Envie um arquivo JSON e veja como nosso modelo AutoML responde com uma previsão personalizada.
              </Typography>
              <ul style={{ textAlign: 'left', margin: 0, paddingLeft: 20, marginBottom: 16 }}>
                <li>Upload seguro de dados (.json)</li>
                <li>Previsão gerada por IA</li>
                <li>Retorno em tempo real</li>
                <li>Ideal para testes e simulações</li>
                <li>Totalmente automatizado</li>
              </ul>
              <Button
                variant="contained"
                color="secondary"
                component="label"
                startIcon={<UploadFileIcon />}
                sx={{ mt: 1, borderRadius: 3, fontWeight: 600, textTransform: 'none', px: 3, py: 1 }}
              >
                Enviar JSON
                <input type="file" hidden accept="application/json" onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = async (event) => {
                      try {
                        const data = JSON.parse(event.target?.result as string);
                        console.log("JSON carregado:", data);
                        const response = await fetch('http://localhost:3001/predict', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(data),
                        });
                        const prediction = await response.json();
                        console.log(prediction);
                      } catch (error) {
                        alert("Erro ao ler o JSON. Verifique o formato.");
                      }
                    };
                    reader.readAsText(file);
                  }
                }} />
              </Button>
            </Box>
          </Box>
          {/* Card de Assistente Virtual */}
          <df-messenger
            project-id="prj-bootcamp-therarocks-01"
            agent-id="3a145c75-c94f-4dbc-bee5-eee5e1db22e4"
            language-code="pt-br"
            chat-title="AutoXpress Bot"
            max-query-length="-1"
          >
            <df-messenger-chat-bubble chat-title="AutoXpress Bot"></df-messenger-chat-bubble>
          </df-messenger>
        </Box>
      </Box>
      {/* Footer deve ficar AQUI, fora do Box principal */}
      <Box component="footer" sx={{
        mt: 0,
        bgcolor: '#f5f6fa',
        py: 4,
        borderTop: '1px solid #e0e0e0',
      }}>
        <Box sx={{
          maxWidth: 900,
          mx: 'auto',
          px: 2,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 3,
        }}>
          {/* Logo e nome */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: { xs: 2, sm: 0 } }}>
            <Box sx={{ width: 28, height: 28, bgcolor: '#ff9900', borderRadius: '50%' }} />
            <Typography variant="h6" sx={{ color: '#ff9900', fontWeight: 700 }}>
              AutoXpress
            </Typography>
          </Box>
          {/* Links institucionais */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography variant="body2" component="a" href="#" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: '#039be5' } }}>Sobre</Typography>
            <Typography variant="body2" component="a" href="#" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: '#039be5' } }}>Contato</Typography>
            <Typography variant="body2" component="a" href="#" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: '#039be5' } }}>Política de Privacidade</Typography>
          </Box>
          {/* Redes sociais */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton color="primary" href="https://facebook.com" target="_blank"><FacebookIcon fontSize="small" /></IconButton>
            <IconButton color="primary" href="https://instagram.com" target="_blank"><InstagramIcon fontSize="small" /></IconButton>
            <IconButton color="primary" href="https://linkedin.com" target="_blank"><LinkedInIcon fontSize="small" /></IconButton>
            <IconButton color="primary" href="https://wa.me/5511999999999" target="_blank"><WhatsAppIcon fontSize="small" /></IconButton>
          </Box>
          {/* Contato */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>E-mail: contato@autoxpress.com.br</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Tel: (11) 3000-1234</Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', mt: 3 }}>
          &copy; {new Date().getFullYear()} AutoXpress. Todos os direitos reservados.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}