import styled from "styled-components";
import close from "./close.png";
import { FC } from "react";

const ImgCloseStyled = styled.img`
  width: 20px;
  margin-left: 14px;
`;

interface ImgCloseProps {
  onClick: () => void;
}

const ImgClose: FC<ImgCloseProps> = ({ onClick }) => {
  return <ImgCloseStyled src={close.src} onClick={onClick} />;
};

export default ImgClose;
