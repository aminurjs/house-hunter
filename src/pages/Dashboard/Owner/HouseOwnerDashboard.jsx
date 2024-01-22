import { Outlet } from "react-router-dom";
import DashboardMenu from "./Menu";

const HouseOwnerDashboard = () => {
  return (
    <div className="flex max-w-7xl mx-auto mt-1">
      <div className="md:w-1/5 bg-white">
        <div className="p-2">
          <DashboardMenu />
        </div>
      </div>
      <div className="w-full bg-slate-100 min-h-screen">
        <div className=" p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HouseOwnerDashboard;
