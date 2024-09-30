import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CheckboxMui from "@mui/material/Checkbox";

interface Checkbox {
  value: number;
  label: string;
}

const Checkbox = ({ value, label }: Checkbox) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

  const active = current.has("max-price", value.toString());
  const handleClick = () => {
    if (active) {
      current.delete("max-price", value.toString());
    } else {
      current.set("max-price", value.toString());
    }

    const search = current.toString();

    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };
  return (
    <>
      <CheckboxMui
        checked={active}
        color="default"
        onClick={() => {
          handleClick();
        }}
      />
      {label}
    </>
  );
};

export default Checkbox;
