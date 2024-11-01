import imgHomeBlockSecond from "./assets/imgHomeBlockSecond.png";
import { Fade } from "react-awesome-reveal";
import { Img, Text, Wrapper, WrapperText } from "./styles";

const HomeBlockSecond = () => {
  return (
    <Wrapper>
      <Img src={imgHomeBlockSecond.src}></Img>

      <WrapperText>
        <Fade delay={900}>
          <Text>
            Эко-дружественные и легкие, наши корзинки не только украсят ваш
            интерьер, но и помогут организовать пространство.
          </Text>
        </Fade>
        <Fade delay={1000}>
          <Text>
            Плетение из бумаги – это не только искусство, но и забота о природе!
          </Text>
        </Fade>
      </WrapperText>
    </Wrapper>
  );
};

export default HomeBlockSecond;
