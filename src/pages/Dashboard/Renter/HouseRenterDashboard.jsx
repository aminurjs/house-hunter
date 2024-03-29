import Menu from ".././Menu";
import BookingList from "./BookingList";

const HouseRenterDashboard = () => {
  return (
    <div className="flex max-w-7xl mx-auto mt-1 border-l border-gray-200">
      <div className="md:w-1/5 bg-white">
        <div className="p-2">
          <Menu />
        </div>
      </div>
      <div className="w-full bg-slate-100 min-h-screen">
        <div className=" p-6">
          <BookingList />
        </div>
      </div>
    </div>
  );
};

export default HouseRenterDashboard;
