"use client";

import styled from "styled-components";
import icon from "../Header/icon.png";
import iconVK from "./iconVK.png";
import iconWhatsApp from "./iconWhatsApp.png";
import { media } from "@/constants/media";

const WrapperLogoTitle = styled.div`
  align-items: center;

  display: flex;

  ${media.tablet} {
    flex-direction: column;
  }

  ${media.phone} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.phone} {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 24px;
  padding-bottom: 50px;

  ${media.tablet} {
    font-size: 18px;
  }
`;

const ImgLogo = styled.img`
  width: 170px;
  padding-right: 24px;
  padding-bottom: 40px;
`;

const Text = styled.div`
  font-size: 18px;
  padding-bottom: 15px;

  ${media.phone} {
    font-size: 15px;
  }
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    display: none;
  }
`;

const WrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperBlockSekond = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperBlockTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 32px;
  margin-top: 54px;

  ${media.phone} {
    margin-top: 10px;
  }
`;

const WrapperMain = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f2eae2;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ImgIcon = styled.img`
  width: 70px;
  padding-bottom: 10px;
`;

const Footer = () => {
  return (
    <WrapperMain>
      <Wrapper>
        <WrapperLogoTitle>
          <ImgLogo src={icon.src} />
          <Title>Магия из бумажной лозы</Title>
        </WrapperLogoTitle>
        <WrapperText>
          <Text>
            Магазин плетеных корзинок и декора из бумажной лозы в г. Сыктывкар.
          </Text>
          <Text>Доставка по всей России.</Text>
        </WrapperText>
      </Wrapper>
      <WrapperBlock>
        <WrapperBlockTitle>основные ссылки</WrapperBlockTitle>
        <Text>Продукция</Text>
        <Text>Как заказать</Text>
        <Text>Отзывы</Text>
        <Text>О нас</Text>
      </WrapperBlock>
      <WrapperBlockSekond>
        <WrapperBlockTitle>социальные сети</WrapperBlockTitle>
        <ImgIcon src={iconVK.src} />
        <ImgIcon src={iconWhatsApp.src} />
      </WrapperBlockSekond>
    </WrapperMain>
  );
};

export default Footer;
