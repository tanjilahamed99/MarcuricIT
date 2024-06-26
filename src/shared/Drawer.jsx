import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaAlignJustify } from "react-icons/fa";
import { GoLink } from "react-icons/go";
import { GrTest } from "react-icons/gr";
import { TbFileInvoice, TbMessageReport } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  const ulLInks = (
    <>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center gap-2">
            <AiOutlineDashboard />
            Dashboard
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center gap-2">
            <CgProfile />
            Profile
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/test"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center gap-2">
            <GrTest />
            Tests
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/cultures"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center gap-2">
            <GoLink />
            Cultures
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/culturesOption"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center gap-2">
            <GoLink />
            Cultures option
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/invoice"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center gap-2">
            <TbFileInvoice />
            Invoice
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/report"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center gap-2">
            <TbMessageReport />
            Report
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/branches"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center gap-2">
            <TbMessageReport />
            Branches
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
