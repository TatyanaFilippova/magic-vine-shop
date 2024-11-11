import { Metadata } from "next";
import CatalogPage from "./lib";

export const metadata: Metadata = {
  title: "Каталог изделий из бумажной лозы ручной работы",
};

const CatalogCardProduct = () => {
  return <CatalogPage />;
};

export default CatalogCardProduct;
