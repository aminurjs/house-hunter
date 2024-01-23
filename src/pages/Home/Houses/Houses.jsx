import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { useEffect, useState } from "react";
import House from "./House";

const Houses = () => {
  const axios = useAxios();
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  useEffect(() => {
    axios
      .get("/houses-count")
      .then((res) => setCount(res.data.count))
      .catch((err) => console.log(err));
  }, [axios]);

  const { data: houses = [], refetch } = useQuery({
    queryKey: ["houses"],
    queryFn: async () => {
      const res = await axios.get(
        `/all-houses/?page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });
  useEffect(() => {
    refetch();
  }, [refetch, currentPage]);
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div id="houses" className="bg-base-200 py-20 px-5">
      <h1 className="text-4xl md:text-6xl text-dark-01 font-bold  mb-3 text-center">
        Houses For Rent
      </h1>
      <div className="w-20 h-1.5 bg-dark-03 mb-5 mx-auto"></div>
      <h2 className="text-lg md:text-2xl text-center font-medium  mb-12">
        Discover Your Perfect Stay
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6">
        {houses?.map((house) => (
          <House key={house._id} house={house} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 my-10">
        <a href="#houses">
          <button
            disabled={currentPage === 0}
            onClick={handlePrev}
            className="btn btn-accent btn-sm"
          >
            Prev
          </button>
        </a>
        {pages.map((page) => (
          <a href="#houses" key={page}>
            <button
              disabled={currentPage === page}
              className="btn btn-ghost btn-sm bg-gray-300
            "
              onClick={() => setCurrentPage(page)}
            >
              {page + 1}
            </button>
          </a>
        ))}
        <a href="#houses">
          <button
            disabled={currentPage === pages.length - 1}
            onClick={handleNext}
            className="btn btn-accent btn-sm"
          >
            Next
          </button>
        </a>
      </div>
    </div>
  );
};

export default Houses;
