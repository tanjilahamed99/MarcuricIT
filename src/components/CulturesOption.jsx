import { FaPlus } from "react-icons/fa";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";
import dummyData from "../../public/culturesOption.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CulturesOption = () => {
  const [size, setSize] = useState(5);
  const [page, setPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [mainData, setMainData] = useState([]);
  const [paginationData, setPaginationData] = useState([]);

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
    <div>
      {" "}
      <div className="">
        <Navbar />
        <div className="bg-slate-200 p-5">
          <h2 className="text-lg font-medium mb-5">lab Cultures</h2>

          <div className="p-5 bg-white">
            <div className="flex justify-between items-center">
              <h2 className=" text-lg font-bold">Cultures</h2>
              <Link to={"/createCulturesOption"}>
                <button className="btn btn-primary rounded-none btn-sm text-[10px] md:text-sm">
                  <FaPlus />
                  Create cultures Option
                </button>
              </Link>
            </div>

            <div className="mt-5">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>Option</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mainData.map((i, idx) => (
                      <tr key={idx}>
                        <th>{i.id}</th>
                        <td>{i.name}</td>
                        <td>{i.option}</td>
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
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CulturesOption;
