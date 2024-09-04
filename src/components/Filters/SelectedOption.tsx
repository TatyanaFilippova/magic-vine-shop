import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 200px;
  border: 2px solid #869286;
  border-radius: 8px;
  height: 40px;
  padding: 10px;
  cursor: pointer;
`;

const WrapperUl = styled.ul`
  width: 200px;
  border: 2px solid #869286;
  border-radius: 8px;
`;

const WrapperLi = styled.li`
  padding: 10px;
  cursor: pointer;
`;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<undefined | string>();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>
        <Input value={value} />
      </button>
      {isOpen && (
        <WrapperUl>
          <WrapperLi
            onClick={() => {
              toggleDropdown();
              setValue("до 1 недели");
            }}
          >
            до 1 недели
          </WrapperLi>
          <WrapperLi
            onClick={() => {
              toggleDropdown();
              setValue("до 2 недель");
            }}
          >
            до 2 недель
          </WrapperLi>
          <WrapperLi
            onClick={() => {
              toggleDropdown();
              setValue("до 3 недель");
            }}
          >
            до 3 недель
          </WrapperLi>
        </WrapperUl>
      )}
    </div>
  );
};

export default Dropdown;
