"use client";

import banner from "./banner.png";
import styled from "styled-components";
import { media } from "@/constants/media";

import DescriptionBlock from "./Slideshow/DescriptionBlock";
import { EmblaCarouselProduct } from "./Slideshow/emblaCarouselProduct";
import Table from "./Table";
import Table12 from "./Table";
import { layout } from "@/constants/layout";

const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 44px;

  padding-bottom: 10px;
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

const WrapperHashtags = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const Hashtags = styled.div`
  margin-right: 10px;
  color: #869286;
  font-size: 15px;
`;
const Button = styled.button`
  background-color: #526468;
  color: white;
  height: 40px;
  font-size: 16px;
  width: 256px;
`;

const Shell = styled.div`
  margin: 40px;
`;

const Goods = () => {
  return (
    <>
      <Wrapper>
        <WrapperText>
          <Title>Корзинка с крышкой</Title>
          <WrapperHashtags>
            <Hashtags>#Прочная</Hashtags>
            <Hashtags>#Не боится влаги</Hashtags>
            <Hashtags>#быстрое изготовление</Hashtags>
          </WrapperHashtags>
          <Description>
            Описание этой прекрасной корзинки, небольшое на несколько строк
          </Description>
        </WrapperText>
        <ImgProduct />
      </Wrapper>
      <DescriptionBlock />
      <EmblaCarouselProduct />
      <Shell>
        <Table12 />
        <Button>Расчитать стоимость</Button>
      </Shell>
    </>
  );
};

export default Goods;
