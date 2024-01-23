import { FaRulerCombined } from "react-icons/fa";
import { FaHouse, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const House = ({ house }) => {
  return (
    <div>
      <img className="rounded-t" src={house.image} alt="" />
      <div className="p-5">
        <div className="pb-3 mb-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-dark-01 ">
            {house.house_name}
          </h2>
        </div>
        <h2 className="text-2xl font-semibold text-dark-03  mb-4">
          Rent per month: ${house.rent_per_month}
        </h2>
        <div className="flex gap-4 mb-5 flex-wrap">
          <p className="text-dark-02 flex items-center gap-2">
            <FaHouse className="text-xl text-dark-03" />
            Bedrooms: {house.bedrooms}
          </p>
          <p className="text-dark-02  flex items-center gap-2">
            <FaHouse className="text-xl text-dark-03" />
            Bathrooms: {house.bathrooms}
          </p>
          <p className="text-dark-02 flex items-center gap-2">
            <FaRulerCombined className="text-lg text-dark-03" />
            Room-Size: {house.room_size} sqf.
          </p>
        </div>
        <p className="text-dark-02 mb-2 flex items-center gap-2">
          <FaLocationDot className="text-lg text-dark-03" />
          Address: {house.address}
        </p>
        <Link to={`/house-details/${house._id}`}>
          <button className="py-3 px-8 lg:px-10 text-white bg-dark-03 rounded active:scale-95">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default House;
