import { layoutFull } from "@/constants/layout";
import { media } from "@/constants/media";
import styled from "styled-components";

export const WrapperText = styled.div`
  height: 40px;
  width: 100%;
  margin-top: 50px;

  background: #f2eae2;

  ${media.tablet} {
    display: none;
  }
  ${media.phone} {
    display: none;
  }

  ${layoutFull}
`;

export const Text = styled.div`
  text-align: center;

  padding-top: 10px;
  padding-bottom: 12px;
  padding-right: 400px;
`;
