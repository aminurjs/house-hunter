import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import HouseOwnerDashboard from "./Owner/HouseOwnerDashboard";
import HouseRenterDashboard from "./Renter/HouseRenterDashboard";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div>
      {user?.role === "house_owner" && <HouseOwnerDashboard />}
      {user?.role === "house_renter" && <HouseRenterDashboard />}
      {!user && (
        <div className="text-center mt-20 mb-24">
          <h1 className="text-3xl font-bold text-center">
            Please <Link to="/login">Login</Link> First.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
