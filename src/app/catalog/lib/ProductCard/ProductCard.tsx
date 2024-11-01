import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {Button,Card,Description,ImgCard,Title} from "./styles"

interface ProductCardProps {
  imgCard: string;
  title: string;
  description: string;
  link?: string;
}

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
