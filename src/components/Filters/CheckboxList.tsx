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

const list = [
  {
    value: "2000",
    title: "до 2000",
  },
  {
    value: "4000",
    title: "до 4000",
  },
  {
    value: "6000",
    title: "до 6000",
  },
  {
    value: "7000",
    title: "до 7000",
  },
];

const CheckboxList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

  const active = current.get("max-price");

  const handleClick = (value: string) => {
    if (active === value) {
      current.delete("max-price", value);
    } else {
      current.set("max-price", value);
    }

    const search = current.toString();

    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };
  return (
    <Wrapper>
      {list.map((item) => {
        return (
          <Text>
            <Checkbox
              checked={active === item.value}
              onClick={() => {
                handleClick(item.value);
              }}
              value={item.value}
              label={item.title}
            />
          </Text>
        );
      })}
    </Wrapper>
  );
};

export default CheckboxList;
