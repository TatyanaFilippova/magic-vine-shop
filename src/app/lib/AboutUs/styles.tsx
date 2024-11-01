import { layout } from "@/constants/layout";
import { media } from "@/constants/media";
import styled from "styled-components";
import fon from "./assets/backgroundImage.png";

export const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("${fon.src}");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 60px;
  margin-top: 80px;

  ${media.tablet} {
    padding-bottom: 20px;
  }

  ${media.phone} {
    padding-bottom: 60px;
  }
`;

export const WrapperBlock = styled.div``;

export const WrapperFlex = styled.div`
  display: flex;

  ${layout}
`;

export const Title = styled.div`
  font-size: 40px;
  margin-top: 16px;

  ${media.tablet} {
    font-size: 36px;
  }

  ${media.phone} {
    font-size: 24px;
  }
`;

export const DivTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 10px;

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.phone} {
    font-size: 20px;
    width: 100%;
  }
`;

export const Div = styled.div`
  display: flex;
  margin-top: 90px;

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.phone} {
    margin-top: 50px;
  }
`;

export const DivText = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  width: 70%;
`;

export const DivItemText = styled.div`
  font-size: 20px;

  ${media.tablet} {
    font-size: 16px;
  }

  ${media.phone} {
    font-size: 16px;
  }
`;

export const Imgicon = styled.img`
  ${media.tablet} {
    width: 60px;
  }

  ${media.phone} {
    width: 70px;
  }
`;

export const Img = styled.img`
  height: 700px;

  ${media.tablet} {
    display: none;
  }

  ${media.phone} {
    display: none;
  }
`;
