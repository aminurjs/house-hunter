import useAxios from "../../../Hooks/useAxios";
import swal from "sweetalert";

// eslint-disable-next-line react/prop-types
const Edit = ({ item, refetch }) => {
  const axios = useAxios();

  console.log(item);
  const handleEdit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const house_name = form.get("house_name");
    const address = form.get("address");
    const city = form.get("city");
    const bedrooms = form.get("bedrooms");
    const bathrooms = form.get("bathrooms");
    const room_size = form.get("room_size");
    const rent_per_month = form.get("rent_per_month");
    const phone_number = form.get("phone_number");
    const description = form.get("description");

    const data = {
      house_name,
      address,
      bathrooms,
      bedrooms,
      room_size,
      rent_per_month,
      city,
      phone_number,
      description,
    };
    axios
      .patch(`/update-house/${item._id}`, data)
      .then((response) => {
        console.log(response.data.modifiedCount > 0);
        if (response.data) {
          swal("House Updated!", "", "success");
          refetch();
          return (
            <label
              className="modal-backdrop"
              htmlFor={`update_house_${item._id}`}
            >
              Close
            </label>
          );
        }
      })
      .catch((err) => {
        console.log(err.message);
        swal("Something is wrong", "", "error");
      });
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor={`update_house_${item._id}`}>
        <span className="btn btn-info btn-sm btn-outline">Edit</span>
      </label>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={`update_house_${item._id}`}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-3xl">
          <label htmlFor={`update_house_${item._id}`}>
            <span className="btn btn-sm btn-circle btn-ghost absolute right-3 text-red-400 top-4">
              ✕
            </span>
          </label>
          <form onSubmit={handleEdit} className="mt-8">
            <h1 className="font-bold text-dark-01 text-2xl text-center mb-10">
              Update House Details
            </h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-4">
                <div>
                  <label
                    className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="house_name"
                  >
                    House Name:
                  </label>
                </div>
                <div>
                  <input
                    className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-gray-50   rounded w-full"
                    type="text"
                    name="house_name"
                    id="house_name"
                    defaultValue={item?.house_name}
                    placeholder="Type here"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <label
                    className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="address"
                  >
                    Address:
                  </label>
                </div>
                <div>
                  <input
                    className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-gray-50   rounded w-full"
                    type="text"
                    name="address"
                    id="address"
                    defaultValue={item?.address}
                    placeholder="Type Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-4">
                <div>
                  <label
                    className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="city"
                  >
                    City:
                  </label>
                </div>
                <div>
                  <input
                    className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-gray-50   rounded w-full"
                    type="text"
                    name="city"
                    id="city"
                    defaultValue={item?.city}
                    placeholder="Type"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <label
                    className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="bedrooms"
                  >
                    Bedrooms:
                  </label>
                </div>
                <div>
                  <input
                    className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-gray-50   rounded w-full"
                    type="number"
                    name="bedrooms"
                    id="bedrooms"
                    defaultValue={item?.bedrooms}
                    placeholder="Type"
                    required
                  />
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-4">
                <div>
                  <label
                    className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="bathrooms"
                  >
                    Bathrooms:
                  </label>
                </div>
                <div>
                  <input
                    className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-gray-50   rounded w-full"
                    type="number"
                    name="bathrooms"
                    defaultValue={item?.bathrooms}
                    id="bathrooms"
                    placeholder="Type"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <label
                    className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="room_size"
                  >
                    Room_size : {"(sqf.)"}
                  </label>
                </div>
                <div>
                  <input
                    className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-gray-50   rounded w-full"
                    type="number"
                    name="room_size"
                    id="room_size"
                    defaultValue={item?.room_size}
                    placeholder="Type"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <label
                    className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="rent_per_month"
                  >
                    Rent Per Month:
                  </label>
                </div>
                <div>
                  <div className="relative">
                    <input
                      className="pl-8 pr-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-gray-50   rounded w-full"
                      type="number"
                      defaultValue={item?.rent_per_month}
                      name="rent_per_month"
                      id="rent_per_month"
                      placeholder="Type"
                      required
                    />
                    <span className="absolute top-2 left-3 text-sm text-dark-02">
                      $
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <label
                    className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="phone_number"
                  >
                    Phone Number:
                  </label>
                </div>
                <div>
                  <input
                    className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-gray-50   rounded w-full"
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    defaultValue={item?.phone_number}
                    placeholder="Type Your Number"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div>
                <label
                  className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                  htmlFor="description"
                >
                  Description:
                </label>
              </div>
              <div>
                <textarea
                  className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-gray-50   rounded w-full"
                  name="description"
                  id="description"
                  placeholder="Room Description ..."
                  defaultValue={item?.description}
                  required
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="px-10 py-2.5 text-white  font-medium  bg-dark-03  duration-500  rounded active:scale-95"
              >
                Add House
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor={`update_house_${item._id}`}>
          Close
        </label>
      </div>
    </div>
  );
};

export default Edit;
