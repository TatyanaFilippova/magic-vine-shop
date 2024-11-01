import React from "react";

import {
  Wrapper,
  Title,
  TextSuccess,
  Div,
  ButtonStyledSuccess,
} from "./styles";

interface ModalQuestionSuccessProps {
  closeModal: () => void;
}

const ModalQuestionSuccess = ({ closeModal }: ModalQuestionSuccessProps) => {
  return (
    <>
      <Wrapper>
        <Title>Вопрос отправлен</Title>
        <TextSuccess>Спасибо за вопрос!</TextSuccess>
        <TextSuccess>Мы обязательно свяжемся с Вами</TextSuccess>

        <Div>
          <ButtonStyledSuccess onClick={closeModal}>
            Закрыть
          </ButtonStyledSuccess>
        </Div>
      </Wrapper>
    </>
  );
};

export default ModalQuestionSuccess;
