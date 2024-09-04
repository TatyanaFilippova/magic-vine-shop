import { StrictMode } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Text = styled.label`
  padding-top: 10px;
  font-size: 18px;
  display: block;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Checkbox = () => {
  return (
    <StrictMode>
      <Wrapper>
        <Text>
          <Input type="checkbox" value="до 2000" />
          до 2000 р.
        </Text>
        <Text>
          <Input type="checkbox" value="до 4000" />
          до 4000 р.
        </Text>
        <Text>
          <Input type="checkbox" value="до 6000" />
          до 6000 р.
        </Text>
        <Text>
          <Input type="checkbox" value="до 8000" />
          до 8000 р.
        </Text>
      </Wrapper>
    </StrictMode>
  );
};

export default Checkbox;
