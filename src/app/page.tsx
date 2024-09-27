"use client";

import styled from "styled-components";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import { EmblaCarousel } from "./lib/emblaCarousel/emblaCarousel";
import HomeBlock from "@/components/HomeBlock/HomeBlock";
import HomeBlockSecond from "@/components/HomeBlockSecond/HomeBlockSecond";
import HomeTextBlock from "@/components/HomeTextBlock/HomeTextBlock";
import ProductCard, {
  ButtonProductCard,
} from "@/components/ProductCard/ProductCard";
import basketWithLid from "../images/basketWithLid.png";
import wickerPouf from "../images/wickerPouf.png";
import { layout } from "@/constants/layout";
import WickerBasketForTheKitchen from "../images/WickerBasketForTheKitchen.png";
import RunningLine from "@/components/RunningLine/RunningLine";
import { media } from "@/constants/media";
import Link from "next/link";

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

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <RunningLine />
      <EmblaCarousel />
      <HomeBlock />
      <HomeBlockSecond />
      <HomeTextBlock />
      <WrapperProductCard>
        <WrapperProductCardColumn>
          <ProductCard
            imgCard={basketWithLid.src}
            title={"Плетеная корзинка с крышкой"}
            description={"Размеры: 18 см * 28 см, высота - 9 см"}
          />
        </WrapperProductCardColumn>
        <WrapperProductCardColumn>
          <ProductCard
            imgCard={wickerPouf.src}
            title={"Плетеный пуф"}
            description={
              "Размеры: диаметр - 36см, высота ножек - 23 см, высота пуфа - 40см"
            }
          />
        </WrapperProductCardColumn>
        <WrapperProductCardColumn>
          <ProductCard
            imgCard={WickerBasketForTheKitchen.src}
            title={"Плетеная корзинка для кухни"}
            description={"Размеры: 14 см * 20 см, высота - 9 см"}
          />
        </WrapperProductCardColumn>
      </WrapperProductCard>
      <WrapperProductCard>
        <Link href="/catalog">
          <ButtonProductCard>Посмотреть весь каталог</ButtonProductCard>
        </Link>
      </WrapperProductCard>
    </div>
  );
}
