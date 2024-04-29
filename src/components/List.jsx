import { Link } from "react-router-dom";
import dummyData from "./../../public/dummyData.json";

const List = () => {
  return (
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
                <Link to={`/dashboard/updateItem/${i.id}`}>
                  <button className="btn btn-outline">UPdate</button>
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
