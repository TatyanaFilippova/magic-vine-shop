import styled from "styled-components";
import ButtonFrame from "./ButtonFrame";
import { media } from "@/constants/media";
import Dropdown from "./SelectedOption";
import Checkbox from "./Checkbox";
import { title } from "process";
import CheckboxComponent from "./Checkbox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.phone} {
    display: none;
  }
`;
const Title = styled.div`
  font-size: 24px;
`;

const WrapperParameters = styled.div`
  ${media.phone} {
    display: none;
  }
`;

const Parameters = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const parameters = [
  {
    title: "Деревянный каркас",
    value: "11",
  },
  { title: "Есть в наличии", value: "12" },
];

const type = [
  {
    title: "Круглая корзинка",
    value: "1",
  },
  { title: "Квадратная корзинка", value: "2" },
  { title: "Мебель", value: "3" },
  { title: "Для кухни", value: "4" },
];

const Filters = () => {
  return (
    <div>
      <Wrapper>
        <Title>Фильтры</Title>
      </Wrapper>
      <WrapperParameters>
        <Parameters>Параметры</Parameters>
        {parameters.map((item) => {
          return (
            <ButtonFrame
              value={item.value}
              title={item.title}
              key={item.value}
            />
          );
        })}

        <Parameters>Типы</Parameters>
      </WrapperParameters>
      {type.map((item) => {
        return (
          <ButtonFrame value={item.value} title={item.title} key={item.value} />
        );
      })}
      <Parameters>Срок изготовления</Parameters>
      <Dropdown />
      <Parameters>Цена изделия</Parameters>
      <CheckboxComponent />
    </div>
  );
};

export default Filters;
