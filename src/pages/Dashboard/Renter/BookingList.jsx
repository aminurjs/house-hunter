import { Link } from "react-router-dom";

const list = [
  {
    name: "Cozy Family Home",
    address: "123 Maple St",
    city: "Exampletown",
    bedrooms: 3,
    bathrooms: 2,
    room_size: "1800 sqft",
    picture: "https://i.ibb.co/QJCXqxT/pexels-curtis-adams-4469133.jpg",
    availability_date: "2024-02-01",
    rent_per_month: 2500,
    phone_number: "+1 (555) 123-4567",
    description:
      "A charming family home with three bedrooms, two bathrooms, and a spacious living area. The house is located in a quiet neighborhood with convenient access to schools and parks. Available for rent starting February 1, 2024. Contact us for more details.",
  },
];

const BookingList = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="bg-white p-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-xl font-semibold text-dark-01 ">Picture</th>
                <th className="text-xl font-semibold text-dark-01 ">Name</th>
                <th className="text-xl font-semibold text-dark-01 ">Cost</th>
                <th className="text-xl font-semibold text-dark-01 ">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="avatar">
                      <div className="mask w-40 h-24">
                        <img
                          src={item?.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold text-dark-01 text-2xl">
                      {item?.name}
                    </div>
                  </td>
                  <td>
                    <div className="font-bold text-dark-01 text-2xl">
                      ${item?.rent_per_month}
                    </div>
                  </td>
                  <td>
                    <Link to={`/dashboard/details/${item?.email}`}>
                      <button className="btn btn-error btn-sm btn-outline">
                        Cancel
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookingList;
