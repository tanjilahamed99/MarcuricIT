import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const ulLInks = (
    <>
      <li>
        <NavLink
          to="/list"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          List
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/createItem"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          Create Item
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="bg-slate-100 p-5 md:w-[20%] md:h-[100vh]">
          <h2 className="text-2xl font-bold my-5 text-center md:text-start">
            Dashboard
          </h2>
          <ul className="md:space-y-2 flex flex-row md:flex-col items-center md:items-start gap-5 md:gap-0  justify-center md:justify-start">
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

export default Dashboard;
