import axios from "axios";

axios.defaults.baseURL = 'https://pp5-backend-api.up.railway.app';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();