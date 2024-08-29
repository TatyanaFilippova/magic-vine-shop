import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

const ImgCard = styled.img`
  width: 100%;
  height: 327px;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 20px;
  text-align: center;
`;

interface ProductCardProps {
  imgCard: string;
  title: string;
  description: string;
}

const ProductCard: FC<ProductCardProps> = ({ imgCard, title, description }) => {
  return (
    <Card>
      <motion.div
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <ImgCard src={imgCard} />
      </motion.div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ProductCard;
