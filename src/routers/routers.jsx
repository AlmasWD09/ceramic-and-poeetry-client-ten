import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import NotFound from "../components/NotFound/NotFound";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllCruft from "../pages/Register/AllCruft/AllCruft";
import PrivatRoutes from "../privatRoutes/PrivatRoutes";

const routers = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOut />,
    errorElement:<NotFound />,
    children: [
        {
          path: '/',
          element: <Home />,
        },
        {
            path:'/about',
            element:<About />,
        },
        {
            path:'/allCraft',
            element:<PrivatRoutes>
              <AllCruft />
            </PrivatRoutes>,
        },
        {
            path:'/register',
            element:<Register />,
        },
        {
            path:'/login',
            element:<Login />
        }
      ],
  },
]);

export default routers;