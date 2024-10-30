import { layout } from "@/constants/layout";
import styled from "styled-components";
import { media } from "@/constants/media";
import Link from "next/link";
import ModalQuestion from "./ModalQuestion";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 0 40px;

  ${media.phone} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const Title = styled(Link)`
  font-size: 18px;
  align-items: center;
  color: black;
`;

const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;

  ${media.tablet} {
    width: 60%;
    text-align: center;
    padding: 10px;
  }

  ${media.phone} {
    display: none;
  }
`;

const DescriptionBlock = () => {
  return (
    <Wrapper>
      <WrapperTitle>
        <Title href={"#photo"}>Фотогаллерея</Title>
        <Title href={"#peculiarities"}>Особенности</Title>
        <Title href={"#orderForm"}>Форма заказа</Title>
      </WrapperTitle>
      
      <ModalQuestion />
    </Wrapper>
  );
};

export default DescriptionBlock;
