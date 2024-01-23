import axios from "axios";

const instance = axios.create({
  baseURL: "https://house-hunter-three.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
