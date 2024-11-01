import { layout } from "@/constants/layout";
import { media } from "@/constants/media";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: -300px 40px 140px 0;
  align-items: center;
  justify-content: space-between;
  ${layout};

  ${media.tablet} {
    text-align: center;
    margin: 0 0px 70px 0;
  }

  ${media.phone} {
    display: none;
  }
`;
export const Text = styled.div`
  font-size: 30px;
  padding-left: 30px;
  padding-top: 30px;

  ${media.tablet} {
    font-size: 20px;
    padding-left: 0;
  }

  ${media.phone} {
    font-size: 15px;
    width: auto;
  }
`;

export const Img = styled.img`
  width: 45%;
  object-fit: cover;

  ${media.tablet} {
    width: 50%;
  }

  ${media.phone} {
    width: 100%;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20%;

  ${media.phone} {
    padding-top: 0;
  }
`;
