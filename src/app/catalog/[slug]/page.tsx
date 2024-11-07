"use client";

import DescriptionBlock from "./lib/DescriptionBlock/DescriptionBlock";
import { EmblaCarouselProduct } from "./lib/EmblaCarouselProduct/EmblaCarouselProduct";
import Table12 from "./lib/Table/Table";
import HomeTextBlock from "@/app/lib/HomeTextBlock/HomeTextBlock";
import OrderForm from "@/app/catalog/[slug]/lib/OrderForm/OrderForm";
import { useParams } from "next/navigation";
import {
  Button,
  Description,
  DescriptionSkeleton,
  DivTitle,
  Hashtags,
  HashtagsSkeleton,
  ImgProduct,
  ImgProductSkeleton,
  Shell,
  Title,
  TitleSkeleton,
  Wrapper,
  WrapperHashtags,
  WrapperText,
} from "./styles";
import getCmsImage from "@/utils/get-cms-image";
import useProductDetailApi from "@/api/getProductDetail";
import DescriptionBlockSkeleton from "./lib/DescriptionBlock/DescriptionBlockSkeleton";
import { EmblaCarouselProductSkeleton } from "./lib/EmblaCarouselProduct/EmblaCarouselProductSkeleton";

const Goods = () => {
  const params = useParams<{ slug: string }>();
  const { data } = useProductDetailApi(params.slug);
  if (!data)
    return (
      <>
        <Wrapper>
          {
            <WrapperText>
              <TitleSkeleton />
              <WrapperHashtags>
                <HashtagsSkeleton />
              </WrapperHashtags>
              <DescriptionSkeleton />
            </WrapperText>
          }
          <ImgProductSkeleton />
        </Wrapper>
        <DescriptionBlockSkeleton />
        <EmblaCarouselProductSkeleton />
      </>
    );
  return (
    <>
      <Wrapper>
        {
          <WrapperText>
            <Title>{data.title}</Title>
            <WrapperHashtags>
              <Hashtags>{data.tag}</Hashtags>
            </WrapperHashtags>
            <Description>{data.summary}</Description>
          </WrapperText>
        }
        <ImgProduct $img={getCmsImage(data?.banner)} />
      </Wrapper>
      <DescriptionBlock />
      <EmblaCarouselProduct slider={data.slider} id="photo" />
      <Shell>
        <DivTitle>Особенности</DivTitle>
        <Table12
          id="peculiarities"
          material={data.material}
          delivery={data.delivery}
          dimensions={data.dimensions}
          colors={data.colors}
          time={data.time}
        />
        <Button>{data.priceForm}</Button>
      </Shell>
      <HomeTextBlock
        text={
          "Оставьте вашу заявку на понравившийся товар, и мы обязательно свяжемся с вами для обсуждения и уточнения всех ваших предложений, изменений и цены. "
        }
      />
      <OrderForm id="orderForm" />
    </>
  );
};

export default Goods;
