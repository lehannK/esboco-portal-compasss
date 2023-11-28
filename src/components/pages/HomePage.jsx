import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <Link to="/floor-selector">
        <button>Selecione o andar</button>
      </Link>
      <button style={{ cursor: "pointer" }}>Clique aqui</button>
    </>
  );
};
