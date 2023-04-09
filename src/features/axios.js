import axios from "axios";
import Cookies from "universal-cookie";

export const axiosRequestInterceptor = async (config) => {
  const cookies = new Cookies();
  const token = await cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export const baseUrl = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  headers: {
    "Content-Type": "application/json",
  },
});

baseUrl.interceptors.request.use(axiosRequestInterceptor, (e) =>
  Promise.reject(e)
);
