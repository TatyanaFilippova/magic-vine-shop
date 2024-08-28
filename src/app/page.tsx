"use client";

import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import Header from "@/components/Header/Header";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import { EmblaCarousel } from "./lib/emblaCarousel/emblaCarousel";
import HomeBlock from "@/components/HomeBlock/HomeBlock";
import HomeBlockSecond from "@/components/HomeBlockSecond/HomeBlockSecond";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <EmblaCarousel />
      <HomeBlock />
      <HomeBlockSecond />
    </div>
  );
}
