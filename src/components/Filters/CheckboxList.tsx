import styled from "styled-components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { StrictMode } from "react";
import Checkbox from "./Checkbox";

const Wrapper = styled.div``;
const Text = styled.label`
  font-size: 18px;
  display: block;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const CheckboxList = () => {
  return (
    <StrictMode>
      <Wrapper>
        <Text>
          <Checkbox value={2000} label="до 2000" />
        </Text>
        <Text>
          <Checkbox value={4000} label="до 4000" />
        </Text>
        <Text>
          <Checkbox value={6000} label="до 6000" />
        </Text>
        <Text>
          <Checkbox value={7000} label="до 7000" />
        </Text>
      </Wrapper>
    </StrictMode>
  );
};

export default CheckboxList;
