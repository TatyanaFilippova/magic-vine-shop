import { CMS_URL } from "@/constants";
import axiosLib from "axios";
import axios from "axios";

const cmsAxios = axiosLib.create({
  baseURL: CMS_URL,
});
export default cmsAxios;

export const serverAxios = axiosLib.create({
  baseURL: '/api/',
})

export const cmsBearerAxios = axios.create({
  baseURL: CMS_URL,
  headers: {
    'Authorization': 'Bearer ' + process.env.CMS_AUTH_TOKEN
  }
})