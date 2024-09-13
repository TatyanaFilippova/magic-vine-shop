import styled from "styled-components";

const Table = () => {
  const data = [
    { parameters: "Материал", name: "Бумажная лоза, пластиковое основание" },
    { parameters: "Срок изготовления", name: "1-2 недели" },
    { parameters: "Доставка", name: "Бесплатно по Сыктывкару" },
    { parameters: "Особенности", name: "Пластиковое основание" },
    { parameters: "Возможные цвета", name: "Все цвета" },
  ];

  const WrapperTable = styled.table`
    width: 790px;
    border-collapse: collapse;
    margin: 40px 0 40px 0;
  `;

  const Td = styled.td`
    padding: 10px;
    border-bottom: 1px solid grey;
  `;

  const Td2 = styled.td`
    padding: 10px;
    border-bottom: 1px solid grey;
    text-align: right;
  `;
  return (
    <WrapperTable>
      <tbody>
        {data.map((person) => (
          <tr key={person.parameters}>
            <Td>{person.parameters}</Td>
            <Td2>{person.name}</Td2>
          </tr>
        ))}
      </tbody>
    </WrapperTable>
  );
};

export default Table;
