import imgForm from "./assets/imgForm.png";
import imgForm2 from "./assets/imgForm2.png";
import {
  Div,
  FieldWrapperSuccess,
  Img1,
  Img2,
  TitleSuccess,
  Wrapper,
  Text,
  DivImg,
} from "./styles";

const OrderFormSuccess = () => {
  return (
    <>
      <Wrapper>
        <DivImg>
          <Img1 src={imgForm.src} />
          <Img2 src={imgForm2.src} />
        </DivImg>
        <FieldWrapperSuccess>
          <TitleSuccess>Спасибо за ваш заказ! </TitleSuccess>
          <Text>
            В кратчайшие сроки мы свяжемся с вами, чтобы обсудить все детали.
            <div>Ожидайте нашего звонка или сообщения.</div>
          </Text>
        </FieldWrapperSuccess>
      </Wrapper>
      ;
    </>
  );
};

export default OrderFormSuccess;
