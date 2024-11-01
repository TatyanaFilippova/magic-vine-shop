import { media } from "@/constants/media";
import styled from "styled-components";

export const Embla = styled.div`
  overflow: hidden;

  margin-bottom: 60px;

  padding-bottom: 40px;

  ${media.tablet} {
    margin-top: 40px;
  }

  ${media.phone} {
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;

export const Embla__container = styled.div`
  display: flex;
`;

export const Embla__slide = styled.div`
  flex: 0 0 50%;
  min-width: 0;
  margin-right: 20px;

  ${media.phone} {
    flex: 0 0 60%;
  }
`;

export const Img = styled.img`
  height: 520px;
  object-fit: cover;
  width: 100%;

  ${media.tablet} {
    height: 300px;
  }

  ${media.phone} {
    height: 250px;
  }
`;