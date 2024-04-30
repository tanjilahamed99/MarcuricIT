import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UpdateItem from "../components/UpdateItem";
import CreateItems from "../components/CreateItems";
import Root from "../Root/Root";
import Profile from "../components/Profile";
import Test from "../components/Test";

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
        path: "/updateItem/:id",
        element: <UpdateItem />,
      },
    ],
  },
]);

export default Router;
