import { Outlet } from "react-router-dom";

export default () => {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  );
};
