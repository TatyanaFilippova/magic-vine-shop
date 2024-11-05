import { layout } from "@/constants/layout";
import { media } from "@/constants/media";
import exp from "constants";
import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-bottom: 100px;
  padding-top: 200px;

  ${media.phone} {
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

export const WrapperDiv = styled.div`
  display: flex;

  ${layout}
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

export const WrapperFilters = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;

  ${media.phone} {
    display: none;
  }
`;

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

export const WrapperButtonFilters = styled.div`
  display: flex;
  justify-content: space-around;

  ${layout}
`;
