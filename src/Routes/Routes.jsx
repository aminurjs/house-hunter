import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Dashboard/Dashboard";
import ListOFHouses from "../pages/Dashboard/Owner/ListOFHouses";
import BookingList from "../pages/Dashboard/Renter/BookingList";
import Home from "../pages/Home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
            path: "/dashboard/owner",
            element: <ListOFHouses />,
          },
          {
            path: "/dashboard/renter",
            element: <BookingList />,
          },
        ],
      },
    ],
  },
]);
export default Routes;
