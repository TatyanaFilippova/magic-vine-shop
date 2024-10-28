import styled from "styled-components";
import imgForm from "./imgForm.png";
import imgForm2 from "./imgForm2.png";
import { media } from "@/constants/media";
import { layout } from "@/constants/layout";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 100px;
  background-color: #bcc0b4;
  text-align: center;

  ${media.phone} {
    ${layout}
  }
`;

const Div = styled.div`
  height: 486px;
  position: relative;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.phone} {
    width: auto;
  }
`;

const Img2 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
  margin-bottom: 10px;

  ${media.phone} {
    display: none;
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 40px;

  ${media.phone} {
    padding-right: 0px;
  }
`;

const Img1 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
  margin-top: 10px;

  ${media.phone} {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 36px;
  text-align: center;
  padding-top: 160px;

  ${media.phone} {
    font-size: 30px;
  }
`;

const Text = styled.div`
  font-size: 20px;
  margin-top: 20px;
  padding-bottom: 10px;

  ${media.phone} {
    font-size: 16px;
  }
`;

const OrderFormSuccess = () => {
  return (
    <>
      <Wrapper>
        <Div>
          <Img1 src={imgForm.src} />
          <Img2 src={imgForm2.src} />
        </Div>
        <FieldWrapper>
          <Title>Спасибо за ваш заказ! </Title>
          <Text>
            В кратчайшие сроки мы свяжемся с вами, чтобы обсудить все детали.
            <div>Ожидайте нашего звонка или сообщения.</div>
          </Text>
        </FieldWrapper>
      </Wrapper>
      ;
    </>
  );
};

export default OrderFormSuccess;
