import useHomeCards from "@/api/getHomeCards";
import { WrapperProductCard, WrapperProductCardColumn } from "./styles";
import ProductCardSkeleton from "@/app/catalog/lib/ProductCard/ProductCardSkeleton";

const HomeProductCardsSkeleton = () => {
  const data = Array.from({ length: 3 });
  return (
    <WrapperProductCard>
      {data.map((item, key) => {
        return (
          <WrapperProductCardColumn key={key}>
            <ProductCardSkeleton />
          </WrapperProductCardColumn>
        );
      })}
    </WrapperProductCard>
  );
};

export default HomeProductCardsSkeleton;
