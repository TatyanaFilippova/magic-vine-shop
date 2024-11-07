import styled from "styled-components";

import { media } from "@/constants/media";
import { layout } from "@/constants/layout";

export const WrapperProductCard = styled.div`
  display: flex;
  justify-content: space-around;

  ${layout}

  ${media.tablet} {
    width: auto;
    align-items: center;
  }

  ${media.phone} {
    flex-direction: column;
    width: auto;
    align-items: center;
  }
`;

export const WrapperProductCardColumn = styled.div`
  width: 25%;

  ${media.tablet} {
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    align-items: center;
  }
  ${media.phone} {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }
`;

export const Img = styled.img`
  width: 90%;
  max-width: 9999999px;

  ${media.phone} {
    width: 900px;
  }
`;

export const DeliveryBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;

  ${layout}
  ${media.phone} {
    margin-top: 80px;
    padding: 0;
  }
`;
export const TitleDelivery = styled.div`
  font-size: 40px;
  margin-bottom: 100px;

  ${media.phone} {
    font-size: 24px;
    margin-bottom: 50px;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 10px;
  display: flex;
  justify-content: center;

  ${media.phone} {
    display: block;
  }
`;
