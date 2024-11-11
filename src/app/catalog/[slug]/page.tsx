import { Metadata, ResolvingMetadata } from "next";
import ProductDetail from "./lib";
import cmsAxios from "@/configs/axios";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const result = await cmsAxios.get(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );

  return {
    title: result.data?.data?.[0]?.title,
  };
}

const Goods = () => {
  return <ProductDetail />;
};

export default Goods;
