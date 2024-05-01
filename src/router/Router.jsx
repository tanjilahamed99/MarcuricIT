import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Root from "../Root/Root";
import Profile from "../components/Profile";
import Test from "../components/Test";
import CreateTest from "../components/CreateTest";
import Login from "../shared/Login";
import SignUP from "../shared/SignUP";
import Lock from "../shared/Lock";

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
