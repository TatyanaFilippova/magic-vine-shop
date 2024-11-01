import cmsAxios from "@/configs/axios";
import { button, layout } from "@/constants/layout";
import { media } from "@/constants/media";
import getCmsImage from "@/utils/get-cms-image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useScroll } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import {Button,Img,Review,Title,Wrapper,WrapperBlock,WrapperButton,WrapperTitle} from "./styles"



const formatReviews = (data) => {
  return data.data.map((item) => {
    return {
      icon: getCmsImage(item.avatar),
      name: item.name,
      text: item.text,
    };
  });
};

const Reviews = ({ id }: { id: string }) => {
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
      <WrapperTitle id={id}>Отзывы</WrapperTitle>
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
