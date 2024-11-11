"use client";

import icon from "../Header/assets/icon.png";
import iconVK from "./assets/iconVK.png";
import iconWhatsApp from "./assets/iconWhatsApp.png";
import {
  ImgIcon,
  ImgLogo,
  Text,
  Title,
  Wrapper,
  WrapperBlock,
  WrapperBlockSekond,
  WrapperBlockTitle,
  WrapperLogoTitle,
  WrapperMain,
  WrapperText,
} from "./styles";

const Footer = () => {
  return (
    <WrapperMain>
      <Wrapper>
        <WrapperLogoTitle>
          <ImgLogo src={icon.src} />
          <Title>Магия из бумажной лозы</Title>
        </WrapperLogoTitle>
        <WrapperText>
          <Text href={""}>
            Магазин плетеных корзинок и декора из бумажной лозы в г. Сыктывкар.
          </Text>
          <Text href={""}>Доставка по всей России.</Text>
        </WrapperText>
      </Wrapper>
      <WrapperBlock>
        <WrapperBlockTitle>основные ссылки</WrapperBlockTitle>
        <Text href={"/catalog"}>Продукция</Text>
        <Text href={"/#delivery"}>Как заказать</Text>
        <Text href={"/#reviews"}>Отзывы</Text>
        <Text href={"/#about-us"}>О нас</Text>
      </WrapperBlock>
      <WrapperBlockSekond>
        <WrapperBlockTitle>социальные сети</WrapperBlockTitle>
        <a href="https://vk.com/magic_vine_syk" target="_blank">
          <ImgIcon src={iconVK.src} />
        </a>
        <a href="https://wa.me/+79121992737?" target="_blank">
          <ImgIcon src={iconWhatsApp.src} />
        </a>
      </WrapperBlockSekond>
    </WrapperMain>
  );
};

export default Footer;
