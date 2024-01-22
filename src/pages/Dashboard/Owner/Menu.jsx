import { FaHouse } from "react-icons/fa6";

import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <>
      <NavLink
        to={"/dashboard/all-houses"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <FaHouse className="text-2xl" />{" "}
        <span className="hidden md:block">All Houses</span>
      </NavLink>
    </>
  );
};

export default Menu;
