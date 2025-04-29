import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">Sign Up</h1>
      <form className="flex flex-col items-center mt-5">
        <input
          type="text"
          placeholder="Username"
          className="border-b-2 border-gray-300 mb-4 p-2 w-64"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-b-2 border-gray-300 mb-4 p-2 w-64"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b-2 border-gray-300 mb-4 p-2 w-64"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 cursor-pointer">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
