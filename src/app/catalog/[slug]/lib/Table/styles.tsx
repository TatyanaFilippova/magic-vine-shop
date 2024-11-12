import { layout } from "@/constants/layout";
import { media } from "@/constants/media";
import styled from "styled-components";

export const WrapperTable = styled.table`
  width: 790px;
  border-collapse: collapse;
  margin: 40px 0 40px 0;

  ${media.tablet} {
    width: 100%;
  }
  ${media.phone} {
    display: flex;
    width: 100%;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid grey;
`;

export const Td2 = styled.td`
  padding: 10px;
  border-bottom: 1px solid grey;
  text-align: right;
`;
