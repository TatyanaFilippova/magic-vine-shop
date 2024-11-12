import { layoutFull } from "@/constants/layout";
import { media } from "@/constants/media";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const Container = styled.div`
  ${layoutFull}
`

export const Embla = styled.div`
  overflow: hidden;
  margin-bottom: 60px;
  padding-bottom: 40px;

  ${media.tablet} {
    margin-top: 40px;
  }

  ${media.phone} {
    margin-top: 40px;
    margin-bottom: 10px;
  }
`;

export const Embla__container = styled.div`
  display: flex;
`;

export const Embla__slide = styled.div`
  flex: 0 0 40%;
  min-width: 0;

  ${media.phone} {
    flex: 0 0 70%;
  }
`;

export const Img = styled.img`
  height: 500px;
  object-fit: cover;
  width: 95%;

  ${media.tablet} {
    height: 300px;
  }

  ${media.phone} {
    height: 300px;
  }
`;

export const ImgSkeleton = styled(Skeleton)`
  height: 500px;
  width: 540px;

  ${media.tablet} {
    height: 300px;
    width: 284px;
  }

  ${media.phone} {
    height: 300px;
    width: 270px;
  }
`;
