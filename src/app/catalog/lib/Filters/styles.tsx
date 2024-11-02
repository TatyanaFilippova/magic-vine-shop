import { media } from "@/constants/media";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.phone} {
    display: none;
  }
`;
export const Title = styled.div`
  font-size: 24px;
`;

export const WrapperParameters = styled.div`
  ${media.phone} {
    display: none;
  }
`;

export const Parameters = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
`;