import { Link, useParams } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInfoCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoMdPricetags } from "react-icons/io";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaPhoneAlt, FaRulerCombined } from "react-icons/fa";
import { houseFeatures } from "./features";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { FaHouse, FaLocationDot } from "react-icons/fa6";
import useUser from "../../../Hooks/useUser";
import swal from "sweetalert";
import { useEffect } from "react";

const HouseDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { user } = useUser();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: houseDetails = {} } = useQuery({
    queryKey: ["house-details"],
    queryFn: async () => {
      const res = await axios.get(`/house-details/${id}`);
      return res.data;
    },
  });
  const {
    address,
    bathrooms,
    bedrooms,
    description,
    house_name,
    image,
    city,
    phone_number,
    rent_per_month,
    room_size,
    _id,
  } = houseDetails;
  const data = {
    name: user.name,
    email: user.email,
    phone_number: user.phone_number,
    id: _id,
    address,
    bathrooms,
    city,
    bedrooms,
    house_name,
    image,
    rent_per_month,
    room_size,
  };
  const handleBooking = async () => {
    if (user.role === "house_owner") {
      return swal({ title: "House owner can't Book" });
    }
    axios
      .post("/add-booking", data)
      .then((response) => {
        if (response.data.insertedId) {
          swal("House Booked!", "", "success");
        }
      })
      .catch((err) => {
        console.log(err);
        swal(err.response.data, "", "error");
      });
  };

  return (
    <div className="max-w-7xl mx-auto flex gap-4 lg:gap-6 px-5 flex-col md:flex-row">
      <div className="md:w-3/5 lg:w-2/3 mb-5">
        <img className="rounded mb-6" src={image} alt="" />
        <h3 className="mb-4 font-semibold text-dark-01  text-2xl pb-2 border-b border-gray-300">
          {house_name}
        </h3>
        <p className="leading-normal text-dark-02 mb-4">{description}</p>
        <p className="leading-normal text-dark-02 mb-4">
          Experience the epitome of luxury in our spacious and well-appointed
          luxury suite.
        </p>
        <p className="leading-normal text-dark-02   mb-2">
          Our luxury suite offers a comfortable and elegant space for your stay.
          With a separate living area, a king-size bed, and a luxurious
          bathroom, {"you'll"} enjoy every moment of your stay.
        </p>
        <p className="leading-normal text-dark-02  pb-8 mb-8">
          A buffet breakfast is served at the property. Albert Café serves an
          extensive spread of local dishes, while Shish Mahal Restaurant offers
          a taste of Northern Indian cuisine. Drinks and light refreshments can
          be enjoyed at the {"hotel's"} lobby bar. Friendly staff are fluent in
          Malay, Chinese and English.
        </p>
        <h3 className="mb-4 font-semibold text-dark-01  text-xl pb-2 border-b border-gray-300">
          Features
        </h3>
        <ul>
          {houseFeatures?.map((feature, idx) => (
            <li
              className="list-disc list-inside text-lg mb-2 text-dark-01"
              key={idx}
            >
              {feature}
            </li>
          ))}
        </ul>
        <div>
          <h4 className="mb-2 text-lg font-semibold mt-10 ">Shares:</h4>
          <div className="text-blue-600 text-2xl flex gap-4">
            <Link>
              <AiOutlineInstagram></AiOutlineInstagram>
            </Link>
            <Link>
              <AiFillFacebook></AiFillFacebook>
            </Link>
            <Link>
              <AiOutlineTwitter></AiOutlineTwitter>
            </Link>
            <Link>
              <AiFillLinkedin></AiFillLinkedin>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-2/5 lg:w-1/3 p-3 lg:p-5 bg-base-200 rounded">
        <h3 className="mb-4 font-semibold text-dark-01  text-xl pb-2 border-b border-gray-300">
          <span>
            <AiOutlineInfoCircle className="inline text-2xl"></AiOutlineInfoCircle>
          </span>
          Room Info
        </h3>
        <p className="text-dark-02 mb-2 flex items-center gap-2">
          <FaLocationDot className="text-lg text-dark-03" />
          Address: {address}
        </p>
        <p className="text-dark-02 mb-2 flex items-center gap-2">
          <FaHouse className="text-xl text-dark-03" />
          Bedrooms: {bedrooms}
        </p>
        <p className="text-dark-02 mb-2 flex items-center gap-2">
          <FaHouse className="text-xl text-dark-03" />
          Bathrooms: {bathrooms}
        </p>
        <p className="text-dark-02 mb-2 flex items-center gap-2">
          <FaRulerCombined className="text-lg text-dark-03" />
          Room-Size: {room_size} sqf.
        </p>
        <p className="text-dark-02 mb-2 flex items-center gap-2">
          <FaPhoneAlt className="text-lg text-dark-03" />
          Call: {phone_number}
        </p>
        <p className="text-dark-02 mb-2 flex items-center gap-2">
          <MdOutlineEventAvailable className="text-lg text-dark-03" />
          Availability: {"Available" || "Not Available"}
        </p>
        <div className="flex gap-2 items-center my-2">
          <span className="text-dark-03 text-2xl ">
            <IoMdPricetags></IoMdPricetags>
          </span>
          <p className="text-xl text-dark-01 mb-4">
            Rent Per Month : <span className="text-2xl">${rent_per_month}</span>
          </p>
        </div>
        <button
          onClick={handleBooking}
          className=" py-3 px-12 text-white text-sm font-medium  bg-dark-03 duration-500  rounded active:scale-95"
        >
          Confirm Booking
        </button>
        <h3 className="mb-4 font-semibold text-xl pb-2 border-b border-gray-300 mt-10">
          Find us on
        </h3>
        <div className="border border-gray-200 rounded-md">
          <ul>
            <li className="p-3 border-b border-gray-200">
              <a className="flex gap-2 items-center" href="" target="blank">
                <div className="p-1.5 text-blue-500 rounded-full text-xl">
                  <FaFacebookF></FaFacebookF>
                </div>
                <span className=" font-medium">Facebook</span>
              </a>
            </li>
            <li className="p-3 border-b border-gray-200">
              <a className="flex gap-2 items-center" href="" target="blank">
                <div className="p-1.5  rounded-full text-xl text-[#58A7DE]">
                  <BsTwitter></BsTwitter>
                </div>

                <span className=" font-medium">Twitter</span>
              </a>
            </li>
            <li className="p-3">
              <a className="flex gap-2 items-center" href="" target="blank">
                <div className="p-1.5  rounded-full text-xl  text-[#D9465E]">
                  <BsInstagram></BsInstagram>
                </div>
                <span className=" font-medium">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
