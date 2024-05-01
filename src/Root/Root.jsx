import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrTest } from "react-icons/gr";
import { GoLink } from "react-icons/go";
import { TbFileInvoice } from "react-icons/tb";
import { TbMessageReport } from "react-icons/tb";
import { RiGitBranchLine } from "react-icons/ri";

const Root = () => {
  const ulLInks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center text-lg gap-2">
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
          <p className="flex items-center text-lg gap-2">
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
          <p className="flex items-center text-lg gap-2">
            <GrTest />
            Tests
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cultures"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center text-lg gap-2">
            <GoLink />
            Cultures
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/culturesOption"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center text-lg gap-2">
            <GoLink />
            Cultures option
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/invoice"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center text-lg gap-2">
            <TbFileInvoice />
            Invoice
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/report"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center text-lg gap-2">
            <TbMessageReport />
            Report
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/branches"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          <p className="flex items-center text-lg gap-2">
            <TbMessageReport />
            Branches
          </p>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-white md:p-5 md:w-[20%] md:h-[100vh]">
          <h2 className="text-2xl font-bold  md:text-start hidden md:flex">
            Dashboard
          </h2>
          <ul className="md:space-y-5 hidden md:flex flex-row md:flex-col items-center md:items-start gap-5 mt-6 md:gap-0  justify-center md:justify-start">
            {ulLInks}
          </ul>
        </div>
        <div className="md:w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
