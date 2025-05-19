import React from "react";
import "./App.css";
import VertexDialogflowIntegration from "./VertexDialogflowIntegration";

function App(): React.ReactNode {
  return (
    <div className="app-container">
      {/* Header com logo e navegação */}
      <header className="app-header">
        <div className="header-container">
          <div className="logo-container">
            <div className="logo">
              <svg
                className="logo-svg"
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
          <nav className="nav-menu">
            <input
              type="text"
              placeholder="Pesquise aqui"
              id="searchWidgetTrigger"
              className="
                px-5 py-3
                rounded-full
                text-gray-800
                bg-white
                border border-blue-200
                shadow-sm
                focus:outline-none
                focus:ring-2 focus:ring-blue-400
                focus:border-blue-400
                transition
                placeholder-gray-400
                text-base
                w-64
              "
            />
            <a
              href="#chat"
              className="nav-link active"
            >
              Assistente Virtual
            </a>
            <a
              href="#parceiros"
              className="nav-link"
            >
              Parceiros
            </a>
            <a
              href="#procedimentos"
              className="nav-link"
            >
              Procedimentos
            </a>
            <a
              href="#recompensas"
              className="nav-link"
            >
              Recompensas
            </a>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            Bem-vindo ao AutoXpress
          </h1>
          <p className="hero-subtitle">
            Seu assistente virtual para dúvidas sobre serviços automotivos e
            procedimentos
          </p>
          <div className="hero-cta">
            <a
              href="#chat"
              className="cta-button"
            >
              Iniciar Conversa
            </a>
          </div>
        </div>
      </section>

      {/* Main content with chat */}
      <main className="main-content">
        <div className="content-container">
          <div className="section-intro">
            <h2 className="section-title">
              Assistente Virtual AutoXpress
            </h2>
            <p className="section-description">
              Tire suas dúvidas sobre nossos serviços, procedimentos, parcerias
              e programa de recompensas diretamente com nosso assistente
              virtual.
            </p>
          </div>

          {/* Chat section */}
          <section
            id="chat"
            className="chat-section"
          >
            <VertexDialogflowIntegration />
          </section>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg
                  className="feature-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="feature-title">
                Programa de Parceiros
              </h3>
              <p className="feature-description">
                Junte-se à nossa rede de parceiros e expanda seus negócios com
                nossa plataforma completa.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <svg
                  className="feature-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Procedimentos</h3>
              <p className="feature-description">
                Conheça nossos procedimentos padrão para um atendimento
                eficiente e de qualidade.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <svg
                  className="feature-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                </svg>
              </div>
              <h3 className="feature-title">
                Programa de Recompensas
              </h3>
              <p className="feature-description">
                Acumule pontos e ganhe benefícios exclusivos com nosso programa
                de recompensas.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-heading">AutoXpress</h3>
              <p className="footer-text">
                Soluções automotivas completas para seu negócio.
              </p>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Links Rápidos</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#chat" className="footer-link">
                    Assistente Virtual
                  </a>
                </li>
                <li>
                  <a href="#parceiros" className="footer-link">
                    Parceiros
                  </a>
                </li>
                <li>
                  <a href="#procedimentos" className="footer-link">
                    Procedimentos
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Recursos</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Contato</h3>
              <ul className="footer-contact">
                <li>suporte@autoxpress.com.br</li>
                <li>(11) 3000-1234</li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
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