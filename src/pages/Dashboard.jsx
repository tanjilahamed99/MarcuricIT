import { IoIosLogOut, IoMdArrowDropdown } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { RiPrinterFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import Navbar from "../shared/Navbar";
import DatePicker from "react-datepicker";
import { useState } from "react";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <div>
      <Navbar />

      <div className="bg-slate-200 p-5 text-[]">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
          <h2 className="text-lg font-medium">Dashboard</h2>

          <div className="flex flex-col md:flex-row md:items-center gap-3 border-2">
            <DatePicker
              className="h-12 pl-4"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />

            <details className="dropdown">
              <summary className="m-1 btn btn-primary rounded-none">
                <FaDownload />
                download
                <IoMdArrowDropdown />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box right-5 w-40">
                <div className="space-y-3 py-5 pl-5">
                  <div className="flex items-center gap-1 hover:bg-slate-50 cursor-pointer">
                    <MdOutlineEmail className="text-xl" />
                    <h3>Email</h3>
                  </div>
                  <div className="flex items-center gap-1 hover:bg-slate-50 cursor-pointer">
                    <RiPrinterFill className="text-xl" />
                    <h3>Print</h3>
                  </div>
                </div>
                <hr />

                <div className="flex items-center gap-1 hover:bg-slate-50 cursor-pointer pl-5">
                  <IoIosLogOut className="text-xl" />
                  <h3>Re_Generate</h3>
                </div>
              </ul>
            </details>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
