import useAxios from "../../../Hooks/useAxios";
import useUser from "../../../Hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import swal from "sweetalert";

const BookingList = () => {
  const axios = useAxios();
  const { user } = useUser();

  const { data: myBookings = [], refetch } = useQuery({
    queryKey: ["myBookings"],
    queryFn: async () => {
      const res = await axios.get(`/my-bookings/${user.email}`);
      return res.data;
    },
  });
  const handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`/booking/cancel/${id}`)
          .then((response) => {
            console.log(response.data);
            if (response.data.deletedCount > 0) {
              swal("Successfully Canceled", "", "success");
              refetch();
            }
          })
          .catch((error) => {
            return swal("Something Error", error.message, "error");
          });
      }
    });
  };
  return (
    <>
      <div className="overflow-x-auto">
        <div className="bg-white p-5">
          {myBookings.length > 0 ? (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-xl font-semibold text-dark-01 ">
                    Picture
                  </th>
                  <th className="text-xl font-semibold text-dark-01 ">Name</th>
                  <th className="text-xl font-semibold text-dark-01 ">Cost</th>
                  <th className="text-xl font-semibold text-dark-01 ">
                    Cancel
                  </th>
                </tr>
              </thead>
              <tbody>
                {myBookings.map((item, i) => (
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
                      <div className="font-bold text-dark-01 text-2xl">
                        {item?.house_name}
                      </div>
                    </td>
                    <td>
                      <div className="font-bold text-dark-01 text-2xl">
                        ${item?.rent_per_month}
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-error btn-sm btn-outline"
                      >
                        Cancel
                      </button>
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

export default BookingList;
