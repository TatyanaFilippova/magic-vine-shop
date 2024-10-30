import cmsAxios from "@/configs/axios";
import getCmsImage from "@/utils/get-cms-image";
import { useQuery } from "@tanstack/react-query";

const useHomeCards = () => {
  return useQuery({
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
