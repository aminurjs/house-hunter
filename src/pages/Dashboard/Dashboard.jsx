import HouseOwnerDashboard from "./Owner/HouseOwnerDashboard";
import HouseRenterDashboard from "./Renter/HouseRenterDashboard";

const Dashboard = () => {
  const owner = false;
  const renter = true;
  return (
    <div>
      {owner && <HouseOwnerDashboard />}
      {renter && <HouseRenterDashboard />}
    </div>
  );
};

export default Dashboard;
