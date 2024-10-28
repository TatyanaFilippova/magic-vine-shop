"use client";

import styled from "styled-components";
import icon from "./icon.png";
import { media } from "@/constants/media";

import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  height: 146px;
  align-items: center;
  position: absolute;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0 40px;

  ${media.tablet} {
    text-align: center;
  }

  ${media.phone} {
    font-size: 15px;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
const Img = styled.img`
  width: 153px;
  height: 146px;

  ${media.tablet} {
    padding: 10px;
  }
`;
const Text = styled(Link)`
  font-size: 20px;
  color: black;

  ${media.tablet} {
    padding: 10px;
  }
  ${media.phone} {
    display: none;
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <Text href={"/"}>Главная</Text>
      <Text href={"/catalog"}>Каталог</Text>
      <Img src={icon.src} />
      <Text href={"/#about-us"}>О нас</Text>
      <Text href={"/#delivery"}>Доставка и оплата</Text>
    </Wrapper>
  );
};
export default Header;
