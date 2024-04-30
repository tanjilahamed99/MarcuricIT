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

    navigate("/list");
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-center text-3xl mb-5">
        Create new member info
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 items-center gap-5 border-2 p-5"
      >
        <div className="flex flex-col items-start  gap-2">
          <label className="text-lg font-semibold">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="flex flex-col items-start  gap-2">
          <label className="text-lg font-semibold">Phone Number</label>
          <input
            name="mobileNumber"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="flex flex-col items-start  gap-2">
          <label className="text-lg font-semibold">Age</label>
          <input
            name="age"
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="flex flex-col items-start  gap-2">
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
