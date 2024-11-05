import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Button, ButtonClose, Input, WrapperLi, WrapperUl } from "./styles";
import ImgClose from "../../ImgClose/ImgClose";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

  const active = current.get("weeks");

  const handleClick = (value: string) => {
    if (active === value) {
      current.delete("weeks", value);
    } else {
      current.set("weeks", value);
    }

    const search = current.toString();

    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const list = [
    {
      value: "1",
      title: "до 1 недели",
    },
    {
      value: "2",
      title: "до 2 недели",
    },
    {
      value: "3",
      title: "до 3 недели",
    },
  ];

  const element = list.find((item) => {
    return item.value === active;
  });

  return (
    <div>
      <Button onClick={toggleDropdown}>
        <Input value={element?.title ?? ""} placeholder="выберете из списка" />
        {active && (
          <ButtonClose
            onClick={(e) => {
              e.stopPropagation();
              handleClick(active);
            }}
          >
            <ImgClose color="#869286" />
          </ButtonClose>
        )}
      </Button>
      {isOpen && (
        <WrapperUl>
          {list.map((item) => {
            return (
              <WrapperLi
                $active={item.value === active}
                key={item.value}
                onClick={() => {
                  toggleDropdown();
                  handleClick(item.value);
                }}
              >
                {item.title}
              </WrapperLi>
            );
          })}
        </WrapperUl>
      )}
    </div>
  );
};

export default Dropdown;
