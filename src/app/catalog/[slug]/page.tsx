"use client";

import banner from "./banner.png";
import styled from "styled-components";
import { media } from "@/constants/media";
import DescriptionBlock from "./Slideshow/DescriptionBlock";
import { EmblaCarouselProduct } from "./Slideshow/emblaCarouselProduct";
import Table12 from "./Table";
import HomeTextBlock from "@/components/HomeTextBlock/HomeTextBlock";
import OrderForm from "@/components/OrderForm/OrderForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { layout } from "@/constants/layout";
import { useParams } from "next/navigation";
import cmsAxios from "@/configs/axios";
import getCmsImage from "@/utils/get-cms-image";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 44px;
  padding-bottom: 10px;

  ${media.tablet} {
    font-size: 32px;
  }
  ${media.phone} {
    font-size: 30px;
    width: auto;
    align-items: center;
  }
`;

const Description = styled.div`
  font-size: 18px;
  width: 600px;
  line-height: 1.4;
  white-space: break-spaces;

  ${media.phone} {
    font-size: 15px;
    text-align: center;
  }
`;

const ImgProduct = styled.div<{ $img: string }>`
  background: ${(props) => `url(${props.$img})`};
  background-repeat: no-repeat;
  height: 700px;
  width: 100%;
  background-size: cover;

  ${media.tablet} {
    height: 500px;
    width: 100%;
  }
  ${media.phone} {
    display: none;
  }
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  width: 100%;

  ${layout}

  ${media.tablet} {
    width: 100%;
    margin-top: 100px;
    padding: 40px;
  }

  ${media.phone} {
    width: 100%;
    align-items: center;
    margin-top: 180px;
    padding: 10px;
  }
`;

const WrapperHashtags = styled.div`
  display: flex;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;

  ${media.phone} {
    width: auto;
  }
`;

const Hashtags = styled.div`
  margin-right: 10px;
  color: #869286;
  font-size: 15px;

  ${media.tablet} {
    font-size: 12px;
  }
`;
const Button = styled.div`
  background-color: #bcc0b4;
  border-radius: 8px;
  height: 40px;
  font-size: 16px;
  width: 460px;
  padding: 10px;
  text-align: center;
`;

const Shell = styled.div`
  margin: 40px;
`;

interface Product {
  summary: string;
  title: string;
  tag: string;
  banner: {
    url: string;
  };
  material: string;
  time: string;
  delivery: string;
  dimensions: string;
  colors: string;
  slider: {
    url: string;
  }[];
  priceForm: string;
}

const Goods = () => {
  const params = useParams<{ slug: string }>();

  const { data } = useQuery({
    queryKey: ["productDetail", params.slug],
    queryFn: async () => {
      const result = await cmsAxios.get(
        `/api/products?populate=*&filters[slug][$eq]=${params.slug}`
      );

      return result.data;
    },
  });

  const product: Product = data?.data?.[0];

  if (!product) return null;

  return (
    <>
      <Wrapper>
        {
          <WrapperText>
            <Title>{product.title}</Title>
            <WrapperHashtags>
              <Hashtags>{product.tag}</Hashtags>
            </WrapperHashtags>
            <Description>{product.summary}</Description>
          </WrapperText>
        }
        <ImgProduct $img={getCmsImage(product?.banner)} />
      </Wrapper>
      <DescriptionBlock />
      <EmblaCarouselProduct slider={product.slider} />
      <Shell>
        <Table12
          material={product.material}
          delivery={product.delivery}
          dimensions={product.dimensions}
          colors={product.colors}
          time={product.time}
        />
        <Button>{product.priceForm}</Button>
      </Shell>
      <HomeTextBlock
        text={
          "Оставьте вашу заявку на понравившийся товар, и мы обязательно свяжемся с вами для обсуждения и уточнения всех ваших предложений, изменений и цены. "
        }
      />
      <OrderForm />
    </>
  );
};

export default Goods;
