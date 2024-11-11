import { layout } from "@/constants/layout";
import { media } from "@/constants/media";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 100px;
  background-color: #bcc0b4;
  text-align: center;
`;

export const Div = styled.div`
  height: 486px;
  position: relative;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.phone} {
    width: auto;
    height: 420px;
  }
`;

export const Img2 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
  margin-bottom: 10px;

  ${media.tablet} {
    width: 300px;
    height: 300px;
  }

  ${media.phone} {
    display: none;
  }
`;

export const FieldWrapper = styled.div`
  width: 630px;

  ${media.tablet} {
    width: auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  ${media.phone} {
    width: auto;
  }
`;

export const FieldWrapperSuccess = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 40px;

  ${media.phone} {
    padding-right: 0px;
  }
`;

export const Img1 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
  margin-top: 10px;

  ${media.tablet} {
    width: 300px;
    height: 300px;
  }

  ${media.phone} {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  text-align: center;
  padding-top: 36px;

  ${media.tablet} {
    font-size: 32px;
  }

  ${media.phone} {
    font-size: 30px;
    padding-top: 26px;
  }
`;

export const TitleSuccess = styled.div`
  font-size: 36px;
  text-align: center;
  padding-top: 160px;

  ${media.phone} {
    font-size: 30px;
  }
`;

export const Button = styled.div`
  background-color: #526468;
  color: white;
  height: 50px;
  font-size: 20px;
  width: 264px;
  margin-top: 36px;
  text-align: center;
  padding-top: 15px;
  cursor: pointer;

  ${media.phone} {
    font-size: 16px;
    margin-top: 26px;
  }
`;

export const Description = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;

  ${media.phone} {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  margin-top: 20px;
  padding-bottom: 10px;

  ${media.phone} {
    font-size: 16px;
  }
`;
