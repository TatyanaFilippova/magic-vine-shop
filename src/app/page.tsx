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
  TitleDelivery,
  WrapperProductCard,
} from "./styles";

export default function Home() {
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
          "Используется только экологически чистые материалы, чтобы вы могли наслаждаться красотой и безопасностью продуктов из бумажной лозы."
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
        <Img src={delivery.src} />
      </DeliveryBlock>
      <Reviews id="reviews" />
    </div>
  );
}
