import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import routeGenerator from "../utils/routesGenerator";
import { userPaths } from "./users.routes";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <App />,
    children: routeGenerator(userPaths),
  },
]);

export default router;
