import { useParams } from "react-router-dom";
import dummyData from "../../public/dummyData.json";

const UpdateItem = () => {
  const { id } = useParams();

  const data = dummyData.find((i) => i.id == id);

  return (
    <div className="my-10">
      <form className="grid grid-cols-2 items-center gap-5">
        <div className="flex flex-col items-start  gap-2">
          <label className="text-lg font-semibold">Name</label>
          <input
            defaultValue={data?.name}
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
            defaultValue={data?.phoneNumber}
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
            defaultValue={data?.age}
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
            defaultValue={data?.company}
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

export default UpdateItem;
