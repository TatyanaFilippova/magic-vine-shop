"use client";

import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import styled from "styled-components";

import Filters from "@/components/Filters/Filters";
import { layout } from "@/constants/layout";
import { useQuery } from "@tanstack/react-query";
import { media } from "@/constants/media";

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-bottom: 100px;

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

const CatalogCardProduct = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetch("/api/product.json").then((res) => res.json()),
  });
  if (!data) return null;
  const product = data.map(function (item: ProductResult) {
    return (
      <WrapperProductCardColumn>
        <ProductCard
          description={item.description}
          title={item.title}
          imgCard={item.imgUrl}
          button="Подробнее"
        />
      </WrapperProductCardColumn>
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