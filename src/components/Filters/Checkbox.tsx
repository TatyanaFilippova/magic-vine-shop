import { StrictMode } from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";

const Wrapper = styled.div``;
const Text = styled.label`
  font-size: 18px;
  display: block;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const CheckboxComponent = () => {
  return (
    <StrictMode>
      <Wrapper>
        <Text>
          <Checkbox defaultChecked color="default" />
          до 2000 р.
        </Text>
        <Text>
          <Checkbox defaultChecked color="default" />
          до 4000 р.
        </Text>
        <Text>
          <Checkbox defaultChecked color="default" />
          до 6000 р.
        </Text>
        <Text>
          <Checkbox defaultChecked color="default" />
          до 8000 р.
        </Text>
      </Wrapper>
    </StrictMode>
  );
};

export default CheckboxComponent;
