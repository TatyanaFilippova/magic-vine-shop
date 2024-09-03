import styled from "styled-components";
import imgHomeBlockSecond from "./imgHomeBlockSecond.png";
import { Fade } from "react-awesome-reveal";
import { media } from "@/constants/media";
import { layout } from "@/constants/layout";

const Wrapper = styled.div`
  display: flex;
  margin: -300px 40px 140px 0;
  align-items: center;
  justify-content: space-between;
  ${layout};

  ${media.tablet} {
    text-align: center;
    margin: 0 0px 70px 0;
  }

  ${media.phone} {
    flex-direction: column;
    margin: 0 0 40px 0px;
  }
`;
const Text = styled.div`
  font-size: 30px;
  padding-left: 30px;
  padding-top: 30px;

  ${media.tablet} {
    font-size: 20px;
    padding-left: 0;
  }

  ${media.phone} {
    font-size: 15px;
    width: auto;
  }
`;

const Img = styled.img`
  width: 55%;
  object-fit: cover;

  ${media.tablet} {
    width: 50%;
  }

  ${media.phone} {
    width: 100%;
  }
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20%;
`;

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
