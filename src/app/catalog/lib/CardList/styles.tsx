import { media } from "@/constants/media";
import styled from "styled-components";

export const WrapperProductCardColumn = styled.div`
  width: 44%;
  padding-bottom: 50px;

  ${media.tablet} {
    width: 45%;
  }

  ${media.phone} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 80px;
  padding-right: 50px;

  ${media.tablet} {
    padding-left: 0;
    padding-right: 0;
  }

  ${media.phone} {
    padding-left: 0;
    padding-right: 0;
  }
`;