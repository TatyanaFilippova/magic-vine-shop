import { media } from "@/constants/media";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 24px;

  ${media.phone} {
    margin-top: 20px;
    position: relative;
    right: 20px;
  }
`;

export const WrapperParameters = styled.div``;

export const Parameters = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
`;
