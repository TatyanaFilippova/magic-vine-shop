"use client"

import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import Header from "@/components/Header/Header";
import HomeBanner from "@/components/HomeBanner/HomeBanner";



export default function Home() {
  return (
    <div>
      <Header/>
       <HomeBanner/>
  
    </div>
  );
}
