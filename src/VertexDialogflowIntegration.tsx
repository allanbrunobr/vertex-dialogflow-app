import React, { useState, useEffect } from 'react';

// Componente principal que integra Vertex AI Search e Dialogflow
const VertexDialogflowIntegration: React.FC = () => {
  const [isMessengerReady, setIsMessengerReady] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('chat');
  
  // ID do agente do Dialogflow - Substitua pelo ID do seu agente
  const DIALOGFLOW_AGENT_ID = import.meta.env.VITE_DIALOGFLOW_AGENT_ID || 'SEU_AGENT_ID_AQUI';
  
  useEffect(() => {
    const handleMessengerLoaded = () => {
      console.log('DF Messenger carregado e pronto para uso');
      setIsMessengerReady(true);
    };

    window.addEventListener('df-messenger-loaded', handleMessengerLoaded);
    
    return () => {
      window.removeEventListener('df-messenger-loaded', handleMessengerLoaded);
    };
  }, []);
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Plataforma de Conversação Inteligente</h1>
          <p className="text-sm opacity-80">Integração Vertex AI Search + Dialogflow</p>
        </div>
      </header>
      
      {/* Conteúdo principal */}
      <div className="flex-grow flex flex-col md:flex-row max-w-6xl mx-auto w-full p-4 gap-6">
        {/* Painel de controle - lado esquerdo */}
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Painel de Controle</h2>
          
          {/* Abas */}
          <div className="flex border-b mb-4">
            <button 
              className={`py-2 px-4 ${activeTab === 'chat' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('chat')}
            >
              Chat
            </button>
            <button 
              className={`py-2 px-4 ${activeTab === 'config' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('config')}
            >
              Configurações
            </button>
            <button 
              className={`py-2 px-4 ${activeTab === 'analytics' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>
          </div>
          
          {/* Conteúdo das abas */}
          <div className="flex-grow">
            {activeTab === 'chat' && (
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h3 className="font-medium text-gray-700 mb-2">Status do Agente</h3>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-green-700">Online</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Usando Data Store: Google Store</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Conversas Recentes</h3>
                  <ul className="space-y-2">
                    <li className="text-sm p-2 bg-blue-50 rounded">Usuário #1092 - há 5 min</li>
                    <li className="text-sm p-2 bg-gray-100 rounded">Usuário #1088 - há 23 min</li>
                    <li className="text-sm p-2 bg-gray-100 rounded">Usuário #1079 - há 1 hora</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'config' && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Configurações do Agente</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">ID do Agente</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded text-sm bg-gray-50" 
                        value={DIALOGFLOW_AGENT_ID} 
                        readOnly 
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Idioma</label>
                      <select className="w-full p-2 border rounded text-sm">
                        <option>Português (Brasil)</option>
                        <option>English (US)</option>
                        <option>Español</option>
                      </select>
                    </div>
                    <div className="flex items-center mt-2">
                      <input type="checkbox" id="fallback" className="mr-2" checked />
                      <label htmlFor="fallback" className="text-sm">Habilitar resposta generativa com fallback</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Data Stores Disponíveis</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center text-sm p-2 bg-blue-50 border border-blue-200 rounded">
                      <span>Google Store</span>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Ativo</span>
                    </li>
                    <li className="flex justify-between items-center text-sm p-2 bg-gray-50 border border-gray-200 rounded">
                      <span>Documentação Técnica</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Inativo</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'analytics' && (
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h3 className="font-medium text-gray-700 mb-2">Estatísticas</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-2 rounded border">
                      <div className="text-2xl font-bold text-blue-600">87%</div>
                      <div className="text-xs text-gray-500">Taxa de resolução</div>
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <div className="text-2xl font-bold text-blue-600">315</div>
                      <div className="text-xs text-gray-500">Conversas hoje</div>
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <div className="text-2xl font-bold text-green-600">1.2s</div>
                      <div className="text-xs text-gray-500">Tempo de resposta</div>
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <div className="text-2xl font-bold text-purple-600">8.4</div>
                      <div className="text-xs text-gray-500">Satisfação (0-10)</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Consultas Frequentes</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>Preço do Pixel 7</span>
                      <span className="text-gray-500">23%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Garantia de produtos</span>
                      <span className="text-gray-500">18%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Devolução</span>
                      <span className="text-gray-500">12%</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {/* Botões de ação */}
          <div className="mt-4 pt-4 border-t">
            <button className="w-full bg-blue-600 text-white rounded py-2 mb-2 text-sm hover:bg-blue-700">
              Atualizar Data Store
            </button>
            <button className="w-full bg-gray-100 text-gray-700 rounded py-2 text-sm hover:bg-gray-200">
              Ver documentação
            </button>
          </div>
        </div>
        
        {/* Área de chat - lado direito */}
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-blue-50 border-b">
            <h2 className="text-xl font-semibold">Prévia do Assistente Virtual</h2>
          </div>
          
          <div className="flex-grow relative" style={{ height: '600px' }}>
            {!isMessengerReady && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}
            <df-messenger
              project-id="prj-ramping-prd-01"
              agent-id="0b36f7b4-c99b-4e26-a0c2-c14b55d43f40"
              language-code="pt-br"
              max-query-length="-1"
            >
              <df-messenger-chat-bubble
                chat-title="Bot AutoXpress"
              >
              </df-messenger-chat-bubble>
            </df-messenger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VertexDialogflowIntegration;