import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/pages/HomePage";
import FloorSelector from "./components/pages/FloorSelector";
import ZoneSelector from "./components/pages/ZoneSelector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/floor-selector",
        element: <FloorSelector />,
      },
      {
        path: "/zone-selector",
        element: <ZoneSelector />,
      },
    ],
  },
]);

export default router;
