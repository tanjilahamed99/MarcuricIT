import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Root from "../Root/Root";
import Profile from "../components/Profile";
import Test from "../components/Test";
import CreateTest from "../components/CreateTest";
import Login from "../shared/Login";
import SignUP from "../shared/SignUP";
import Lock from "../shared/Lock";
import Cultures from "../components/Cultures";
import AddCultures from "../components/AddCultures";
import CulturesOption from "../components/CulturesOption";
import CreateCulturesOption from "../components/CreateCulturesOption";
import Invoice from "../components/Invoice";
import Branches from "../components/Branches";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"}></Navigate>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUP",
    element: <SignUP />,
  },
  {
    path: "/lock",
    element: <Lock />,
  },
  {
    path: "/dashboard",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/test",
        element: <Test />,
      },
      {
        path: "/dashboard/createTest",
        element: <CreateTest />,
      },
      {
        path: "/dashboard/cultures",
        element: <Cultures />,
      },
      {
        path: "/dashboard/addCultures",
        element: <AddCultures />,
      },
      {
        path: "/dashboard/culturesOption",
        element: <CulturesOption />,
      },
      {
        path: "/dashboard/createCulturesOption",
        element: <CreateCulturesOption />,
      },
      {
        path: "/dashboard/invoice",
        element: <Invoice />,
      },
      {
        path: "/dashboard/report",
        element: <Invoice />,
      },
      {
        path: "/dashboard/branches",
        element: <Branches />,
      },
    ],
  },
]);

export default Router;
