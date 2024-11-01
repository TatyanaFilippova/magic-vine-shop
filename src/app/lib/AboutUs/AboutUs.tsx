import iconCheck from "./assets/iconCheck.svg";
import iconStar from "./assets/iconStar.svg";
import iconPhoto from "./assets/iconPhoto.svg";
import banner from "./assets/banner.png";
import {
  Div,
  DivItemText,
  DivText,
  DivTitle,
  Img,
  Imgicon,
  Title,
  Wrapper,
  WrapperBlock,
  WrapperFlex,
} from "./styles";

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

const AboutUs = () => {
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
