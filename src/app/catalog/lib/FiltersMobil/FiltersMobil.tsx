"use client";
import Modal from "react-modal";
import { useState } from "react";
import IconFilters from "./IconFilters";
import styled from "styled-components";
import Filters from "../Filters/Filters";
import IconClose from "@/components/Header/IconClose";

const Button = styled.button``;

const ButtonClose = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const Wrapper = styled.div`
  margin-left: 30px;
  margin-bottom: 30px;
`;

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
};

Modal.setAppElement("#modal");

const FiltersMobil = () => {
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
          <Filters />
        </Wrapper>
      </Modal>
      <Button onClick={openModal}>
        <IconFilters />
      </Button>
    </>
  );
};

export default FiltersMobil;
