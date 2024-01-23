const Banner = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/1KKPxxL/slider-one.png)] bg-cover bg-center">
      <div>
        <div className="bg-dark-01 bg-opacity-30 py-20 md:py-28">
          <div className="max-w-7xl mx-auto my-10 px-5 lg:px-0 text-center">
            <h1 className="text-4xl md:text-6xl text-white  font-bold  mb-5">
              Find Your Favorite Property
            </h1>
            <div className="w-20 h-1.5 bg-dark-03 mb-10 mx-auto"></div>
            <div className="bg-gray-50 p-10 rounded max-w-4xl mx-auto shadow">
              <form>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left gap-5">
                  <div>
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
                        className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-white   rounded w-full"
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Type here"
                        required
                      />
                    </div>
                  </div>
                  <div>
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
                        className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-white   rounded w-full"
                        type="text"
                        name="bedrooms"
                        id="bedrooms"
                        placeholder="Type"
                        required
                      />
                    </div>
                  </div>
                  <div>
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
                        className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-white   rounded w-full"
                        type="text"
                        name="bathrooms"
                        id="bathrooms"
                        placeholder="Type"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                        htmlFor="room_size"
                      >
                        Room size:
                      </label>
                    </div>
                    <div>
                      <input
                        className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-white   rounded w-full"
                        type="text"
                        name="room_size"
                        id="room_size"
                        placeholder="Type"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        className="text-sm font-medium text-dark-01 opacity-80 mb-1 block"
                        htmlFor="rent_per_month"
                      >
                        Price Range: $120000 - $820000
                      </label>
                    </div>
                    <div>
                      <input
                        className="px-5 py-2 outline-none text-sm border border-gray-200 text-dark-01  bg-white   rounded w-full"
                        type="text"
                        name="rent_per_month"
                        id="rent_per_month"
                        placeholder="Type"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center md:mt-6">
                    <div className="">
                      <input
                        className="h-6 w-6"
                        type="checkbox"
                        name="availability"
                        id="availability"
                        placeholder="Type"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="font-medium text-dark-01 opacity-80 mb-1 block"
                        htmlFor="availability"
                      >
                        Only Available Houses
                      </label>
                    </div>
                  </div>
                </div>
              </form>
              <button className="py-2 mt-6 w-full md:py-3 md:px-10 text-white border-2 border-dark-03 bg-dark-03 duration-500  rounded ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
