import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto p-10">
          <div className="bg-white  rounded shadow p-10 flex items-center border border-gray-200">
            <div className="max-w-2xl w-full mx-auto">
              <h1 className="text-4xl text-dark-01  font-semibold text-center mb-2">
                Login user
              </h1>
              <p className="text-center text-gray-600  mb-3">
                Already have an account?
                <Link className="text-dark-03 ml-2" to={"/register"}>
                  Go Register!
                </Link>
              </p>
              <form className="mt-8">
                <input
                  className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full mb-4"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <div className="relative">
                  <input
                    className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full mb-2"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <span
                    className="text-lg absolute top-3 right-4 text-stone-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full mt-6 mb-10 py-2.5 text-white text-lg font-medium  bg-dark-03 duration-500  rounded active:scale-95"
                  >
                    Login in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
