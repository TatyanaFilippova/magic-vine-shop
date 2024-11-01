import styled from "styled-components";
import { media } from "@/constants/media";
import { FC } from "react";

const WrapperTable = styled.table`
  width: 790px;
  border-collapse: collapse;
  margin: 40px 0 40px 0;

  ${media.tablet} {
    width: 100%;
  }
  ${media.phone} {
    display: flex;
    width: 100%;
  }
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

interface TableProps {
  material: string;
  time: string;
  delivery: string;
  dimensions: string;
  colors: string;
  id?: string;
}

const Table: FC<TableProps> = ({
  material,
  time,
  delivery,
  dimensions,
  colors,
  id,
}) => {
  const data = [
    { parameters: "Материал", name: material },
    { parameters: "Срок изготовления", name: time },
    { parameters: "Доставка", name: delivery },
    { parameters: "Размеры", name: dimensions },
    { parameters: "Возможные цвета", name: colors },
  ];

  return (
    <WrapperTable id={id}>
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
