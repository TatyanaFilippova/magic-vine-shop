import { CMS_URL } from "@/constants";
import axiosLib from "axios";

const cmsAxios = axiosLib.create({
  baseURL: CMS_URL,
});
export default cmsAxios;
