import { FC } from "react";
import { Button, Card, Description, ImgCard, Title } from "./styles";
import Skeleton from "react-loading-skeleton";

interface ProductCardProps {
  hesLink?: boolean;
}

const ProductCardSkeleton: FC<ProductCardProps> = ({ hesLink }) => {
  return (
    <Card>
      <Skeleton height={250} width="100%" />
      <Title>
        <Skeleton height={24} width="60%" />
      </Title>
      <Description>
        <Skeleton height={22} width="100%" />
        <Skeleton height={22} width="80%" />
      </Description>
      {hesLink && (
        <Skeleton height={40} width="100%" style={{ marginTop: "10px" }} />
      )}
    </Card>
  );
};

export default ProductCardSkeleton;
