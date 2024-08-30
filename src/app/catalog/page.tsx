"use client";

import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import styled from "styled-components";
import basketWithLid from "../../images/basketWithLid.png";
import Filters from "@/components/Filters/Filters";
import { layout } from "@/constants/layout";
import { useQuery } from "@tanstack/react-query";

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-bottom: 100px;
`;

const WrapperDiv = styled.div`
  display: flex;

  ${layout}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const WrapperFilters = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
`;

interface ProductResult {
  title: string;
  description: string;
  imgUrl: string;
}

const CatalogCardProduct = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetch("/api/product.json").then((res) => res.json()),
  });
  if (!data) return null;
  const product = data.map(function (item: ProductResult) {
    return (
      <ProductCard
        description={item.description}
        title={item.title}
        imgCard={item.imgUrl}
        button="Подробнее"
      />
    );
  });
  return (
    <div>
      <Header />
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
