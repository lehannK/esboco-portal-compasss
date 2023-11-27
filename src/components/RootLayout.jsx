import { Outlet } from "react-router-dom";
import "./styles/RootLayout.css";

export default () => {
  return (
    <>
      <div className="fixed-top ">
        <header className="topbar ">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <ul className="social-network">
                  <li>
                    <a
                      className="waves-effect waves-dark"
                      target="_blank"
                      href="https://br.linkedin.com/company/compasss-tecnologia"
                    >
                      <i className="bi bi-linkedin "></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="waves-effect waves-dark"
                      target="_blank"
                      href="https://www.instagram.com/compassstech/"
                    >
                      <i className="bi bi-instagram "></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="waves-effect waves-dark"
                      target="_blank"
                      href="https://www.facebook.com/compassstecnologia/?locale=pt_BR"
                    >
                      <i className="bi bi-facebook "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear ">
          <div className="container">
            <a
              className="navbar-brand"
              rel="nofollow"
              // target="_blank"
              href="/"
            >
              <div className="text-xl">Portal de Serviços </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Página Inicial
                    <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Contato
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Opção 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Opção 2
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Outra opção
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* <Outlet />*/}

      <div className="fixed-bottom ">
        <footer className="footer  ">
          <img
            src="../assets/Ativo 3.png"
            alt="logo-compasss"
            className="logo-compasss"
          ></img>
          <div>
            <div className="d-flex footer-info">
              <i className="bi bi-geo-alt pl-1"></i>
              <div className="text-light  pl-1 footer-text  ">
                R. Leôncio de Carvalho, 306 - Cj 22
              </div>
            </div>
            <div className="d-flex footer-info">
              <i className="bi bi-envelope pl-1"></i>
              <div className="text-light pl-1 footer-text  ">
                comercialsp@compasss.com.br
              </div>
            </div>
            <div className="d-flex footer-info">
              <i className="bi bi-telephone pl-1"></i>
              <div className="text-light pl-1 footer-text  ">
                +55 (11) xxxxx-xxxx
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
