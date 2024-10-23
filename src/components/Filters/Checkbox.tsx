import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CheckboxMui from "@mui/material/Checkbox";

interface Checkbox {
  value: string;
  label: string;
  onClick: () => undefined;
  checked: boolean
}

const Checkbox = ({ value, label, onClick, checked}: Checkbox) => {
  
  return (
    <>
      <CheckboxMui
        checked={checked}
        color="default"
        onClick={onClick}
      />
      {label}
    </>
  );
};

export default Checkbox;
