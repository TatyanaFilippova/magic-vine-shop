"use client";

import icon from "./assets/icon.png";
import Burger from "./Burger/Burger";
import { Container, Img, Text, Wrapper } from "./styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Burger />
        <Text href={"/"}>Главная</Text>
        <Text href={"/catalog"}>Каталог</Text>
        <Img src={icon.src} />
        <Text href={"/#about-us"}>О нас</Text>
        <Text href={"/#delivery"}>Доставка и оплата</Text>
      </Wrapper>
    </Container>
  );
};
export default Header;
