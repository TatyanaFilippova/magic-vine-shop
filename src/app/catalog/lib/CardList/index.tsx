import cmsAxios from "@/configs/axios";
import getCmsImage from "@/utils/get-cms-image";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import ProductCard from "../ProductCard/ProductCard";
import { WrapperProductCardColumn, Wrapper } from "./styles";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";

interface Item {
  id: string;
  title: string;
  description?: string;
  imgUrl: string;
  params: [string];
  price: number;
  link: string;
  week: number;
}

interface FormatParamsData {
  slug: string;
}

const formatParams = (data: FormatParamsData[]) => {
  return data.map((item) => {
    return item.slug;
  });
};

const skeletons = Array.from({ length: 4 });
const CardList = () => {
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const result = await cmsAxios.get("/api/products?populate=*");

      return result.data;
    },
  });

  if (isLoading)
    return (
      <Wrapper>
        {skeletons.map((item, key) => {
          return (
            <WrapperProductCardColumn key={key}>
              <ProductCardSkeleton hesLink />
            </WrapperProductCardColumn>
          );
        })}
      </Wrapper>
    ); // Обработка загрузки
  if (error) return <div>Error: {error.message}</div>; // Обработка ошибок
  if (!data) return null;

  const list: Item[] = data.data.map((item: any) => {
    const allFilters = [...item.filterParameters, ...item.filterTypes];

    return {
      id: item.id,
      title: item.title,
      description: item.dimensions,
      imgUrl: getCmsImage(item.banner),
      params: formatParams(allFilters),
      price: item.price,
      link: `/catalog/${item.slug}`,
      week: item.week,
    };
  });

  const filteredData = list.filter((item: Item) => {
    const selectedPrice = current.get("max-price");
    const weeks = current.get("weeks");
    if (selectedPrice && +selectedPrice < item.price) {
      return false;
    }

    if (weeks && +weeks < +item.week) {
      return false;
    }
    if (!current.has("selected")) return true;

    // список всех выбранных фильтров
    const selectedFilters = current.getAll("selected");

    // проверяем на то, что каждый элемент из выбранных фильтров включен в params
    return selectedFilters.every((filter) => item.params.includes(filter));
  });

  const product = filteredData.map((item: Item) => (
    <WrapperProductCardColumn key={item.title}>
      <ProductCard
        description={item.description ?? ""}
        title={item.title}
        imgCard={item.imgUrl}
        link={item.link}
      />
    </WrapperProductCardColumn>
  ));
  return <Wrapper>{product}</Wrapper>;
};

export default CardList;
