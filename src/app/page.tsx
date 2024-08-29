"use client";

import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import Header from "@/components/Header/Header";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import { EmblaCarousel } from "./lib/emblaCarousel/emblaCarousel";
import HomeBlock from "@/components/HomeBlock/HomeBlock";
import HomeBlockSecond from "@/components/HomeBlockSecond/HomeBlockSecond";
import HomeTextBlock from "@/components/HomeTextBlock/HomeTextBlock";
import ProductCard from "@/components/ProductCard/ProductCard";
import basketWithLid from "../images/basketWithLid.png";
import wickerPouf from "../images/wickerPouf.png";
import { layout } from "@/constants/layout";
import WickerBasketForTheKitchen from "../images/WickerBasketForTheKitchen.png";

const WrapperProductCard = styled.div`
  display: flex;
  justify-content: space-around;

  ${layout}
`;

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <EmblaCarousel />
      <HomeBlock />
      <HomeBlockSecond />
      <HomeTextBlock />
      <WrapperProductCard>
        <ProductCard
          imgCard={basketWithLid.src}
          title={"Плетеная корзинка с крышкой"}
          description={"Размеры: 18 см * 28 см, высота - 9 см"}
        />
        <ProductCard
          imgCard={wickerPouf.src}
          title={"Плетеный пуф"}
          description={
            "Размеры: диаметр - 36см, высота ножек - 23 см, высота пуфа - 40см"
          }
        />
        <ProductCard
          imgCard={WickerBasketForTheKitchen.src}
          title={"Плетеная корзинка для кухни"}
          description={"Размеры: 14 см * 20 см, высота - 9 см"}
        />
      </WrapperProductCard>
    </div>
  );
}
