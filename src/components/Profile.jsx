import { Link } from "react-router-dom";
import dummyData from "../../public/dummyData.json";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";
import { useState } from "react";

const Profile = () => {
  const [error, setError] = useState(null);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      return setError("password not match");
    }
    setError(null);
  };

  return (
    <div className="">
      <Navbar />
      <div className="bg-slate-200 p-5">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-medium">Profile</h2>
          <div className="flex gap-2 items-center">
            <Link>LIMS Healthcare</Link>/<Link>user</Link>/
            <Link>Edit Profile</Link>
          </div>
        </div>

        <div className="p-5 bg-white">
          <h2 className="mb-3 text-lg font-bold">Edit profile</h2>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div className="flex flex-col items-start  gap-2">
              <label className="text-lg font-semibold">User Name</label>
              <input
                name="name"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
                defaultValue={"tanjil ahamed"}
              />
            </div>
            <div className="flex flex-col items-start  gap-2">
              <label className="text-lg font-semibold">Email address</label>
              <input
                name="mobileNumber"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
                defaultValue={"tanjil@gmail.com"}
              />
            </div>
            <div className="flex flex-col items-start  gap-2">
              <label className="text-lg font-semibold">password</label>
              <input
                name="password"
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex flex-col items-start  gap-2">
              <label className="text-lg font-semibold">Confirm password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />

              {error ? (
                <h2 className="text-red-500 font-semibold">{error}</h2>
              ) : (
                ""
              )}
            </div>

            <div className="relative">
              <div className="upload-info">
                <div>
                  <div className=" mx-auto flex w-full flex-col items-center justify-center space-y-3 rounded-lg border-2 border-dashed border-gray-400 p-6 bg-white">
                    <svg
                      width={50}
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 42 32"
                      enableBackground="new 0 0 42 32"
                      xmlSpace="preserve"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path
                            fill="black"
                            d="M33.958,12.988C33.531,6.376,28.933,0,20.5,0C12.787,0,6.839,5.733,6.524,13.384 C2.304,14.697,0,19.213,0,22.5C0,27.561,4.206,32,9,32h6.5c0.276,0,0.5-0.224,0.5-0.5S15.776,31,15.5,31H9c-4.262,0-8-3.972-8-8.5 C1,19.449,3.674,14,9,14h1.5c0.276,0,0.5-0.224,0.5-0.5S10.776,13,10.5,13H9c-0.509,0-0.99,0.057-1.459,0.139 C7.933,7.149,12.486,1,20.5,1C29.088,1,33,7.739,33,14v1.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V14 c0-0.003,0-0.006,0-0.009c3.019,0.331,7,3.571,7,8.509c0,3.826-3.691,8.5-8,8.5h-7.5c-3.238,0-4.5-1.262-4.5-4.5V12.783l4.078,4.07 C25.176,16.951,25.304,17,25.432,17s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.513,0-0.707l-4.461-4.452 c-0.594-0.592-1.055-0.592-1.648,0l-4.461,4.452c-0.195,0.194-0.195,0.512,0,0.707s0.512,0.195,0.707,0L20,12.783V26.5 c0,3.804,1.696,5.5,5.5,5.5H33c4.847,0,9-5.224,9-9.5C42,17.333,37.777,13.292,33.958,12.988z"
                          ></path>{" "}
                        </g>
                      </g>
                    </svg>
                    <div className="space-y-1.5 text-center">
                      <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">
                        Upload image
                      </h5>
                      <p className="text-sm text-gray-500">
                        or drop a image here <br /> ctrl + V to paste Image
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <input
                type="file"
                hidden
                id="browser"
                accept=".jpg,.png,.pdf,.docx,.pptx,.txt,.xlsx"
                multiple
              />
              <label
                htmlFor="browser"
                className=" absolute h-[180px] w-full top-0"
              ></label>
            </div>

            <div className="flex gap-5 justify-end">
              <button className="btn btn-outline">Cancel</button>
              <button type="submit" className="btn btn-outline col-span-2">
                update
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Profile;
