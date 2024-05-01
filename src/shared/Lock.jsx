import React from "react";
import loginIMg from "../assets/images/auth-bg.jpg";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Lock = () => {
  return (
    <div>
      <div className="hero lg:mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse lg:w-[80%] xl:w-[80%] gap-0">
          <div className="text-center lg:text-left w-1/2 hidden lg:inline">
            <div
              className="hero h-[400px]"
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
          <div className="card lg:w-1/2 shadow-2xl bg-base-100 card-body rounded-none lg:h-[400px]">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <h1 className="text-lg ">HI tanjil</h1>
              <h1 className="text-sm">
                Enter your password to access the admin.
              </h1>
            </div>

            <form className="space-y-3">
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
              </div>
              <div className="form-control mt-6">
                <Link className="w-full" to={"/"}>
                  {" "}
                  <button className="btn w-full btn-primary">Login</button>
                </Link>
              </div>
            </form>
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

export default Lock;
