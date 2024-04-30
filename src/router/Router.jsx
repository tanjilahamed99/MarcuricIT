import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import List from "../components/List";
import UpdateItem from "../components/UpdateItem";
import CreateItems from "../components/CreateItems";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/createItem",
        element: <CreateItems />,
      },
      {
        path: "/updateItem/:id",
        element: <UpdateItem />,
      },
    ],
  },
]);

export default Router;
