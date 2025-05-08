import React from "react";
import "./App.css";
import VertexDialogflowIntegration from "./VertexDialogflowIntegration";

function App(): React.ReactNode {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 to-blue-700">
      {/* Header com logo e navegação */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-blue-700 font-bold text-2xl flex items-center">
              <svg
                className="w-10 h-10 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.95 13H13V16.95C13 17.5 12.5 18 12 18C11.45 18 11 17.5 11 16.95V13H7.05C6.5 13 6 12.5 6 12C6 11.45 6.5 11 7.05 11H11V7.05C11 6.5 11.45 6 12 6C12.5 6 13 6.5 13 7.05V11H16.95C17.5 11 18 11.45 18 12C18 12.5 17.5 13 16.95 13Z"
                  fill="#1d4ed8"
                />
              </svg>
              AutoXpress
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#chat"
              className="font-medium text-blue-700 hover:text-blue-500"
            >
              Assistente Virtual
            </a>
            <a
              href="#parceiros"
              className="font-medium text-gray-700 hover:text-blue-500"
            >
              Parceiros
            </a>
            <a
              href="#procedimentos"
              className="font-medium text-gray-700 hover:text-blue-500"
            >
              Procedimentos
            </a>
            <a
              href="#recompensas"
              className="font-medium text-gray-700 hover:text-blue-500"
            >
              Recompensas
            </a>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bem-vindo ao AutoXpress
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Seu assistente virtual para dúvidas sobre serviços automotivos e
            procedimentos
          </p>
          <div className="flex justify-center">
            <a
              href="#chat"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
            >
              Iniciar Conversa
            </a>
          </div>
        </div>
      </section>

      {/* Main content with chat */}
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Assistente Virtual AutoXpress
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços, procedimentos, parcerias
              e programa de recompensas diretamente com nosso assistente
              virtual.
            </p>
          </div>

          {/* Chat section */}
          <section
            id="chat"
            className="bg-white rounded-xl shadow-xl overflow-hidden mb-16"
          >
            <VertexDialogflowIntegration />
          </section>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Programa de Parceiros
              </h3>
              <p className="text-gray-600">
                Junte-se à nossa rede de parceiros e expanda seus negócios com
                nossa plataforma completa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Procedimentos</h3>
              <p className="text-gray-600">
                Conheça nossos procedimentos padrão para um atendimento
                eficiente e de qualidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Programa de Recompensas
              </h3>
              <p className="text-gray-600">
                Acumule pontos e ganhe benefícios exclusivos com nosso programa
                de recompensas.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AutoXpress</h3>
              <p className="text-gray-400">
                Soluções automotivas completas para seu negócio.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#chat" className="hover:text-white">
                    Assistente Virtual
                  </a>
                </li>
                <li>
                  <a href="#parceiros" className="hover:text-white">
                    Parceiros
                  </a>
                </li>
                <li>
                  <a href="#procedimentos" className="hover:text-white">
                    Procedimentos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>suporte@autoxpress.com.br</li>
                <li>(11) 3000-1234</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} AutoXpress. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
