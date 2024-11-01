import imgHomeBlock from "./assets/imgHomeBlock.png";
import { Fade } from "react-awesome-reveal";
import { Img, Text, Wrapper, WrapperText } from "./styles";

const HomeBlock = () => {
  return (
    <Wrapper>
      <WrapperText>
        <Fade delay={900}>
          <Text>
            Откройте для себя прекрасные плетеные корзинки из бумажной лозы!
          </Text>
        </Fade>
        <Fade delay={1000}>
          <Text>Это идеальное сочетание стиля и практичности.</Text>
        </Fade>
      </WrapperText>

      <Img src={imgHomeBlock.src}></Img>
    </Wrapper>
  );
};

export default HomeBlock;
