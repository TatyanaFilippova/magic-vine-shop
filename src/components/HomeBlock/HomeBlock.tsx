import styled from "styled-components";
import imgHomeBlock from "./imgHomeBlock.png";
import { Fade } from "react-awesome-reveal";
import { media } from "@/constants/media";
import { layout } from "@/constants/layout";

const Wrapper = styled.div`
  display: flex;
  margin: 0 0 140px 40px;
  align-items: center;
  justify-content: space-between;
  ${layout};

  ${media.tablet} {
    text-align: center;
    margin: 0 0 70px 0;
  }

  ${media.phone} {
    margin: 0 0 40px 0px;
    flex-direction: column;
  }
`;

const Text = styled.div`
  font-size: 30px;

  padding-top: 30px;

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.phone} {
    font-size: 15px;
    width: auto;
  }
`;

const Img = styled.img`
  width: 50%;
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
  padding-bottom: 20%;
`;

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
