import { media } from "@/constants/media";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 100%;

    ${media.phone} {
      flex-direction: column;
    }
  }
`;

export const ImgCard = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;

  ${media.tablet} {
    height: 250px;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.phone} {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

export const Description = styled.div`
  font-size: 20px;
  text-align: center;
  height: 60px;

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.phone} {
    font-size: 15px;
    height: 20px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  background-color: #526468;
  color: white;
  width: 100%;
  height: 40px;
  font-size: 20px;
  margin-top: 10px;
`;
