"use client";

import styled from "styled-components";
import Header from "@/components/Header/Header";
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
import { motion } from "framer-motion";

const WrapperProductCard = styled.div`
  display: flex;
  justify-content: space-around;

  padding-top: 20px;

  ${layout}
`;

export default function Home() {
  return (
    <div>
      <Header />

      <HomeBanner />
      <RunningLine />
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
      <WrapperProductCard>
        <motion.button
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <ButtonProductCard>Посмотреть весь каталог</ButtonProductCard>
        </motion.button>
      </WrapperProductCard>
    </div>
  );
}
