import styled from "styled-components";
import fon from "./backgroundImage.png";
import iconCheck from "./iconCheck.svg";
import iconStar from "./iconStar.svg";
import iconPhoto from "./iconPhoto.svg";
import banner from "./banner.png";
import { layout } from "@/constants/layout";
import { media } from "@/constants/media";

const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("${fon.src}");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 60px;
  margin-top: 80px;

  ${media.tablet} {
    padding-bottom: 20px;
  }

  ${media.phone} {
    padding-bottom: 60px;
  }
`;

const WrapperBlock = styled.div``;

const WrapperFlex = styled.div`
  display: flex;

  ${layout}
`;

const Title = styled.div`
  font-size: 40px;
  margin-top: 16px;

  ${media.tablet} {
    font-size: 36px;
  }

  ${media.phone} {
    font-size: 24px;
  }
`;

const DivTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 10px;

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.phone} {
    font-size: 20px;
    width: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  margin-top: 90px;

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.phone} {
    margin-top: 50px;
  }
`;

const DivText = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  width: 70%;
`;

const DivItemText = styled.div`
  font-size: 20px;

  ${media.tablet} {
    font-size: 16px;
  }

  ${media.phone} {
    font-size: 16px;
  }
`;

const Imgicon = styled.img`
  ${media.tablet} {
    width: 60px;
  }

  ${media.phone} {
    width: 70px;
  }
`;

const Img = styled.img`
  height: 700px;

  ${media.tablet} {
    display: none;
  }

  ${media.phone} {
    display: none;
  }
`;

const AboutUs = () => {
  const list = [
    {
      icon: iconCheck.src,
      title: "Экологичность материалов",
      text: "Бумага скручивается во множество трубочек, которые  окрашиваются водными морилками и обрабатываются лаками исключительно на акриловой основе (без добавок)",
    },
    {
      icon: iconPhoto.src,
      title: "Фотоотчет",
      text: "Вы можете заказать любой товар из каталога, изменив его размеры и цвет! Чтобы вы были спокойны за свой заказ, перед доставкой мы отправляем фотоотчет на согласование",
    },
    {
      icon: iconStar.src,
      title: "Гарантия качества",
      text: "На каждый товар действует гарантия качества 2 недели с момента доставки",
    },
  ];
  return (
    <Wrapper>
      <Title id="about-us">О нас</Title>
      <WrapperFlex>
        <WrapperBlock>
          {list.map((item) => {
            return (
              <Div key={item.icon}>
                <Imgicon src={item.icon} />
                <DivText>
                  <DivTitle>{item.title}</DivTitle>
                  <DivItemText>{item.text}</DivItemText>
                </DivText>
              </Div>
            );
          })}
        </WrapperBlock>
        <Img src={banner.src} />
      </WrapperFlex>
    </Wrapper>
  );
};

export default AboutUs;
