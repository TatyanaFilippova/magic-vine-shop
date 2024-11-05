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
    icon: iconStar.src,
    title: "Безопасность и качество",
    text: "На финишном этапе изделия обрабатываются лаком, который рекомендуют использовать для покрытия детской мебели и предметов, контактирующих с пищей. Благодаря всем этим манипуляциям в процессе обработки, изделия из бумажной лозы безопасны и обещают прослужить вам очень долгое время.",
  },
  {
    icon: iconPhoto.src,
    title: "Фотоотчет",
    text: "Вы можете заказать любой товар из каталога, изменив его размеры и цвет! Чтобы вы были спокойны за свой заказ, перед доставкой мы отправляем фотоотчет на согласование",
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
