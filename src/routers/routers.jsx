import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import NotFound from "../components/NotFound/NotFound";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivatRoutes from "../privatRoutes/PrivatRoutes";
import AddCraft from "../anotherFroms/AddForms/AddCraft";
import AllArts from "../pages/AllArts/AllArts";
import MyArts from "../pages/MyArts/MyArts";
import CeramicViewDetails from "../components/CeramicesCurds/CeramicViewDetails";
import SubCategory from "../components/SubCategory/SubCategory";
import UpdateCruft from "../anotherFroms/UpdateForms/UpdateCruft";


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
            path:'/allArt',
            element:<AllArts />,
        },
        {
            path:'/addCraft',
            element:<PrivatRoutes>
              <AddCraft />
            </PrivatRoutes>,
        },
        {
          path:'/updateCraft',
          element:<PrivatRoutes>
              <UpdateCruft />
            </PrivatRoutes>,
        },
        {
            path:'/myArt',
            element:<PrivatRoutes>
              <MyArts />
            </PrivatRoutes>,
        },
        {
          path:'/viewDetails/:id',
          element:<CeramicViewDetails />,
          // loader:({params}) =>fetch(`http://localhost:5000/categories/${params.id}`)
        },
        {
          path:'/subCategory',
          element:<SubCategory />
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