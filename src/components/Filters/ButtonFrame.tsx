import styled from "styled-components";
import { useState } from "react";
import ImgClose from "./ImgClose";
import { title } from "process";

const ButtonFrameStyled = styled.button<{ active: boolean }>`
  font-size: 18px;
  margin-top: 10px;

  align-items: center;
  border: 2px solid #869286;
  border-radius: 8px;
  height: 40px;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#869286" : "transparent")};
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.active ? "white" : "black")};
`;

const ButtonFrame = ({ title }: { title: string }) => {
  const [active, setActive] = useState(false);

  return (
    <ButtonFrameStyled
      active={active}
      onClick={() => {
        if (!active) setActive(true);
      }}
    >
      {title}
      {active && (
        <ImgClose
          onClick={() => {
            if (active) setActive(false);
          }}
        />
      )}
    </ButtonFrameStyled>
  );
};

export default ButtonFrame;
