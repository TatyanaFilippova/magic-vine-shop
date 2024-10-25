import axiosLib from "axios";

const cmsAxios = axiosLib.create({
  baseURL: "http://localhost:1337/",
});
export default cmsAxios;
