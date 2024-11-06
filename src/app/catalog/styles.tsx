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



export const WrapperFilters = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;

  ${media.phone} {
    display: none;
  }
`;



export const WrapperButtonFilters = styled.div`
  display: flex;
  justify-content: space-around;

  ${layout}
`;
