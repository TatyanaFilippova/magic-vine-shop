"use client";

import HomeBanner from "@/app/lib/HomeBanner/HomeBanner";
import EmblaCarousel from "./lib/EmblaCarousel/EmblaCarousel";
import HomeBlock from "@/app/lib/HomeBlock/HomeBlock";
import HomeBlockSecond from "@/app/lib/HomeBlockSecond/HomeBlockSecond";
import HomeTextBlock from "@/app/lib/HomeTextBlock/HomeTextBlock";
import { ButtonProductCard } from "././catalog/lib/ProductCard/styles";
import RunningLine from "@/app/lib/RunningLine/RunningLine";
import Link from "next/link";
import Reviews from "@/app/lib/Reviews/Reviews";
import AboutUs from "@/app/lib/AboutUs/AboutUs";
import delivery from ".//../../public/images/delivery.png";
import HomeProductCards from "./lib/HomeProductCards/HomeProductCards";
import {
  DeliveryBlock,
  Img,
  ImgWrapper,
  TitleDelivery,
  WrapperProductCard,
} from "./styles";
import cmsAxios from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
import HomeBannerSkeleton from "./lib/HomeBanner/HomeBannerSkeleton";
import RunningLineSkeleton from "./lib/RunningLine/RunningLineSkeleton";
import EmblaCarouselSkeleton from "./lib/EmblaCarousel/EmblaCarouselSkeleton";
import HomeBlockSkeleton from "./lib/HomeBlock/HomeBlockSkeleton";
import HomeBlockSecondSkeleton from "./lib/HomeBlockSecond/HomeBlockSecondSkeleton";
import HomeTextBlockSkeleton from "./lib/HomeTextBlock/HomeTextBlockSkeleton";
import HomeProductCardsSkeleton from "./lib/HomeProductCards/HomeProductCardsSkeleton";

export default function Home() {
  const { isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const result = await cmsAxios.get("/api/products?populate=*");

      return result.data;
    },
  });
  if (isLoading)
    return (
      <div>
        <HomeBannerSkeleton hesLink />
        <RunningLineSkeleton />
        <EmblaCarouselSkeleton />
        <HomeBlockSkeleton />
        <HomeBlockSecondSkeleton />
        <HomeTextBlockSkeleton />
        <HomeProductCardsSkeleton />
      </div>
    ); // Обработка загрузки
  return (
    <div>
      <HomeBanner />
      <RunningLine />
      <EmblaCarousel />
      <HomeBlock />
      <HomeBlockSecond />
      <HomeTextBlock
        text={
          "Каждая корзинка изготавливается вручную мастером, который делает акцент на высоком качестве и уникальности каждого изделия."
        }
        textSecond={
          "Используется только экологически чистые материалы, чтобы вы могли наслаждаться красотой и безопасностью изделий из бумажной лозы."
        }
      />
      <HomeProductCards />
      <WrapperProductCard>
        <Link href="/catalog">
          <ButtonProductCard>Посмотреть весь каталог</ButtonProductCard>
        </Link>
      </WrapperProductCard>
      <AboutUs />
      <DeliveryBlock>
        <TitleDelivery id="delivery">Доставка и оплата</TitleDelivery>
        <ImgWrapper>
          <Img src={delivery.src} />
        </ImgWrapper>
      </DeliveryBlock>
      <Reviews id="reviews" />
    </div>
  );
}
