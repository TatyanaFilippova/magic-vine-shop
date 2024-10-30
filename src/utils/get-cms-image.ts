import { CMS_URL } from "@/constants";

const getCmsImage = (image) => CMS_URL + image?.url;

export default getCmsImage;
