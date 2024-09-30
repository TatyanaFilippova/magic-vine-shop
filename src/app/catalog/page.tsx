"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import styled from "styled-components";
import Filters from "@/components/Filters/Filters";
import { layout } from "@/constants/layout";
import { useQuery } from "@tanstack/react-query";
import { media } from "@/constants/media";
import { useSearchParams } from "next/navigation";

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-bottom: 100px;
  padding-top: 200px;

  ${media.phone} {
    font-size: 30px;
  }
`;

const WrapperDiv = styled.div`
  display: flex;

  ${layout}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
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
  width: 35%;
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
}

const CatalogCardProduct = () => {
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetch("/api/product.json").then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>; // Обработка загрузки
  if (error) return <div>Error: {error.message}</div>; // Обработка ошибок
  if (!data) return null;

  const filteredData = data.filter((item: Item) => {
    const selectedPrice = current.get("max-price");

    if (selectedPrice && +selectedPrice < item.price) {
      return false;
    }
    if (!current.has("selected")) return true;

    return item.params.some((filter) => current.has("selected", filter));
  });

  const product = filteredData.map((item: ProductResult) => (
    <WrapperProductCardColumn key={item.title}>
      <ProductCard
        description={item.description}
        title={item.title}
        imgCard={item.imgUrl}
        button="Подробнее"
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
