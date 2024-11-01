import { media } from "@/constants/media";
import styled from "styled-components";

export const Button = styled.button`
  width: 274px;
  height: 44px;
  font-size: 18px;
  background-color: #526468;
  color: white;

  ${media.tablet} {
    width: 240px;
  }
  ${media.phone} {
    width: 100%;
    align-items: center;
    margin-top: 0;
    padding: 10px;
    font-size: 16px;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;




export const InputStyled = styled.input`
  border: 1px solid black;
  margin-bottom: 20px;
  margin-top: 5px;
  width: 300px;
  height: 30px;
  border-radius: 8px;
  padding-left: 10px;
  background-color: white;
`;

export const Input = styled.textarea`
  border: 1px solid black;
  margin-bottom: 20px;
  margin-top: 5px;
  width: 300px;
  height: 100px;
  border-radius: 8px;
  padding-left: 10px;
  background-color: white;
  padding-top: 10px;

  &:focus-visible {
    outline: none;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
`;


export const TextSuccess = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

export const Text = styled.div`
  font-size: 16px;
`;

export const ButtonStyled = styled.div`
  background-color: #bcc0b4;
  border-radius: 8px;
  height: 40px;
  font-size: 16px;
  width: auto;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

export const ButtonStyledSuccess = styled.div`
  background-color: #bcc0b4;
  border-radius: 8px;
  height: 40px;
  font-size: 16px;
  width: auto;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  background-color: #fdfaf2;
  padding: 30px;
`;


