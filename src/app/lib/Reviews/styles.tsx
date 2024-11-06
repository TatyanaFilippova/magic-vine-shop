import { button, layout } from "@/constants/layout";
import { media } from "@/constants/media";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${layout}
`;

export const WrapperTitle = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 80px;
  margin-top: 180px;

  ${media.phone} {
    font-size: 24px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

export const WrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-bottom: 40px;

  ${media.phone} {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  ${media.tablet} {
    font-size: 20px;
    text-align: center;
  }

  ${media.phone} {
    font-size: 20px;
    text-align: center;
  }
`;

export const Review = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const Img = styled.img`
  height: 100px;
  width: 100px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;

  margin-bottom: 10px;
`;

export const Button = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${button};

  svg {
    margin-left: 40px;
    transform: ${(props) =>
      props.$isOpen ? "rotate(-90deg)" : "rotate(90deg)"};
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 100px;

  justify-content: flex-end;
  ${layout}

  ${media.tablet} {
    margin-top: 0px;
  }

  ${media.phone} {
    margin-top: 0px;
  }
`;
