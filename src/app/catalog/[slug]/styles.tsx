import { layout } from "@/constants/layout";
import { media } from "@/constants/media";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
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

export const Description = styled.div`
  font-size: 18px;
  width: 600px;
  line-height: 1.4;
  white-space: break-spaces;

  ${media.tablet} {
    width: auto;
  }

  ${media.phone} {
    font-size: 15px;
    text-align: center;

    ${layout}
  }
`;

export const ImgProduct = styled.div<{ $img: string }>`
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  height: 750px;
  width: 100%;
  background-size: cover;

  ${media.tablet} {
    height: 500px;
    width: 100%;
  }
  ${media.phone} {
    display: none;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  width: 100%;

  ${layout}

  ${media.tablet} {
    width: 100%;
    margin-top: 100px;
    padding: 0 40px;
  }

  ${media.phone} {
    width: 100%;
    align-items: center;
    margin-top: 180px;
    padding: 10px;
  }
`;

export const WrapperHashtags = styled.div`
  display: flex;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;

  ${media.phone} {
    width: auto;
  }
`;

export const Hashtags = styled.div`
  margin-right: 10px;
  color: #869286;
  font-size: 15px;

  ${media.tablet} {
    font-size: 12px;
  }
`;
export const Button = styled.div`
  background-color: #bcc0b4;
  border-radius: 8px;
  height: 40px;
  font-size: 16px;
  width: 460px;
  padding: 10px;
  text-align: center;

  ${media.phone} {
    width: auto;
    height: auto;
  }
`;

export const Shell = styled.div`
  margin: 40px;

  ${media.phone} {
    ${layout}
  }
`;

export const DivTitle = styled.div`
  display: none;

  ${media.phone} {
    display: block;
    font-size: 24px;
    text-align: center;
  }
`;