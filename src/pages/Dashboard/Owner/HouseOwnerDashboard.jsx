import Menu from ".././Menu";
import ListOFHouses from "./ListOFHouses";

const HouseOwnerDashboard = () => {
  return (
    <div className="flex max-w-7xl mx-auto mt-1">
      <div className="md:w-1/5 bg-white">
        <div className="p-2">
          <Menu />
        </div>
      </div>
      <div className="w-full bg-slate-100 min-h-screen">
        <div className=" p-6">
          <ListOFHouses />
        </div>
      </div>
    </div>
  );
};

export default HouseOwnerDashboard;
