import { layout } from "@/constants/layout";
import styled from "styled-components";
import { media } from "@/constants/media";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 0 40px;

  ${media.phone} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  align-items: center;
`;

const Button = styled.button`
  width: 274px;
  height: 44px;
  font-size: 18px;
  background-color: #526468;
  color: white;

  ${media.tablet} {
    width: 240px;
  }
  ${media.phone} {
    width: 100%;
    align-items: center;
    margin-top: 0;
    padding: 10px;
    font-size: 16px;
  }
`;
const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;

  ${media.tablet} {
    width: 60%;
    text-align: center;
    padding: 10px;
  }

  ${media.phone} {
    display: none;
  }
`;

const DescriptionBlock = () => {
  return (
    <Wrapper>
      <WrapperTitle>
        <Title>Фотогаллерея</Title>
        <Title>Особенности</Title>
        <Title>Форма заказа</Title>
      </WrapperTitle>
      <Button>Задать нам вопрос</Button>
    </Wrapper>
  );
};

export default DescriptionBlock;
