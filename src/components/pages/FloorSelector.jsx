import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <Link to="/">
        <button>voltar para o início</button>
      </Link>
      <Link to="/zone-selector">
        <button>selecione a VAV</button>
      </Link>
    </>
  );
};
