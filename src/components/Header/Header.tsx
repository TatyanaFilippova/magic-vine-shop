"use client";

import styled from "styled-components";
import icon from "./icon.png";
import { media } from "@/constants/media";
import { layout } from "@/constants/layout";

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
const Text = styled.div`
  font-size: 20px;

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
      <Text>Каталог</Text>
      <Text>Условия и доставка</Text>
      <Img src={icon.src} />
      <Text>Сотрудничество</Text>
      <Text>Связаться с нами</Text>
    </Wrapper>
  );
};
export default Header;
