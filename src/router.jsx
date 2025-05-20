import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Navber from "./components/Navber";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Navber,
      },
    ],
  },
  {
    path: "/Register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
]);

export { router };
