import { Outlet } from "react-router-dom";
import "./styles/RootLayout.css";
import "./styles/icons/bootstrap-icons.css";

export default () => {
  return (
    <>
      <div className="fixed-top">
        <header className="topbar">
          <div className="container pr-1 col-12 ">
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
        <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
          <div className="container col-12">
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
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item active">
                  <a className="nav-link responsivity-dropdown" href="/">
                    Página Inicial
                    <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item dropdown responsivity-dropdown">
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

                <li className="nav-item responsivity-dropdown">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="wrapper">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut voluptate
        saepe hic totam iste eligendi, cupiditate sed! Et maxime maiores
        repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
        voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! v Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et maxime
        maiores repellat non veritatis, soluta sequi, illum fugit, adipisci ut
        distinctio!
      </div>

      {/* <Outlet />*/}

      <div className="fixed-bottom ">
        <footer className="footer  ">
          <a href="/">
            <img
              src="../assets/Ativo 3.png"
              alt="logo-compasss"
              className="logo-compasss"
            ></img>
          </a>
          <div>
            <div className="footer-info ">
              <a
                target="_blank"
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjhmIWmmOSCAxXcpZUCHWYcDTUQ8gF6BAgLEAI&url=%2Fmaps%2Fplace%2FR.%2BLe%25C3%25B4ncio%2Bde%2BCarvalho%2C%2B306%2B-%2BConj%2B22%2B-%2BPara%25C3%25ADso%2C%2BS%25C3%25A3o%2BPaulo%2B-%2BSP%2C%2B04003-010%2Fdata%3D!4m2!3m1!1s0x94ce59958b7c0001%3A0x94f252f22daf35b1%3Fsa%3DX%26ved%3D2ahUKEwjhmIWmmOSCAxXcpZUCHWYcDTUQ8gF6BAgKEAA&usg=AOvVaw1S2tw9s1w42iYw2Cvj7Q9f&opi=89978449"
              >
                <i className="bi bi-geo-alt pl-1 text-light"></i>
              </a>
              <div className="text-light  pl-1 footer-text">
                R. Leôncio de Carvalho, 306 - Cj 22
              </div>
            </div>
            <div className="footer-info">
              <i className="bi bi-envelope pl-1 text-light"></i>
              <div className="text-light pl-1 footer-text  ">
                comercialsp@compasss.com.br
              </div>
            </div>
            <div className="footer-info">
              <i className="bi bi-telephone pl-1 text-light"></i>
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
