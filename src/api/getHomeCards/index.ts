import cmsAxios from "@/configs/axios";
import getCmsImage from "@/utils/get-cms-image";
import { useQuery } from "@tanstack/react-query";

interface HomeCardData {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  price: string;
  week: string;
}

const useHomeCards = () => {
  return useQuery<HomeCardData[]>({
    queryKey: ["HomeCards"],
    queryFn: async () => {
      const result = await cmsAxios.get(
        `/api/products?populate=*&pagination[pageSize]=3`
      );

      return result.data.data.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          description: item.dimensions,
          imgUrl: getCmsImage(item.banner),
          price: item.price,
          week: item.week,
        };
      });
    },
  });
};

export default useHomeCards;
