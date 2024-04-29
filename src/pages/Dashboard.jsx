import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const ulLInks = (
    <>
      <li>
        <NavLink
          to="/dashboard/list"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold" : ""
          }
        >
          List
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/createItem"
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
      <div className="flex gap-10">
        <div className="bg-slate-100 p-5 w-[20%]">
          <h2 className="text-2xl font-bold my-5">Dashboard</h2>
          <ul className="space-y-2">{ulLInks}</ul>
        </div>
        <div className="w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
