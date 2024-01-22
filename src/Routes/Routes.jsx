import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Dashboard/Dashboard";
import ListOFHouses from "../pages/Dashboard/Owner/ListOFHouses";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <ListOFHouses />,
          },
        ],
      },
    ],
  },
]);
export default Routes;
