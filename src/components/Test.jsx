import { FaPlus } from "react-icons/fa";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";
import dummyData from "../../public/dummyData.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Test = () => {
  const [size, setSize] = useState(5);
  const [page, setPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [mainData, setMainData] = useState([]);
  const [paginationData, setPaginationData] = useState([]);

  const handleShowData = (e) => {
    const dataSize = e.target.value;
    if (dataSize !== "All") {
      setSize(dataSize);
    } else {
      return setSize(dummyData.length + 1);
    }
  };

  useEffect(() => {
    if (paginationData && paginationData.length > 0) {
      setMainData([...paginationData]);
    } else {
      setMainData([...dummyData]);
    }
  }, [paginationData]);

  useEffect(() => {
    const pageSee = Math.ceil(dummyData.length / size);
    setPage(pageSee);
  }, [dummyData, size]);

  let pageSee = [];

  for (let index = 0; index < page; index++) {
    pageSee.push(index);
  }

  const showData = (page) => {
    setPageNumber(page);
  };

  const paginate = (pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
    return dummyData.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const pagination = paginate(pageNumber, size);
    setPaginationData([...pagination]);
  }, [pageNumber, size]);

  return (
    <div className="">
      <Navbar />
      <div className="bg-slate-200 p-5">
        <h2 className="text-lg font-medium mb-5">lab test</h2>

        <div className="p-5 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="mb-3 text-lg font-bold">Lav Tests</h2>
            <Link to={"/createTest"}>
              {" "}
              <button className="btn btn-primary rounded-none btn-sm">
                <FaPlus />
                Create Test
              </button>
            </Link>
          </div>

          <div className="mt-5 md:mt-0">
            <div className="flex items-center gap-3">
              <h2>Search : </h2>
              <input
                className="border-2 p-1 px-3 w-2/3"
                placeholder="20 words"
              />
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
                  {mainData?.slice(0, size).map((i, idx) => (
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
            <div className="mt-10 flex flex-row  items-center justify-between gap-5 md:gap-0">
              <select
                name="size"
                onChange={handleShowData}
                className="select select-bordered w-fit"
              >
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>All</option>
              </select>

              {/* pagination */}
              <div className="join flex justify-center  gap-2 md:gap-5">
                {pageSee?.map((item) => (
                  <button
                    onClick={() => showData(item + 1)}
                    className="btn btn-active hover:btn btn-outline btn-sm"
                    key={item}
                  >
                    {item + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Test;
