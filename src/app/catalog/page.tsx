import { Metadata } from "next";
import CatalogPage from "./lib";
import {Suspense} from "react";

export const metadata: Metadata = {
  title: "Каталог изделий из бумажной лозы ручной работы",
};

const CatalogCardProduct = () => {
  return <Suspense fallback={'loading...'}><CatalogPage /></Suspense>;
};

export default CatalogCardProduct;
