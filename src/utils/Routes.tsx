import { createBrowserRouter } from "react-router";
import Login from "../components/Login";
import Browse from "../components/Browse";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default AppRoutes;
