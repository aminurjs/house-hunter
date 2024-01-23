import { Link } from "react-router-dom";
import AddNewHouse from "./AddNewHouse";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../../Hooks/useUser";

// const list = [
//   {
//     name: "Cozy Family Home",
//     address: "123 Maple St",
//     city: "Exampletown",
//     bedrooms: 3,
//     bathrooms: 2,
//     room_size: "1800 sqft",
//     picture: "https://i.ibb.co/QJCXqxT/pexels-curtis-adams-4469133.jpg",
//     availability_date: "2024-02-01",
//     rent_per_month: 2500,
//     phone_number: "+1 (555) 123-4567",
//     description:
//       "A charming family home with three bedrooms, two bathrooms, and a spacious living area. The house is located in a quiet neighborhood with convenient access to schools and parks. Available for rent starting February 1, 2024. Contact us for more details.",
//   },
// ];

const ListOFHouses = () => {
  const axios = useAxios();
  const { user } = useUser();

  const { data: listOfHouses = [] } = useQuery({
    queryKey: ["listOfHouses"],
    queryFn: async () => {
      const res = await axios.get(`/list-of-houses/${user.email}`);
      return res.data;
    },
  });
  console.log(listOfHouses);
  return (
    <>
      <div className="overflow-x-auto">
        <div className="bg-white p-5">
          <div className="py-5 px-2">
            <AddNewHouse />
          </div>
          {listOfHouses.length > 0 ? (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-xl font-semibold text-dark-01 ">
                    Picture
                  </th>
                  <th className="text-xl font-semibold text-dark-01 ">Name:</th>
                  <th className="text-xl font-semibold text-dark-01 ">Edit</th>
                  <th className="text-xl font-semibold text-dark-01 ">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {listOfHouses.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <div className="avatar">
                        <div className="mask w-40 h-24">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <h2 className="font-bold text-dark-01 text-xl">
                        {item?.house_name}
                      </h2>
                    </td>
                    <td>
                      <Link to={`/dashboard/details/${item?.email}`}>
                        <button className="btn btn-info btn-sm btn-outline">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/dashboard/details/${item?.email}`}>
                        <button className="btn btn-error btn-sm btn-outline">
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center mt-20 mb-24">
              <h1 className="text-3xl font-bold text-center">
                No Data Available
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ListOFHouses;
