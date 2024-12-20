import styled from "styled-components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Checkbox from "./Checkbox";
import { media } from "@/constants/media";

const Wrapper = styled.div``;
const Text = styled.label`
  font-size: 18px;
  display: block;

  ${media.phone} {
    font-size: 16px;
  }
`;

const list = [
  {
    value: "2000",
    title: "до 2000 р.",
  },
  {
    value: "4000",
    title: "до 4000 р.",
  },
  {
    value: "6000",
    title: "до 6000 р.",
  },
  {
    value: "7000",
    title: "до 7000 р.",
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
          <Text key={item.value}>
            <Checkbox
              checked={active === item.value}
              onClick={() => {
                handleClick(item.value);
              }}
              label={item.title}
            />
          </Text>
        );
      })}
    </Wrapper>
  );
};

export default CheckboxList;
