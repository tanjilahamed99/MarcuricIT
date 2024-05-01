import { useNavigate, useParams } from "react-router-dom";
import dummyData from "../../public/cultures.json";
import Swal from "sweetalert2";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";

const AddCultures = () => {
  const navigate = useNavigate();
  // its comes from params

  // update function
  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const sampleType = form.sampleType.value;
    const price = form.price.value;

    const newData = {
      name,
      sampleType,
      price,
      id: dummyData.length + 1,
    };

    dummyData.push(newData);

    Swal.fire({
      title: "successful",
      text: "successful updated",
      icon: "success",
    });

    navigate("/cultures");
  };

  return (
    <div className="m">
      <Navbar />
      <div className="bg-slate-200 p-5">
        <h2 className="font-medium  text-lg  mb-5 mt-5 ">Cultures</h2>
        <div className="bg-white p-5">
          <h2 className="text-lg font-semibold mb-4">Create Cultures</h2>
          <form
            onSubmit={handleUpdateInfo}
            className="space-y-4 p-2 md:p-5 rounded-lg "
          >
            <div className="flex flex-col items-start  gap-2 ">
              <label className="text-lg font-semibold">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex flex-col items-start  gap-2 ">
              <label className="text-lg font-semibold">Sample Type</label>
              <input
                name="sampleType"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex flex-col items-start  gap-2 ">
              <label className="text-lg font-semibold">Price</label>
              <input
                name="price"
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button type="submit" className="btn btn-outline col-span-2 w-full">
              Create
            </button>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AddCultures;
