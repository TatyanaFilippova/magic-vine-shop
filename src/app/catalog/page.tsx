"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import styled from "styled-components";
import Filters from "@/components/Filters/Filters";
import { layout } from "@/constants/layout";
import { useQuery } from "@tanstack/react-query";
import { media } from "@/constants/media";
import { useSearchParams } from "next/navigation";
import cmsAxios from "@/configs/axios";
import getCmsImage from "@/utils/get-cms-image";

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-bottom: 100px;
  padding-top: 200px;

  ${media.phone} {
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

const WrapperDiv = styled.div`
  display: flex;

  ${layout}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 80px;
  padding-right: 50px;
 
  ${media.tablet} {
    padding-left: 0;
    padding-right: 0;
  }

  ${media.phone} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const WrapperFilters = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;

  ${media.phone} {
    display: none;
  }
`;

interface ProductResult {
  title: string;
  description: string;
  imgUrl: string;
}

const WrapperProductCardColumn = styled.div`
  width: 44%;
  padding-bottom: 50px;

  ${media.tablet} {
    width: 45%;
  }

  ${media.phone} {
    width: 100%;
  }
`;

interface Item {
  id: string;
  title: string;
  description?: string;
  imgUrl: string;
  params: [string];
  price: number;
  link: string;
}

const data = [
  {
    id: 2,
    documentId: "eqlpup9qx0b96iwwj7ly2rc8",
    title: "Деревянный каркас",
    slug: "derevyannyj-karkas",
    createdAt: "2024-10-22T08:51:26.395Z",
    updatedAt: "2024-10-22T08:51:26.395Z",
    publishedAt: "2024-10-22T08:51:26.408Z",
    locale: null,
  },
];

const formatParams = (data) => {
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
      <Title>Каталог товаров</Title>
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
