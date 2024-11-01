import React, { useState } from "react";
import Modal from "react-modal";

import ModalQuestionSuccess from "./ModalQuestionSuccess";
import {
  Button,
  ButtonStyled,
  Div,
  Input,
  InputStyled,
  Text,
  Title,
  Wrapper,
} from "./styles";

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

Modal.setAppElement("#modal");
const ModalQuestion = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const submit = async () => {
    // await cmsAxios.post("/api/orders", {
    //   data: {
    //    number: number,
    //    name: name,
    //    email: email,
    //   product: product?.id,
    //  },
    //});
    setSuccess(true);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSuccess(false);
  }

  return (
    <>
      <Button onClick={openModal}>Задать нам вопрос</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!isSuccess ? (
          <Wrapper>
            <Title>Задать вопрос</Title>
            <form>
              <Text>Ваше имя:</Text>
              <InputStyled />
            </form>
            <form>
              <Text>Электронная почта @email:</Text>
              <InputStyled />
            </form>
            <form>
              <Text>Ваш вопрос:</Text>
              <Input />
            </form>
            <Div>
              <ButtonStyled onClick={() => submit()}>
                Задать вопрос
              </ButtonStyled>
              <ButtonStyled onClick={closeModal}>Закрыть</ButtonStyled>
            </Div>
          </Wrapper>
        ) : (
          <ModalQuestionSuccess closeModal={closeModal} />
        )}
      </Modal>
    </>
  );
};

export default ModalQuestion;
