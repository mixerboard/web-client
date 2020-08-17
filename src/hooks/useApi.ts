import axios, { AxiosInstance } from "axios";

const useApi: () => AxiosInstance = () => {
  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`,
  });

  return api;
};

export default useApi;
