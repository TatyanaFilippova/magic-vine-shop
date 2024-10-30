import cmsAxios from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";

interface Product {
  summary: string;
  title: string;
  tag: string;
  banner: {
    url: string;
  };
  material: string;
  time: string;
  delivery: string;
  dimensions: string;
  colors: string;
  slider: {
    url: string;
  }[];
  priceForm: string;
}
const useProductDetailApi = (slug) => {
  return useQuery({
    queryKey: ["productDetail", slug],
    queryFn: async () => {
      const result = await cmsAxios.get(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
      );

      return result.data?.data?.[0];
    },
  });

  
};

export default useProductDetailApi