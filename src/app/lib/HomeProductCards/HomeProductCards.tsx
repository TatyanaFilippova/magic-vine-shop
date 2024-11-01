import useHomeCards from "@/api/getHomeCards";
import ProductCard from "@/components/ProductCard/ProductCard";
import { WrapperProductCard, WrapperProductCardColumn } from "./styles";

const HomeProductCards = () => {
  const { data } = useHomeCards();

  if (!data) {
    return null;
  }

  return (
    <WrapperProductCard>
      {data.map((item) => {
        return (
          <WrapperProductCardColumn key={item.title}>
            <ProductCard
              imgCard={item.imgUrl}
              title={item.title}
              description={item.description ?? ""}
            />
          </WrapperProductCardColumn>
        );
      })}
    </WrapperProductCard>
  );
};

export default HomeProductCards;
