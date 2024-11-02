import styled, { css } from "styled-components";

export const Input = styled.input`
  width: 200px;
  border: 2px solid #869286;
  border-radius: 8px;
  height: 40px;
  padding: 10px;
  cursor: pointer;
`;

export const WrapperUl = styled.ul`
  width: 200px;
  border: 2px solid #869286;
  border-radius: 8px;
`;

export const WrapperLi = styled.li<{ $active?: boolean }>`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #d6dcd6;
  }
  ${(props) =>
    props.$active &&
    css`
      background: #869286;
    `}
`;

export const Button = styled.button`
  position: relative;
`;
export const ButtonClose = styled.button`
  position: absolute;
  right: 10px;
  top: 8px;
`;