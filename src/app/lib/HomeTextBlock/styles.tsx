import { layout } from "@/constants/layout";
import { media } from "@/constants/media";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;

  ${layout}
  ${media.tablet} {
    margin-bottom: 100px;
  }

  ${media.phone} {
    margin-bottom: 50px;
  }
`;

export const Text = styled.div`
  text-align: center;
  font-size: 30px;
  width: 800px;
  padding-top: 30px;
  line-height: 1.3;

  ${media.tablet} {
    font-size: 20px;
    width: 600px;
  }

  ${media.phone} {
    font-size: 16px;
    width: auto;
  }
`;
