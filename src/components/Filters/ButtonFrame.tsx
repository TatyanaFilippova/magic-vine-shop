import styled from "styled-components";
import { useState } from "react";
import ImgClose from "./ImgClose";
import { media } from "@/constants/media";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ButtonFrameStyled = styled.button<{ active: boolean }>`
  font-size: 18px;
  margin-top: 10px;

  align-items: center;
  border: 2px solid #869286;
  border-radius: 8px;
  height: 40px;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#869286" : "transparent")};
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.active ? "white" : "black")};
  ${media.phone} {
    display: none;
  }
`;

const ImgCloseStyled = styled(ImgClose)`
  margin-left: 10px;

`


const ButtonFrame = ({ title, value }: { title: string; value: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

  const active = current.has("selected", value);
  const handleClick = () => {
    if (active) {
      current.delete("selected", value);
    } else {
      current.append("selected", value);
    }

    const search = current.toString();

    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };
  return (
    <ButtonFrameStyled
      active={active}
      onClick={() => {
        if (!active) handleClick();
      }}
    >
      {title}
      {active && (
        <ImgCloseStyled
          onClick={() => {
            if (active) handleClick();
          }}
        />
      )}
    </ButtonFrameStyled>
  );
};

export default ButtonFrame;
