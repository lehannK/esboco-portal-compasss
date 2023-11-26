import { RouterProvider } from "react-router-dom";
import router from "./Router";

export default () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
