import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import "../styles/icons/bootstrap-icons/font/bootstrap-icons.css";
// import "../styles/bootstrap/bootstrap.css";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">VAV</th>
                  {/* <th scope="col">Article Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Shares</th> */}
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  {/* <td>Bootstrap 4 CDN and Starter Template</td>
                  <td>Cristina</td>
                  <td>2.846</td> */}
                  <td>
                    <button type="button" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                    <button type="button" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                    <button type="button" className="btn btn-danger">
                      <i>
                        <img src="/esboco-portal-compasss/src/assets/noun-noise-5812398.svg"></img>
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  {/* <td>Bootstrap Grid 4 Tutorial and Examples</td>
                  <td>Cristina</td>
                  <td>3.417</td> */}
                  <td>
                    <button type="button" className="btn btn-primary">
                      <i className="far fa-eye"></i>
                    </button>
                    <button type="button" className="btn btn-success">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button type="button" className="btn btn-danger">
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  {/* <td>Bootstrap Flexbox Tutorial and Examples</td>
                  <td>Cristina</td>
                  <td>1.234</td> */}
                  <td>
                    <button type="button" className="btn btn-primary">
                      <i className="far fa-eye"></i>
                    </button>
                    <button type="button" className="btn btn-success">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button type="button" className="btn btn-danger">
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="homepage-container">
        <div className="container-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
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
          distinctio!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
          distinctio! v Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et
          maxime maiores repellat non veritatis, soluta sequi, illum fugit,
          adipisci ut distinctio! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aut voluptate saepe hic totam iste eligendi,
          cupiditate sed! Et maxime maiores repellat non veritatis, soluta
          sequi, illum fugit, adipisci ut distinctio! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Aut voluptate saepe hic totam iste
          eligendi, cupiditate sed! Et maxime maiores repellat non veritatis,
          soluta sequi, illum fugit, adipisci ut distinctio! Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Aut voluptate saepe hic totam
          iste eligendi, cupiditate sed! Et maxime maiores repellat non
          veritatis, soluta sequi, illum fugit, adipisci ut distinctio! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Aut voluptate
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
          distinctio!
        </div>
        <div className="container-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
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
          distinctio!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
          distinctio! v Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Aut voluptate saepe hic totam iste eligendi, cupiditate sed! Et
          maxime maiores repellat non veritatis, soluta sequi, illum fugit,
          adipisci ut distinctio! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aut voluptate saepe hic totam iste eligendi,
          cupiditate sed! Et maxime maiores repellat non veritatis, soluta
          sequi, illum fugit, adipisci ut distinctio! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Aut voluptate saepe hic totam iste
          eligendi, cupiditate sed! Et maxime maiores repellat non veritatis,
          soluta sequi, illum fugit, adipisci ut distinctio! Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Aut voluptate saepe hic totam
          iste eligendi, cupiditate sed! Et maxime maiores repellat non
          veritatis, soluta sequi, illum fugit, adipisci ut distinctio! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Aut voluptate
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
          distinctio!
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
