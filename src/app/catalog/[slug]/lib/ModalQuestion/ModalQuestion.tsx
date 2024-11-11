import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
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
import { serverAxios } from "@/configs/axios";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const params = useParams<{ slug: string }>();
  const { data } = useProductDetailApi(params.slug);
  const submit = async (data: any) => {
    await serverAxios.post("/add-question", {
      data: {
        question: data.question,
        name: data.name,
        email: data.email,
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
          <Wrapper onSubmit={handleSubmit(submit)}>
            <Title>Задать вопрос</Title>
            <form>
              <Text>Ваше имя:</Text>
              <InputStyled
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-zА-Яа-я ]+$/i,
                })}
              />
              {errors.name?.type === "required" && (
                <p role="alert" style={{ color: "red" }}>
                  Введите ФИО
                </p>
              )}
              {errors.name?.type === "pattern" && (
                <p role="alert" style={{ color: "red" }}>
                  Введите корректное ФИО
                </p>
              )}
            </form>
            <form>
              <Text>Электронная почта @email:</Text>
              <InputStyled
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email?.type === "required" && (
                <p role="alert" style={{ color: "red" }}>
                  Введите вашу почту
                </p>
              )}
            </form>
            <form>
              <Text>Ваш вопрос:</Text>
              <Input
                {...register("question", {
                  required: true,
                })}
              />
              {errors.question?.type === "required" && (
                <p role="alert" style={{ color: "red" }}>
                  Введите ваш вопрос
                </p>
              )}
            </form>
            <Div>
              <ButtonStyled type="submit">Задать вопрос</ButtonStyled>
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
