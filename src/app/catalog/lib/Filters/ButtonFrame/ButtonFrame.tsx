import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ButtonFrameStyled, ImgCloseStyled } from "./styles";

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
