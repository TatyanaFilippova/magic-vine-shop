import Link from "next/link";
import { Button, Description, Title, Wrapper } from "./styles";

const HomeBanner = () => {
  return (
    <Wrapper>
      <Title>Магия из бумажной лозы</Title>
      <Description>
        Создайте атмосферу уюта с помощью наших плетеных <br /> корзинок из
        бумажной лозы!
      </Description>
      <Link href="/catalog">
        <Button>Перейти в каталог</Button>
      </Link>
    </Wrapper>
  );
};

export default HomeBanner;
