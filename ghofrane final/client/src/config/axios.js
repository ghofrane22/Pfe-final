import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.REACT_SERVER_DOMAIN,
});
axiosApi.defaults.withCredentials = true;
export default axiosApi;
