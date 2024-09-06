import MainLayout from "../components/layouts/MainLayout.js";

import Home from "../pages/main/Home.js";
import Services from "../pages/main/Services.js";
import Pricing from "../pages/main/Pricing.js";
import LoginUser from "../pages/main/LoginUser.js";
import LoginAdmin from "../pages/main/LoginAdmin.js";

const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "services",
      element: <Services />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
      path: "login",
      element: <LoginUser />,
    },
    {
      path: "admin/login",
      element: <LoginAdmin />,
    },
  ],
};

export default mainRoutes;