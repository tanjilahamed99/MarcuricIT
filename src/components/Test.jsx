import { FaPlus } from "react-icons/fa";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";
import dummyData from "../../public/dummyData.json";
import { useState } from "react";

const Test = () => {
  const [size, setSize] = useState(5);

  const handleShowData = (e) => {
    const dataSize = e.target.value;
    if (dataSize !== "All") {
      setSize(dataSize);
    } else {
      return setSize(dummyData.length + 1);
    }
  };

  console.log(size);

  return (
    <div className="">
      <Navbar />
      <div className="bg-slate-200 p-5">
        <h2 className="text-lg font-medium">lab test</h2>

        <div className="p-5 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="mb-3 text-lg font-bold">Lav Tests</h2>
            <button className="btn btn-primary rounded-none btn-sm">
              <FaPlus />
              Create Test
            </button>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h2>Search : </h2>
              <input className="border-2 p-1 px-3" placeholder="20 words" />
            </div>
          </div>

          <div className="mt-5">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Shortcut</th>
                    <th>Sample Type</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyData.slice(0, size).map((i, idx) => (
                    <tr key={idx}>
                      <th>{i.id}</th>
                      <td>{i.name}</td>
                      <td>{i.shortcut}</td>
                      <td>{i.sampleType}</td>
                      <td>{i.price}</td>
                      <th>
                        <button className="btn btn-ghost btn-xs border-red-300">
                          delete
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* filter */}
            <div className="mt-10">
              <select
                name="size"
                onChange={handleShowData}
                className="select select-bordered w-full max-w-xs"
              >
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>All</option>
              </select>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Test;
