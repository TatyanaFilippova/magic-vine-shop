import cmsAxios from "@/configs/axios";
import { button, layout } from "@/constants/layout";
import { media } from "@/constants/media";
import getCmsImage from "@/utils/get-cms-image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useScroll } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${layout}
`;

const WrapperTitle = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 80px;
  margin-top: 180px;

  ${media.phone} {
    font-size: 24px;
    margin-top: 140px;
  }
`;

const WrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-bottom: 40px;

  ${media.phone} {
    width: 100%;
  }
`;

const Title = styled.div`
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

const Review = styled.div`
  font-size: 16px;
  text-align: center;
`;

const Img = styled.img`
  height: 100px;
  width: 100px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;

  margin-bottom: 10px;
`;

const Button = styled.button<{ $isOpen: boolean }>`
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

const WrapperButton = styled.div`
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

const formatReviews = (data) => {
  return data.data.map((item) => {
    return {
      icon: getCmsImage(item.avatar),
      name: item.name,
      text: item.text,
    };
  });
};

const Reviews = () => {
  const [isOpen, setOpen] = useState(false);
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const result = await cmsAxios.get("/api/reviews?populate=*");

      return formatReviews(result.data);
    },
  });
  if (!data) return null;

  return (
    <>
      <WrapperTitle>Отзывы</WrapperTitle>
      <Wrapper>
        {data.slice(0, isOpen ? undefined : 3).map((item) => {
          const text =
            item.text.length > 100
              ? `${item.text.slice(0, 100)}...`
              : item.text;
          return (
            <WrapperBlock>
              <Img src={item.icon} />
              <Title>{item.name}</Title>
              <Review>{text}</Review>
            </WrapperBlock>
          );
        })}
      </Wrapper>
      <WrapperButton>
        <Button $isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
          {isOpen ? "Закрыть отзывы" : "Все отзывы"}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6666 24L16.8 22.0667L21.5333 17.3333H5.33331V14.6667H21.5333L16.8 9.93333L18.6666 8L26.6666 16L18.6666 24Z"
              fill="white"
            />
          </svg>
        </Button>
      </WrapperButton>
    </>
  );
};

export default Reviews;
