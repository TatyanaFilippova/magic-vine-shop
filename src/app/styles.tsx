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

export const Img = styled.img`
  width: 980px;
`;

export const DeliveryBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;

  ${layout}
`;
export const TitleDelivery = styled.div`
  font-size: 40px;
  margin-bottom: 100px;

  ${media.phone} {
    font-size: 24px;
  }
`;
