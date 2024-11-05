import { media } from "@/constants/media";
import Link from "next/link";
import styled from "styled-components";

export const WrapperLogoTitle = styled.div`
  align-items: center;

  display: flex;

  ${media.tablet} {
    flex-direction: column;
  }

  ${media.phone} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.phone} {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  padding-bottom: 50px;

  ${media.tablet} {
    font-size: 18px;
  }
`;

export const ImgLogo = styled.img`
  width: 170px;
  padding-right: 24px;
  padding-bottom: 40px;
`;

export const Text = styled(Link)`
  font-size: 18px;
  padding-bottom: 15px;
  color: black;

  ${media.phone} {
    font-size: 15px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    display: none;
  }
`;

export const WrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperBlockSekond = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperBlockTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 32px;
  margin-top: 54px;

  ${media.phone} {
    margin-top: 10px;
  }
`;

export const WrapperMain = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f2eae2;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const ImgIcon = styled.img`
  width: 70px;
  padding-bottom: 10px;
`;
