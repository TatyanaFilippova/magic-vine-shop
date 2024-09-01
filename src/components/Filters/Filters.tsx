import { useState } from "react";
import styled from "styled-components";
import ButtonFrame from "./ButtonFrame";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 24px;
`;

const WrapperParameters = styled.div``;

const Parameters = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const Filters = () => {
  return (
    <div>
      <Wrapper>
        <Title>Фильтры</Title>
      </Wrapper>
      <WrapperParameters>
        <Parameters>Параметры</Parameters>

        <ButtonFrame title="Деревянный каркас" />
        <ButtonFrame title="Есть в наличии" />
        <Parameters>Типы</Parameters>
      </WrapperParameters>
      <ButtonFrame title="Круглая корзинка" />
      <ButtonFrame title="Квадратная корзинка" />
      <ButtonFrame title="Мебель" />
      <ButtonFrame title="Для кухни" />
    </div>
  );
};

export default Filters;
