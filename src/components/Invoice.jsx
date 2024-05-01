import { FaPlus } from "react-icons/fa";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";
import dummyData from "../../public/invoice.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Invoice = () => {
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

  // search process
  const [search, setSearch] = useState("");
  const handleSearch = (data) => {
    setSearch(data.target.value);
  };

  useEffect(() => {
    filterData();
  }, [search, dummyData]);

  const filterData = () => {
    if (!search) {
      setMainData([...dummyData]);
    } else {
      const filteredData = dummyData.filter((item) => {
        return (
          item.clientName.toLowerCase().includes(search.toLowerCase()) ||
          item.reference.toLowerCase().includes(search.toLowerCase()) ||
          item.doctorName.toLowerCase().includes(search.toLowerCase())
        );
      });
      setMainData(filteredData);
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="bg-slate-200 p-5">
        <h2 className="text-lg font-medium mb-5">Invoice</h2>

        <div className="p-5 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="mb-3 text-lg font-bold">Invoice</h2>
            <Link to={"/createTest"}>
              {" "}
              <button className="btn btn-primary rounded-none btn-sm">
                <FaPlus />
                Create Invoice
              </button>
            </Link>
          </div>

          <div className="mt-5 md:mt-0">
            <div className="flex items-center gap-3">
              <h2>Search : </h2>
              <input
                onChange={handleSearch}
                className="border-2 p-1 px-3 w-2/3"
                placeholder="20 words"
              />
            </div>
          </div>

          <div className="mt-5">
            <div className="overflow-x-auto">
              <table className="table w-fit">
                {/* head */}
                <thead>
                  <tr className="space-x-10">
                    <th>#</th>
                    <th>Barcode</th>
                    <th>Client Code</th>
                    <th>Client Name</th>
                    <th>Doctor Name</th>
                    <th>Subtotal</th>
                    <th>Reference</th>
                    <th>Discount</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Due</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mainData?.slice(0, size).map((i, idx) => (
                    <tr className="space-x-10" key={idx}>
                      <th>{i.clientId}</th>
                      <td>{i.Barcode}</td>
                      <td>{i.clientCode}</td>
                      <td>{i.clientName}</td>
                      <td>{i.doctorName}</td>
                      <td>{i.subtotal}</td>
                      <td>{i.reference}</td>
                      <td>{i.Discount}</td>
                      <td>{i.Total}</td>
                      <td>{i.Paid}</td>
                      <td>{i.Due}</td>
                      <td className="">
                        <button
                          className={`btn btn-ghost btn-xs ${
                            i.status
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                          }`}
                        >
                          {i.status ? "paid" : "pending"}
                        </button>
                      </td>
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
            <div className="mt-10 flex flex-col  md:flex-row  items-center justify-between gap-5 md:gap-0">
              <div className="flex flex-col md:flex-row items-center gap-5">
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
                <div>
                  <p className="">
                    page <span className="font-bold">{pageNumber}</span> of{" "}
                    <span className="font-bold">{pageSee.length}</span>
                  </p>
                </div>
              </div>

              {/* pagination */}
              <div className="join flex justify-center  gap-2 md:gap-5">
                {pageSee?.map((item) => (
                  <button
                    onClick={() => showData(item + 1)}
                    className="btn btn-active  btn-outline btn-sm"
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

export default Invoice;
