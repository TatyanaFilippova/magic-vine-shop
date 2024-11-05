"use client";

import ProductCard from "@/app/catalog/lib/ProductCard/ProductCard";
import Filters from "@/app/catalog/lib/Filters/Filters";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import cmsAxios from "@/configs/axios";
import getCmsImage from "@/utils/get-cms-image";
import {
  Title,
  Wrapper,
  WrapperDiv,
  WrapperFilters,
  WrapperProductCardColumn,
  WrapperButtonFilters,
} from "./styles";
import IconFilters from "./lib/FiltersMobil/IconFilters";
import FiltersMobil from "./lib/FiltersMobil/FiltersMobil";

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

const CatalogCardProduct = () => {
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const result = await cmsAxios.get("/api/products?populate=*");

      return result.data;
    },
  });

  if (isLoading) return <div>Loading...</div>; // Обработка загрузки
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
  return (
    <div>
      <WrapperButtonFilters>
        <Title>Каталог товаров</Title>
        <FiltersMobil />
      </WrapperButtonFilters>

      <WrapperDiv>
        <WrapperFilters>
          <Filters></Filters>
        </WrapperFilters>

        <Wrapper>{product}</Wrapper>
      </WrapperDiv>
    </div>
  );
};

export default CatalogCardProduct;
