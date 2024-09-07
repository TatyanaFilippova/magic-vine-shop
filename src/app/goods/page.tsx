"use client";
import { layout } from "@/constants/layout";
import banner from "./banner.png";
import styled from "styled-components";
import { media } from "@/constants/media";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1000px;

  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 44px;

  padding-bottom: 20px;
`;

const Description = styled.div`
  font-size: 18px;
`;

const ImgProduct = styled.div`
  background: url(${banner.src});
  background-repeat: no-repeat;
  height: 800px;
  width: 70%;
  background-size: cover;
  ${media.tablet} {
    height: 600px;
    width: 50%;
  }
  ${media.phone} {
    height: 300px;
    width: 20%;
  }
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
`;

const Goods = () => {
  return (
    <>
      <Wrapper>
        <WrapperText>
          <Title>Корзинка с крышкой</Title>
          <Description>
            Описание этой прекрасной корзинки, небольшое на несколько строк
          </Description>
        </WrapperText>
        <ImgProduct />
      </Wrapper>
    </>
  );
};

export default Goods;
