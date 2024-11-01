"use client";

import styled from "styled-components";
import HomeBanner from "@/app/lib/HomeBanner/HomeBanner";
import EmblaCarousel from "./lib/EmblaCarousel/EmblaCarousel";
import HomeBlock from "@/app/lib/HomeBlock/HomeBlock";
import HomeBlockSecond from "@/components/HomeBlockSecond/HomeBlockSecond";
import HomeTextBlock from "@/components/HomeTextBlock/HomeTextBlock";
import { ButtonProductCard } from "@/components/ProductCard/ProductCard";
import { layout } from "@/constants/layout";
import RunningLine from "@/components/RunningLine/RunningLine";
import { media } from "@/constants/media";
import Link from "next/link";
import Reviews from "@/components/Reviews/Reviews";
import AboutUs from "@/app/lib/AboutUs/AboutUs";
import delivery from ".//../../public/images/delivery.png";
import HomeProductCards from "./lib/HomeProductCards/HomeProductCards";

const WrapperProductCard = styled.div`
  display: flex;
  justify-content: space-around;

  ${layout}

  ${media.tablet} {
    width: auto;
    align-items: center;
  }

  ${media.phone} {
    flex-direction: column;
    width: auto;
    align-items: center;
  }
`;

const WrapperProductCardColumn = styled.div`
  width: 25%;

  ${media.tablet} {
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    align-items: center;
  }
  ${media.phone} {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }
`;

const Img = styled.img`
  width: 980px;
`;

const DeliveryBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;

  ${layout}
`;
const TitleDelivery = styled.div`
  font-size: 40px;
  margin-bottom: 100px;

  ${media.phone} {
    font-size: 24px;
  }
`;

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
          "Каждая корзинка изготавливается вручную мастерами, которые делают акцентна высоком качестве и уникальности каждого изделия."
        }
        textSecond={
          "Мы используем только экологически чистые материалы, чтобы вы могли наслаждаться красотой и безопасностью наших продуктов. "
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
