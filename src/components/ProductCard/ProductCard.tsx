import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "@/constants/media";
import Link from "next/link";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 100%;

    ${media.phone} {
      flex-direction: column;
    }
  }
`;

const ImgCard = styled.img`
  width: 100%;
  height: 327px;
  object-fit: cover;

  ${media.tablet} {
    height: 250px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.phone} {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  text-align: center;
  height: 80px;

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.phone} {
    font-size: 15px;
    height: 20px;
    margin-bottom: 10px;
  }
`;

export const ButtonProductCard = styled.button`
  background: #526468;
  font-size: 20px;
  width: 300px;
  color: white;
  align-items: center;
  margin-bottom: 50px;
  height: 60px;
  margin-top: 50px;

  ${media.phone} {
    font-size: 15px;
    width: 250px;
    margin-bottom: 40px;
    margin-top: 0px;
  }
`;

export const WrapperButtonProductCard = styled.div`
  display: flex;
  justify-content: center;
`;

interface ProductCardProps {
  imgCard: string;
  title: string;
  description: string;
  link?: string;
}

const Button = styled.button`
  background-color: #526468;
  color: white;
  width: 100%;
  height: 40px;
  font-size: 20px;
  margin-top: 20px;
`;

const ProductCard: FC<ProductCardProps> = ({
  imgCard,
  title,
  description,
  link,
}) => {
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
      {link && (
        <Link href={link}>
          <Button>Подробнее</Button>
        </Link>
      )}
    </Card>
  );
};

export default ProductCard;
