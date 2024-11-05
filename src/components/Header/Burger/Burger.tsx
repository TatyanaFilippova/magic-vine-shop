import Modal from "react-modal";
import { useState } from "react";
import {
  Button,
  Div,
  ImgIcon,
  Text,
  TextBurger,
  Wrapper,
  WrapperText,
  ButtonClose,
} from "./styles";
import iconVK from "../../Footer/assets/iconVK.png";
import iconWhatsApp from "../../Footer/assets/iconWhatsApp.png";
import IconClose from "../IconClose";
import IconBurger from "./IconBurger";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
   
  },
};

 Modal.setAppElement("#modal");

const Burger = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Wrapper>
          <ButtonClose onClick={closeModal}>
            <IconClose />
          </ButtonClose>
          <TextBurger onClick={closeModal} href={"/"}>
            Главная
          </TextBurger>
          <TextBurger onClick={closeModal} href={"/catalog"}>
            Каталог
          </TextBurger>
          <TextBurger onClick={closeModal} href={"/#about-us"}>
            О нас
          </TextBurger>
          <TextBurger onClick={closeModal} href={"/#delivery"}>
            Доставка и оплата
          </TextBurger>
          <TextBurger onClick={closeModal} href={"/#reviews"}>
            Отзывы
          </TextBurger>
          <Div>
            <Text>Cоциальные сети:</Text>
            <WrapperText>
              <a href="https://vk.com/magic_vine_syk" target="_blank">
                <ImgIcon src={iconVK.src} />
              </a>
              <a href="https://wa.me/89121992737?" target="_blank">
                <ImgIcon src={iconWhatsApp.src} />
              </a>
            </WrapperText>
          </Div>
        </Wrapper>
      </Modal>
      <Button onClick={() => openModal()}>
        <IconBurger />
      </Button>
    </>
  );
};

export default Burger;
