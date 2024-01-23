import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { navLink } from "./NavItems";
import "./Navbar.css";
import useUser from "../../Hooks/useUser";
import useAxios from "../../Hooks/useAxios";

const Navbar = () => {
  const axios = useAxios();
  const { user, refetch } = useUser();

  const handleLogout = async () => {
    const res = await axios.post("/auth/logout");
    console.log(res);
    refetch();
  };
  return (
    <div className="w-full py-3  bg-base-100 shadow">
      <div className="max-w-7xl mx-auto navbar">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link
            to={"/"}
            className="flex gap-3 tracking-tight text-3xl text-dark-01 font-bold items-center"
          >
            <img className="w-14" src="/icon.png" alt="" />
            House Hunter
          </Link>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className=" menu-horizontal">
            {/* Navbar menu content here */}
            {navLink.map((menu) => (
              <li
                className="mr-5 text-dark-01 text-lg font-medium hover:text-dark-03 hover:underline"
                key={menu.id}
              >
                <NavLink className="" to={menu.path}>
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none px-2 mx-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                {user?.photo ? (
                  <div className="w-10 rounded-full bg-white">
                    <img src={user.photo} />
                  </div>
                ) : (
                  <div className="w-10 p-1.5 border border-gray-400 rounded-full">
                    <FaUserAlt className="w-full text-2xl"></FaUserAlt>
                  </div>
                )}
              </label>
              <div
                tabIndex={1}
                className="mt-3 z-[99] shadow menu menu-sm dropdown-content bg-base-100 rounded-box p-5 min-w-[220px] border border-gray-200"
              >
                <label className="avatar text-center mx-auto">
                  {user?.photo ? (
                    <div className="w-16 rounded-full bg-white">
                      <img src={user.photo} />
                    </div>
                  ) : (
                    <div className="w-16 p-3 border border-gray-500 rounded-full">
                      <FaUserAlt className="w-full text-4xl"></FaUserAlt>
                    </div>
                  )}
                </label>
                <h2 className="mt-2  text-neutral-900  font-medium text-lg text-center">
                  {user?.name}
                </h2>
                <h2 className="mb-4  text-neutral-900  font-medium text-sm text-center">
                  {user?.email}
                </h2>
                <ul>
                  <li>
                    <button onClick={handleLogout} className="btn btn-sm">
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="py-1.5 px-6 text-white bg-dark-03 rounded active:scale-95">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
