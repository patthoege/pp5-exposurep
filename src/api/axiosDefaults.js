import axios from "axios";

axios.defaults.baseURL = 'https://web-production-278a3.up.railway.app/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();