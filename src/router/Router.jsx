import { createBrowserRouter } from "react-router-dom";
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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/createTest",
        element: <CreateTest />,
      },
      {
        path: "/cultures",
        element: <Cultures />,
      },
      {
        path: "/addCultures",
        element: <AddCultures />,
      },
      {
        path: "/culturesOption",
        element: <CulturesOption />,
      },
      {
        path: "/createCulturesOption",
        element: <CreateCulturesOption />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
    ],
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
]);

export default Router;
