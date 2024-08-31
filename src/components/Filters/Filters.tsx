import { useState } from "react";
import styled from "styled-components";
import ButtonFrame from "./ButtonFrame";
import ButtonPresence from "./ButtonPresence";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 24px;
`;

const WrapperParameters = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
`;

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

        <ButtonFrame />
        <ButtonPresence />
      </WrapperParameters>
    </div>
  );
};

export default Filters;
