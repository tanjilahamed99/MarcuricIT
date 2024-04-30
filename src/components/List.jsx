import { Link } from "react-router-dom";
import dummyData from "./../../public/dummyData.json";

const List = () => {

  return (
    <div className="my-10">
      <h2 className="font-bold text-center text-3xl mb-5">
        All member info list
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Age</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {dummyData?.map((i, idx) => (
              <tr key={idx}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.phoneNumber}</td>
                <td>{i.age}</td>
                <td>{i.company}</td>
                <th>
                  <Link to={`/updateItem/${i.id}`}>
                    <button className="btn btn-outline btn-sm">UPdate</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
