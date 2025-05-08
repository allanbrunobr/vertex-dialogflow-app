import React, { useState, useEffect } from "react";

// Componente principal que integra Vertex AI Search e Dialogflow
const VertexDialogflowIntegration: React.FC = () => {
  const [isMessengerReady, setIsMessengerReady] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("sobre");

  // ID do agente do Dialogflow - Substitua pelo ID do seu agente
  const DIALOGFLOW_AGENT_ID =
    import.meta.env.VITE_DIALOGFLOW_AGENT_ID ||
    "0b36f7b4-c99b-4e26-a0c2-c14b55d43f40";

  useEffect(() => {
    const handleMessengerLoaded = () => {
      console.log("DF Messenger carregado e pronto para uso");
      setIsMessengerReady(true);
    };

    window.addEventListener("df-messenger-loaded", handleMessengerLoaded);

    return () => {
      window.removeEventListener("df-messenger-loaded", handleMessengerLoaded);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">
            AutoXpress - Sistema Inteligente de Atendimento
          </h1>
          <p className="text-sm opacity-80">
            Soluções automotivas completas para seu negócio
          </p>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4 pb-10 gap-6">
        {/* Painel de informações centralizado */}
        <div className="w-full bg-white rounded-lg shadow-md p-6 mb-4">
          <div className="border-b pb-3 mb-4">
            <h2 className="text-xl font-semibold text-blue-700">
              Bem-vindo à AutoXpress
            </h2>
            <p className="text-gray-600 mt-2">
              Sua parceira em soluções completas para o setor automotivo.
            </p>
          </div>

          <div className="flex justify-center border-b mb-4">
            <button
              className={`py-2 px-6 ${
                activeTab === "sobre"
                  ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("sobre")}
            >
              Sobre Nós
            </button>
            <button
              className={`py-2 px-6 ${
                activeTab === "parceiros"
                  ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("parceiros")}
            >
              Parceiros
            </button>
            <button
              className={`py-2 px-6 ${
                activeTab === "recompensas"
                  ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("recompensas")}
            >
              Recompensas
            </button>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {activeTab === "sobre" && (
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Nossa Missão</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Oferecer soluções inteligentes que otimizam processos e
                  transformam a experiência automotiva para nossos clientes e
                  parceiros.
                </p>

                <h3 className="font-medium text-gray-800 mb-2">
                  Procedimentos
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Nossos procedimentos são padronizados para garantir qualidade
                  e eficiência em todos os serviços. Consulte nosso assistente
                  virtual para mais detalhes.
                </p>

                <h3 className="font-medium text-gray-800 mb-2">Contato</h3>
                <p className="text-gray-600 text-sm">
                  Central de Atendimento: (11) 3000-1234
                  <br />
                  E-mail: contato@autoxpress.com.br
                </p>
              </div>
            )}

            {activeTab === "parceiros" && (
              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Programa de Parceiros
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Junte-se à nossa rede de parceiros e tenha acesso a benefícios
                  exclusivos, suporte técnico especializado e ferramentas de
                  gestão avançadas.
                </p>

                <h3 className="font-medium text-gray-800 mb-2">Benefícios</h3>
                <ul className="text-gray-600 text-sm list-disc pl-5 mb-3">
                  <li>Comissões diferenciadas</li>
                  <li>Treinamentos exclusivos</li>
                  <li>Material de marketing personalizado</li>
                  <li>Suporte técnico prioritário</li>
                </ul>

                <div className="text-center mt-4">
                  <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Saiba mais sobre parcerias
                  </button>
                </div>
              </div>
            )}

            {activeTab === "recompensas" && (
              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Programa de Recompensas
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Acumule pontos a cada serviço realizado e troque por descontos
                  exclusivos, produtos, serviços ou até mesmo capacitações
                  especializadas.
                </p>

                <h3 className="font-medium text-gray-800 mb-2">
                  Como Funciona
                </h3>
                <ul className="text-gray-600 text-sm list-disc pl-5 mb-3">
                  <li>1 serviço = 10 pontos base</li>
                  <li>Pontos extras para serviços premium</li>
                  <li>Níveis de fidelidade: Bronze, Prata, Ouro e Platina</li>
                  <li>Recompensas desbloqueadas conforme seu nível</li>
                </ul>

                <div className="bg-blue-50 p-3 rounded-md mt-3 text-center">
                  <p className="text-blue-800 text-sm font-medium">
                    Já tem pontos acumulados?
                  </p>
                  <p className="text-blue-600 text-sm">
                    Pergunte ao nosso assistente virtual como resgatá-los!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Área do chat */}
        <div className="relative" style={{ height: "400px" }}>
          <df-messenger
            project-id="prj-ramping-prd-01"
            agent-id="0b36f7b4-c99b-4e26-a0c2-c14b55d43f40"
            language-code="pt-br"
            max-query-length="-1"
          >
            <df-messenger-chat-bubble chat-title="Bot AutoXpress"></df-messenger-chat-bubble>
          </df-messenger>
        </div>
      </div>
    </div>
  );
};

export default VertexDialogflowIntegration;
