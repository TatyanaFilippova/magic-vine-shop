import { layout } from "@/constants/layout";
import { media } from "@/constants/media";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const Title = styled.div`
  font-size: 80px;
  margin-bottom: 20px;
  margin-top: 30px;

  ${media.tablet} {
    text-align: center;
    font-size: 60px;
  }
  ${media.phone} {
    font-size: 40px;
  }
`;

export const TitleSkeleton = styled(Skeleton)`
  height: 96px;
  width: 890px;
  margin-bottom: 20px;
  margin-top: 30px;

  ${media.tablet} {
    text-align: center;
    height: 72px;
    width: 664px;
  }
  ${media.phone} {
    height: 70px;
    width: 350px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: auto;
  padding-top: 200px;

  ${media.phone} {
    text-align: center;
  }
`;
export const Description = styled.div`
  font-size: 20px;
  text-align: center;

  ${media.phone} {
    font-size: 15px;
  }
`;

export const DescriptionSkeleton = styled(Skeleton)`
  height: 24px;
  width: 490px;
  text-align: center;

  ${media.phone} {
    width: 368px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const Button = styled.button`
  background-color: #526468;
  color: #ffffff;
  margin-top: 30px;
  font-size: 20px;
  width: 250px;
  height: 50px;
  border: none;
  margin-bottom: 50px;
  ${media.phone} {
    font-size: 15px;
    margin-top: 35px;
    width: 200px;
    height: 40px;
  }
`;

export const ButtonSkeleton = styled(Skeleton)`
  height: 50px;
  width: 250px;
  margin-bottom: 50px;
  ${media.phone} {
    height: 40px;
    width: 200px;
    margin-top: 0px;
  }
`;
