import React, { useState } from "react";
import home from "../assets/home.jpg";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="flex justify-evenly items-center pt-20">
      <div className="left">
        <img src={home} alt="home" className="w-96" />
      </div>
      <div className="right flex flex-col justify-center items-center gap-5 w-96 h-full bg-white rounded-md shadow-md  py-5">
        <div>
          <h3 className="text-2xl font-normal">Welcome</h3>
          <p className="text-gray-500 text-normal font-normal">
            Please login to your account 🙂
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="flex text-4xl gap-7 font-normal">
            <h3
              className={`text-lg cursor-pointer ${
                active ? "underline text-xl" : ""
              } transition-all duration-200 ease-in-out`}
              onClick={() => setActive(!active)}
            >
              User
            </h3>
            <h3
              className={`text-lg cursor-pointer ${
                !active ? "underline text-xl" : ""
              } transition-all duration-200 ease-in-out`}
              onClick={() => setActive(!active)}
            >
              Admin
            </h3>
          </div>
          <form className="flex flex-col justify-end gap-5 p-4 rounded-md ">
            <input
              type="email"
              className="border-b-2 border-solid border-b-blue-950 h-12 pl-5 w-72 active:shadow-md"
              placeholder="email"
            />

            <input
              type="password"
              className="border-b-2 border-solid border-b-blue-950 h-12 pl-5 w-72 active:shadow-md"
              placeholder="password"
            />

            <input
              type="submit"
              className="cursor-pointer bg-black text-white px-4 py-2 rounded mt-2 active:shadow-md shadow-white"
            />
          </form>
        </div>
        <div>
          <p className="text-gray-500 text-normal font-normal">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-950 cursor-pointer">
              Sign up
            </Link>
          </p>
          <p className="text-gray-500 text-normal font-normal">
            Forgot your password?{" "}
            <span className="text-blue-950 cursor-pointer">Reset it</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
