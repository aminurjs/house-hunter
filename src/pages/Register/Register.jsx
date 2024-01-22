import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-transparent ">
      <div className="max-w-5xl mx-auto p-10">
        <div className="bg-white  rounded shadow p-10  border border-gray-200">
          <div>
            <h1 className="text-3xl text-dark-01  font-semibold text-center mb-2">
              Register - House Hunter
            </h1>
            <p className="text-center text-gray-600  mb-3">
              Already have an account?
              <Link className="text-dark-03 ml-2" to={"/login"}>
                Go Login!
              </Link>
            </p>
            <form className="mt-8">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="mb-4">
                  <div>
                    <label
                      className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                  </div>
                  <div>
                    <input
                      className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-gray-50   rounded-md w-full"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    <label
                      className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                  </div>
                  <div>
                    <input
                      className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-gray-50   rounded-md w-full"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="mb-4">
                  <div>
                    <label
                      className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                      htmlFor="role"
                    >
                      Role:
                      <span className="font-light text-red-600 text-base"></span>
                    </label>
                  </div>
                  <div>
                    <select
                      className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-gray-50   rounded-md w-full"
                      name="role"
                      id="role"
                    >
                      <option value="" disabled selected hidden>
                        Select your role...
                      </option>
                      <option value="house_owner">House Owner</option>
                      <option value="house_renter">House Renter</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    <label
                      className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                      htmlFor="phone_number"
                    >
                      Phone Number:
                    </label>
                  </div>
                  <div>
                    <input
                      className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-gray-50   rounded-md w-full"
                      type="number"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Type Your Number"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <label
                    className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="password"
                  >
                    Password:
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-gray-50   rounded-md w-full mb-2"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    id="password"
                    required
                  />
                  <span
                    className="text-lg absolute top-3 right-4 text-stone-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <span className="font-light text-red-600 text-base"></span>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full mt-6 mb-10 py-2.5 text-white text-lg font-medium  bg-dark-03  duration-500  rounded active:scale-95"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
