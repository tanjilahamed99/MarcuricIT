import { IoIosNotifications } from "react-icons/io";
import { FaAlignJustify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFullscreen } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white border-b-2">
      <div className="flex-1">
        <div>
          <FaAlignJustify className="cursor-pointer hidden md:flex" />
          <div className="md:hidden">
            <Drawer />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="relative hidden md:flex">
          <input
            type="text"
            placeholder="User profile ser...."
            className="input input-bordered w-full"
          />
          <CiSearch className="absolute text-2xl right-3 top-3" />
        </div>
        <MdOutlineFullscreen className="text-4xl hidden md:flex" />

        <div className="avatar indicator z-10">
          <span className="indicator-item badge badge-secondary right-1 text-sm">
            6
          </span>
          <div className="">
            <IoIosNotifications className=" text-2xl md:text-4xl cursor-pointer" />
          </div>
        </div>

        <div className="avatar rounded-full">
          <div className="md:w-12 w-7">
            <img
              className="rounded-full"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <details className="dropdown">
          <summary className="m-1 btn bg-white">
            tanjil
            <IoMdArrowDropdown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box right-5 w-40">
            <div className="space-y-5 py-5">
              <h2 className="text-xl font-semibold">welcome!</h2>
              <div className="flex items-center gap-1 hover:bg-slate-50 cursor-pointer">
                <CgProfile className="text-xl" />
                <h3>My Account</h3>
              </div>
              <Link className="" to={"/lock"}>
                {" "}
                <div className="flex items-center gap-1 mt-2 hover:bg-slate-50 cursor-pointer">
                  <CiLock className="text-xl" />
                  <h3>Lack Screen</h3>
                </div>
              </Link>
            </div>
            <hr />

            <Link to={"/login"}>
              <div className="flex items-center gap-1 hover:bg-slate-50 cursor-pointer">
                <IoIosLogOut className="text-xl" />
                <h3>Logout</h3>
              </div>
            </Link>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
