"use client";
import Dropdown from "./FilterGroups/SelectedOption/SelectedOption";
import CheckboxList from "./FilterGroups/CheckboxList/CheckboxList";
import { Parameters, Title, Wrapper, WrapperParameters } from "./styles";
import FiltersParameters from "./FilterGroups/FiltersParameters/FiltersParameters";
import FiltersTypes from "./FilterGroups/FiltersTypes/FiltersTypes";

interface FormatFiltersData {
  data: {
    title: string;
    slug: string;
  }[];
}

export const formatFilters = (data: FormatFiltersData) => {
  return data.data.map((item) => {
    return { title: item.title, value: item.slug };
  });
};

const Filters = () => {
  return (
    <div>
      <Wrapper>
        <Title>Фильтры</Title>
      </Wrapper>
      <WrapperParameters>
        <FiltersParameters />
        <Parameters>Типы</Parameters>
      </WrapperParameters>
      <FiltersTypes />
      <Parameters>Срок изготовления</Parameters>
      <Dropdown />
      <Parameters>Цена изделия</Parameters>
      <CheckboxList />
    </div>
  );
};

export default Filters;
