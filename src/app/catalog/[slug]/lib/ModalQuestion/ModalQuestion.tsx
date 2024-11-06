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
import { useParams } from "next/navigation";
import useProductDetailApi from "@/api/getProductDetail";
import cmsAxios from "@/configs/axios";

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
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const params = useParams<{ slug: string }>();
  const { data } = useProductDetailApi(params.slug);
  const submit = async () => {
    await cmsAxios.post("/api/questions", {
      data: {
        question: question,
        name: name,
        email: email,
        product: data?.id?.toString(),
      },
    });
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
              <InputStyled onChange={(e) => setName(e.target.value)} />
            </form>
            <form>
              <Text>Электронная почта @email:</Text>
              <InputStyled onChange={(e) => setEmail(e.target.value)} />
            </form>
            <form>
              <Text>Ваш вопрос:</Text>
              <Input onChange={(e) => setQuestion(e.target.value)} />
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
