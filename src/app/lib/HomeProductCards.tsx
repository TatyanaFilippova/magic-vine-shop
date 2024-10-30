import useHomeCards from "@/api/getHomeCards";
import styled from "styled-components";

import { media } from "@/constants/media";
import ProductCard from "@/components/ProductCard/ProductCard";
import { layout } from "@/constants/layout";

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
  width: 30%;

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
              link={item.link}
              description={item.description ?? ""}
            />
          </WrapperProductCardColumn>
        );
      })}
    </WrapperProductCard>
  );
};

export default HomeProductCards;
