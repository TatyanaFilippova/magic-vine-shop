import { CMS_URL } from "@/constants";

const getCmsImage = (image: any) => CMS_URL + image?.url;

export default getCmsImage;
