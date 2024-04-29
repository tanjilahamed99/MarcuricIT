import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Dashboard from "../pages/Dashboard";
import List from "../components/List";
import UpdateItem from "../components/UpdateItem";
import CreateItems from "../components/CreateItems";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/list",
            element: <List />,
          },
          {
            path: "/dashboard/createItem",
            element: <CreateItems />,
          },
          {
            path: "/dashboard/updateItem",
            element: <UpdateItem />,
          },
        ],
      },
    ],
  },
]);

export default Router;
