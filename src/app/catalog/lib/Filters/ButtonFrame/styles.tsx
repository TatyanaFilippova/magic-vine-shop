import { media } from "@/constants/media";
import styled from "styled-components";
import ImgClose from "../ImgClose/ImgClose";

export const ButtonFrameStyled = styled.button<{ active: boolean }>`
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
  ${media.phone} {
    font-size: 16px;
  }
`;

export const ImgCloseStyled = styled(ImgClose)`
  margin-left: 10px;
`;
