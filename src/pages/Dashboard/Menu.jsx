import { FaHouse } from "react-icons/fa6";
import { FaHouseCircleCheck } from "react-icons/fa6";

import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <>
      <NavLink
        to={"/dashboard/owner"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <FaHouse className="text-2xl" />
        <span className="hidden md:block">All Houses</span>
      </NavLink>
      <NavLink
        to={"/dashboard/renter"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <FaHouseCircleCheck className="text-2xl" />
        <span className="hidden md:block">Bookings</span>
      </NavLink>
    </>
  );
};

export default Menu;
