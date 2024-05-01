import { useNavigate, useParams } from "react-router-dom";
import dummyData from "../../public/culturesOption.json";
import Swal from "sweetalert2";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";

const CreateCulturesOption = () => {
  const navigate = useNavigate();
  // its comes from params

  // update function
  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const option = form.option.value;

    const newData = {
      name,
      option,
      id: dummyData.length + 1,
    };

    dummyData.push(newData);

    Swal.fire({
      title: "successful",
      text: "successful updated",
      icon: "success",
    });

    navigate("/culturesOption");
  };

  return (
    <div className="m">
      <Navbar />
      <div className="bg-slate-200 p-5">
        <h2 className="font-medium  text-lg  mb-5 mt-5 ">Create Test</h2>
        <div className="bg-white p-5">
          <h2 className="text-lg font-semibold mb-4">Create</h2>
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
              <label className="text-lg font-semibold">Option</label>
              <input
                name="option"
                type="text"
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

export default CreateCulturesOption;
