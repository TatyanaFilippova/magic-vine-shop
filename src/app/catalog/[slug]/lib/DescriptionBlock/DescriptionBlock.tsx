import ModalQuestion from "../ModalQuestion/ModalQuestion";
import { Title, Wrapper, WrapperTitle } from "./styles";

const DescriptionBlock = () => {
  return (
    <Wrapper>
      <WrapperTitle>
        <Title href={"#photo"}>Фотогаллерея</Title>
        <Title href={"#peculiarities"}>Особенности</Title>
        <Title href={"#orderForm"}>Форма заказа</Title>
      </WrapperTitle>

      <ModalQuestion />
    </Wrapper>
  );
};

export default DescriptionBlock;
