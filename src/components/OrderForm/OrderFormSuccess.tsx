import styled from "styled-components";
import imgForm from './imgForm.png'
import imgForm2 from './imgForm2.png'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 100px;
  background-color: #bcc0b4;
  text-align: center;
`;

const Div = styled.div`
  height: 486px;
  position: relative;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img2 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
  margin-bottom: 10px;
`;

const FieldWrapper = styled.div`
  width: 630px;
`;

const Img1 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
`;

const Title = styled.div`
  font-size: 36px;
  text-align: center;
  padding-top: 36px;
`;

const OrderFormSuccess = () => {
  return (
    <>
      <Wrapper>
        <Div>
          <Img1 src={imgForm.src} />
          <Img2 src={imgForm2.src} />
        </Div>
      </Wrapper>
      ;
    </>
  );
};

export default OrderFormSuccess;
