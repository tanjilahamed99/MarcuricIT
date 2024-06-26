import Swal from "sweetalert2";
import dummyData from "../../public/dummyData.json";
import { useNavigate } from "react-router-dom";

const CreateItems = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const phoneNumber = form.mobileNumber.value;
    const company = form.company.value;

    const newData = {
      name,
      age,
      phoneNumber,
      company,
      id: dummyData?.length + 1,
    };

    dummyData.push(newData);

    Swal.fire({
      title: "successful Created",
      text: "successful Created new Member",
      icon: "success",
    });

    navigate("/list");
  };

  return (
    <div className="my-10 px-2 md:px-0">
      <h2 className="font-bold text-center text-2xl md:text-3xl mb-5">
        Create new member info
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 border-2 p-2 md:p-5 rounded-lg"
      >
        <div className="flex flex-col items-start  gap-2 col-span-2 md:col-span-1">
          <label className="text-lg font-semibold">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="flex flex-col items-start  gap-2 col-span-2 md:col-span-1">
          <label className="text-lg font-semibold">Phone Number</label>
          <input
            name="mobileNumber"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="flex flex-col items-start  gap-2 col-span-2 md:col-span-1">
          <label className="text-lg font-semibold">Age</label>
          <input
            name="age"
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="flex flex-col items-start  gap-2 col-span-2 md:col-span-1">
          <label className="text-lg font-semibold">Company</label>
          <input
            name="company"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>

        <button type="submit" className="btn btn-outline col-span-2">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateItems;
