import axiosLib from "axios";

const cmsAxios = axiosLib.create({
  baseURL: "https://cms.unclespace.ru",
});
export default cmsAxios;
