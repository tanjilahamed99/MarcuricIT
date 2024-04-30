import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Root from "../Root/Root";
import Profile from "../components/Profile";
import Test from "../components/Test";
import CreateTest from "../components/CreateTest";

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
]);

export default Router;
