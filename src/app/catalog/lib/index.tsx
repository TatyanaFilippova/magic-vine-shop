'use client'
import Filters from "@/app/catalog/lib/Filters/Filters";

import {
  Title,
  WrapperDiv,
  WrapperFilters,
  WrapperButtonFilters,
} from "../styles";
import FiltersMobil from "../lib/FiltersMobil/FiltersMobil";
import CardList from "../lib/CardList";

const CatalogPage = () => {
  return (
    <>
      <WrapperButtonFilters>
        <Title>Каталог товаров</Title>
        <FiltersMobil />
      </WrapperButtonFilters>
      <WrapperDiv>
        <WrapperFilters>
          <Filters />
        </WrapperFilters>
        <CardList />
      </WrapperDiv>
    </>
  );
};

export default CatalogPage;
