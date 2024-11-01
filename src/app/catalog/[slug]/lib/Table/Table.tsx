import { FC } from "react";
import { Td, Td2, WrapperTable } from "./styles";

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
