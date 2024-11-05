import { media } from "@/constants/media";
import Link from "next/link";
import styled from "styled-components";

export const Button = styled.button`
  display: none;
  ${media.phone} {
    display: block;
    position: fixed;
    left: 20px;
    top: 20px;
    background: #ffffffb2;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

  }
`;

export const TextBurger = styled(Link)`
  font-size: 24px;
  margin-top: 50px;
  color: black;
  margin-left: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 40px;
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Text = styled.div`
  font-size: 24px;
  margin-top: 50px;

  margin-bottom: 10px;
`;

export const ImgIcon = styled.img`
  width: auto;
  height: 90px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
`;
