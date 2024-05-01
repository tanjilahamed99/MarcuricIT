import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaAlignJustify } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  const ulLInks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center  gap-2">
            <AiOutlineDashboard />
            Dashboard
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center  gap-2">
            <CgProfile />
            Profile
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/test"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center  gap-2">
            <GrTest />
            Tests
          </p>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn  drawer-button">
          <FaAlignJustify className="cursor-pointer" />
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-52 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {ulLInks}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
