import styled from "styled-components";
import { useState } from "react";

const ButtonPresenceStyled = styled.button<{ isBlue: boolean }>`
  font-size: 18px;
  margin-top: 10px;
  text-align: left;
  border: 2px solid #869286;
  border-radius: 8px;
  height: 40px;
  padding-left: 5px;
  background-color: ${(props) => (props.isBlue ? "#869286" : "transparent")};
`;

const ButtonPresence = () => {
  const [isBlue, setIsBlue] = useState(false);
  const toggleBackground = () => {
    setIsBlue(!isBlue);
  };
  return (
    <ButtonPresenceStyled isBlue={isBlue} onClick={toggleBackground}>
      Есть в наличии
    </ButtonPresenceStyled>
  );
};

export default ButtonPresence;
