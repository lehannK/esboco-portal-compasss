import { Link } from "react-router-dom";
import "../../styles/pages/HomePage.css";
import "../../styles/icons/bootstrap-icons/font/bootstrap-icons.css";
import image from "../../assets/Sem título.png";

const HomePage = () => {
  return (
    <>
      <h1 className="title">Centro Administrativo Rio Negro</h1>
      <div className="main-container">
        <div className="above-1025px">
          <div className="homepage-container pb-3">
            <img className="floor-map" src={image} alt="planta-do-pavimento" />
          </div>
          <hr />
          <div className="cia-title">iMile - 5°pav - Padauri</div>
        </div>
        <div className="above-1025px">
          <div className="homepage-container">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">VAV</th>
                  <th scope="col">Frio</th>
                  <th scope="col">Calor</th>
                  <th scope="col">Ruído</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <th className="table-row" scope="row">
                    1
                  </th>
                  <td>
                    <button type="checkbox" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-volume-up"></i>
                    </button>
                  </td>
                </tr>
                <tr className="row-table-alternate-color">
                  <th className="table-row" scope="row">
                    2
                  </th>
                  <td>
                    <button type="checkbox" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-volume-up"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="table-row" scope="row">
                    3
                  </th>
                  <td>
                    <button type="checkbox" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-volume-up"></i>
                    </button>
                  </td>
                </tr>
                <tr className="row-table-alternate-color">
                  <th className="table-row" scope="row">
                    4
                  </th>
                  <td>
                    <button type="checkbox" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-volume-up"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="table-row" scope="row">
                    5
                  </th>
                  <td>
                    <button type="checkbox" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-volume-up"></i>
                    </button>
                  </td>
                </tr>
                <tr className="row-table-alternate-color">
                  <th className="table-row" scope="row">
                    6
                  </th>
                  <td>
                    <button type="checkbox" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-volume-up"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="table-row" scope="row">
                    7
                  </th>
                  <td>
                    <button type="checkbox" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-volume-up"></i>
                    </button>
                  </td>
                </tr>
                <tr className="row-table-alternate-color">
                  <th className="table-row" scope="row">
                    8
                  </th>
                  <td>
                    <button type="checkbox" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-volume-up"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="table-row" scope="row">
                    9
                  </th>
                  <td>
                    <button type="checkbox" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-volume-up"></i>
                    </button>
                  </td>
                </tr>
                <tr className="row-table-alternate-color">
                  <th className="table-row" scope="row">
                    10
                  </th>
                  <td>
                    <button type="checkbox" className="btn btn-primary">
                      <i className="bi bi-thermometer-snow"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-thermometer-sun"></i>
                    </button>
                  </td>
                  <td>
                    <button type="checkbox" className="btn btn-success">
                      <i className="bi bi-volume-up"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="submit">
            <button className="btn btn-light" type="submit">
              Enviar requisição
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
