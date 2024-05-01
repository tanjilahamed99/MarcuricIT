import React from "react";
import loginIMg from "../assets/images/auth-bg.jpg";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse lg:w-[80%] xl:w-[80%] gap-0">
          <div className="text-center lg:text-left w-1/2 hidden lg:inline">
            <div
              className="hero h-[550px]"
              style={{
                backgroundImage: `url(${loginIMg})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60 bg-black"></div>
              <div className=" text-center text-neutral-content mt-60">
                <div className="max-w-md text-white space-y-3">
                  <h1 className="text-2xl font-bold ">I simply love it!</h1>
                  <p className="text">
                    "It's a elegent templete. I love it very much!"
                  </p>
                  <p className="">- Admin User</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card lg:w-1/2 shadow-2xl bg-base-100 card-body rounded-none lg:h-[550px]">
            <div>
              <h1 className="text-lg ">Welcome back!</h1>
              <h1 className="text-sm mt-2">
                Enter your email address and password to access admin panel.
              </h1>
            </div>
            <form className="space-y-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="password" className="grow" value="password" />
                </label>
                <label className="label absolute right-0">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input className="" type="checkbox" />
                <p className="font-semibold text-sm">Remember me</p>
              </div>
              <div className="form-control mt-6">
                <Link className="w-full" to={"/"}>
                  {" "}
                  <button className="btn w-full btn-primary">Login</button>
                </Link>
              </div>
            </form>

            <p className="text-center my-5 text-xl font-bold">or</p>

            <div className="flex items-center gap-5 justify-center">
              <div className="flex items-center gap-2 border w-fit py-2 px-5 rounded-md cursor-pointer">
                <FaFacebook />
                Facebook
              </div>
              <div className="flex items-center gap-2 border w-fit py-2 px-5 rounded-md cursor-pointer">
                <FaGoogle />
                Goggle
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center mt-5 mb-10">
        <p>Don't have an account?</p>
        <Link to={"/signUP"}>
          <h3 className="text-blue-600 text-bold">Sign Up</h3>
        </Link>
      </div>
    </div>
  );
};

export default Login;
