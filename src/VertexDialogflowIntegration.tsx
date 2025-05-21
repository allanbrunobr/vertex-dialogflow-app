import React, { useState, useEffect } from "react";
import "./VertexDialogflowIntegration.css";

// Componente principal que integra Vertex AI Search e Dialogflow
const VertexDialogflowIntegration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("sobre");

  useEffect(() => {
    const handleMessengerLoaded = () => {
      console.log("DF Messenger carregado e pronto para uso");
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
       
      </header>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4 pb-10 gap-6">
        {/* Painel de informações centralizado */}
        <div className="w-full bg-white rounded-lg shadow-md p-6 mb-4">
          <div className="border-b pb-3 mb-4">
            <h2 className="text-2xl font-bold text-blue-700 text-center">
              Bem-vindo à AutoXpress
            </h2>
            <p className="text-gray-600 mt-2 text-center text-lg">
              Sua parceira em soluções completas para o setor automotivo.
            </p>
          </div>

          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Tire suas dúvidas sobre nossos serviços, procedimentos, parcerias e programa de recompensas diretamente com nosso assistente virtual.
              </p>
            </div>

            {/* Seção de Seguros */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                Seguro Auto Completo
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-4 text-lg">Coberturas Principais</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Proteção contra colisão e roubo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Assistência 24h em todo o Brasil</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Cobertura para vidros e acessórios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Proteção contra danos naturais</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-4 text-lg">Benefícios Exclusivos</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Carro reserva por 15 dias</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Desconto progressivo por sinistralidade</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">App de gestão de sinistros</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Assistência residencial</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg font-semibold">
                  Solicitar Cotação
                </button>
              </div>
            </div>

            {/* Programa de Parceiros */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Programa de Parceiros
              </h3>
              <p className="text-gray-600 text-lg">
                Junte-se à nossa rede de parceiros e expanda seus negócios com nossa plataforma completa.
              </p>
            </div>

            {/* Procedimentos */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Procedimentos
              </h3>
              <p className="text-gray-600 text-lg">
                Conheça nossos procedimentos padrão para um atendimento eficiente e de qualidade.
              </p>
            </div>

            {/* Programa de Recompensas */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Programa de Recompensas
              </h3>
              <p className="text-gray-600 text-lg">
                Acumule pontos e ganhe benefícios exclusivos com nosso programa de recompensas.
              </p>
            </div>
          </div>
        </div>

        {/* Área do chat */}
        <div className="relative" style={{ height: "400px" }}>
          <df-messenger
            project-id="prj-bootcamp-observatorio-01"
            agent-id="c50157a7-391d-4758-9a4e-509cd8ae8054"
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