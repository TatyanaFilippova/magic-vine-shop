import { media } from "@/constants/media";
import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Button = styled.button`
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

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputStyled = styled.input`
  border: 1px solid black;
  margin-bottom: 20px;
  margin-top: 5px;
  width: 300px;
  height: 30px;
  border-radius: 8px;
  padding-left: 10px;
  background-color: white;
`;

const Input = styled.textarea`
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

const Title = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
`;

const Text = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

const ButtonStyled = styled.div`
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

const Wrapper = styled.div`
  background-color: #fdfaf2;
  padding: 30px;
`;

interface ModalQuestionSuccessProps {
  closeModal: () => void;
}

const ModalQuestionSuccess = ({ closeModal }: ModalQuestionSuccessProps) => {
  return (
    <>
      <Wrapper>
        <Title>Вопрос отправлен</Title>
        <Text>Спасибо за вопрос!</Text>
        <Text>Мы обязательно свяжемся с Вами</Text>

        <Div>
          <ButtonStyled onClick={closeModal}>Закрыть</ButtonStyled>
        </Div>
      </Wrapper>
    </>
  );
};

export default ModalQuestionSuccess;
