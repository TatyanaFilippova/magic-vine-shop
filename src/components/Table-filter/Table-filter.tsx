import { layout } from "@/constants/layout";
import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-left: 20px;
  border: 0.1rem solid pink;
  padding-right: 60px;
  height: 30px;
`;

const DivInput = styled.div`
  display: flex;
  align-items: center;
`;

const Table = styled.table`
  width: 80%;
  text-align: center;
  border: 0.2rem outset pink;
  padding-top: 0.5rem;
  border-spacing: 0;
  margin-top: 30px;
`;

const Thead = styled.td`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5rem;
`;

const Td = styled.td`
  border-top: 0.2rem outset pink;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${layout}
`;

const TableFilter = () => {
  const list = [
    { id: 1, title: "Корзинка круглая", category: "для кухни", price: "1500" },
    {
      id: 2,
      title: "Корзинка квадратная",
      category: "для мелочей",
      price: "2500",
    },
    {
      id: 3,
      title: "Корзинка-органайзер",
      category: "для ванной комнаты",
      price: "2200",
    },
    {
      id: 4,
      title: "Сервировочная салфетка",
      category: "для кухни",
      price: "1000",
    },
    {
      id: 5,
      title: "Корзина для белья",
      category: "для ванной комнаты",
      price: "3000",
    },
    { id: 6, title: "Плетеный пуфик", category: "мебель", price: "7000" },
    { id: 7, title: "Хлебница", category: "для кухни", price: "4200" },
    { id: 8, title: "Плетеный сундук", category: "мебель", price: "6300" },
  ];

  const [value, setValue] = useState("");
  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );

  const renderedList = value ? filteredList : list;

  const listTable = renderedList.map((item) => (
    <tr key={item.id}>
      <Td>{item.title}</Td>
      <Td>{item.category}</Td>
      <Td>{item.price}</Td>
    </tr>
  ));

  return (
    <Wrapper>
      <DivInput>
        Поиск товара:{" "}
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </DivInput>
      <Table>
        <thead>
          <tr>
            <Thead>Название</Thead>
            <Thead>Категория</Thead>
            <Thead>Стоимость/ руб</Thead>
          </tr>
        </thead>
        <tbody> {listTable}</tbody>
      </Table>
    </Wrapper>
  );
};
export default TableFilter;
