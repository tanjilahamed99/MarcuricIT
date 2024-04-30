import { useNavigate, useParams } from "react-router-dom";
import dummyData from "../../public/dummyData.json";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const navigate = useNavigate();
  // its comes from params
  const { id } = useParams();

  const data = dummyData.find((i) => i.id == id);

  // update function
  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const phoneNumber = form.mobileNumber.value;
    const company = form.company.value;

    const UpdateData = {
      name,
      age,
      phoneNumber,
      company,
      id: parseInt(id),
    };

    const exist = dummyData.findIndex((item) => item.id === data.id);
    dummyData[exist] = UpdateData;

    Swal.fire({
      title: "successful",
      text: "successful updated",
      icon: "success",
    });

    navigate("/list");
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-center text-3xl mb-5">
        Update {data.name} info
      </h2>
      <form
        onSubmit={handleUpdateInfo}
        className="grid grid-cols-2 items-center gap-5"
      >
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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
