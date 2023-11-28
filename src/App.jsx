import { RouterProvider } from "react-router-dom";
import router from "./router";

export default () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
