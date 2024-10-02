"use client";

import banner from "./banner.png";
import styled from "styled-components";
import { media } from "@/constants/media";
import DescriptionBlock from "./Slideshow/DescriptionBlock";
import { EmblaCarouselProduct } from "./Slideshow/emblaCarouselProduct";
import Table12 from "./Table";
import HomeTextBlock from "@/components/HomeTextBlock/HomeTextBlock";
import OrderForm from "@/components/OrderForm/OrderForm";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 44px;
  padding-bottom: 10px;

  ${media.tablet} {
    font-size: 32px;
  }
  ${media.phone} {
    font-size: 30px;
    width: auto;
    align-items: center;
  }
`;

const Description = styled.div`
  font-size: 18px;

  ${media.phone} {
    font-size: 15px;
    text-align: center;
  }
`;

const ImgProduct = styled.div`
  background: url(${banner.src});
  background-repeat: no-repeat;
  height: 800px;
  width: 70%;
  background-size: cover;

  ${media.tablet} {
    height: 500px;
    width: 100%;
  }
  ${media.phone} {
    display: none;
  }
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;

  ${media.tablet} {
    width: 100%;
    margin-top: 100px;
    padding: 40px;
  }

  ${media.phone} {
    width: 100%;
    align-items: center;
    margin-top: 180px;
    padding: 10px;
  }
`;

const WrapperHashtags = styled.div`
  display: flex;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;

  ${media.phone} {
    width: auto;
  }
`;

const Hashtags = styled.div`
  margin-right: 10px;
  color: #869286;
  font-size: 15px;

  ${media.tablet} {
    font-size: 12px;
  }
`;
const Button = styled.div`
  background-color: #bcc0b4;
  border-radius: 8px;
  height: 40px;
  font-size: 16px;
  width: 460px;
  padding: 10px;
  text-align: center;
`;

const Shell = styled.div`
  margin: 40px;
`;

const Goods = () => {
  return (
    <>
      <Wrapper>
        {
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
        }
        <ImgProduct />
      </Wrapper>
      <DescriptionBlock />
      <EmblaCarouselProduct />
      <Shell>
        <Table12 />
        <Button>
          Данная корзинка в указанном цвете и размерах стоит 2500 р.
        </Button>
      </Shell>
      <HomeTextBlock
        text={
          "Оставьте вашу заявку на понравившийся товар, и мы обязательно свяжемся с вами для обсуждения и уточнения всех ваших предложений, изменений и цены. "
        }
      />
      <OrderForm />
      
    </>
  );
};

export default Goods;
