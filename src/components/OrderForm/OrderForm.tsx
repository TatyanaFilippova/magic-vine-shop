import styled from "styled-components";
import imgForm from "./imgForm.png";
import imgForm2 from "./imgForm2.png";
import {
  TextField,
  createTheme,
  ThemeProvider,
  outlinedInputClasses,
  Theme,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import OrderFormSuccess from "./OrderFormSuccess";
import cmsAxios from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { media } from "@/constants/media";
import { layout } from "@/constants/layout";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 100px;
  background-color: #bcc0b4;
  text-align: center;

  ${media.phone} {
    ${layout}
  }
`;

const Div = styled.div`
  height: 486px;
  position: relative;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.phone} {
    width: auto;
  }
`;

const Img2 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
  margin-bottom: 10px;

  ${media.tablet} {
    width: 300px;
    height: 300px;
  }

  ${media.phone} {
    display: none;
  }
`;

const FieldWrapper = styled.div`
  width: 630px;

  ${media.tablet} {
    width: auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  ${media.phone} {
    width: auto;
  }
`;

const Img1 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
  margin-top: 10px;

  ${media.tablet} {
    width: 300px;
    height: 300px;
  }

  ${media.phone} {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 36px;
  text-align: center;
  padding-top: 36px;

  ${media.tablet} {
    font-size: 32px;
  }

  ${media.phone} {
    font-size: 30px;
  }
`;

const Button = styled.div`
  background-color: #526468;
  color: white;
  height: 50px;
  font-size: 20px;
  width: 264px;
  margin-top: 36px;
  text-align: center;
  padding-top: 15px;
  cursor: pointer;

  ${media.phone} {
    font-size: 16px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;

  ${media.phone} {
    font-size: 16px;
  }
`;

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#526468",
            "--TextField-brandBorderHoverColor": "#526468",
            "--TextField-brandBorderFocusedColor": "#526468",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
            height: 50,
          },
        },
      },
    },
  });

const OrderForm = ({ id }: { id: string }) => {
  const params = useParams<{ slug: string }>();

  const { data } = useQuery({
    queryKey: ["productDetail", params.slug],
    queryFn: async () => {
      const result = await cmsAxios.get(
        `/api/products?populate=*&filters[slug][$eq]=${params.slug}`
      );

      return result.data;
    },
  });

  const product = data?.data?.[0];

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [isSuccess, setSuccess] = useState(false);

  const outerTheme = useTheme();

  const submit = async () => {
    // await cmsAxios.post("/api/orders", {
    //   data: {
    //    number: number,
    //    name: name,
    //    email: email,
    //   product: product?.id,
    //  },
    //});
    setSuccess(true);
  };

  if (isSuccess) {
    return <OrderFormSuccess />;
  }

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Wrapper>
        <Div>
          <Img1 src={imgForm.src} />
          <Img2 src={imgForm2.src} />
        </Div>
        <Div>
          <Title id={id}>Форма заказа</Title>
          <Description>Введите ваши данные</Description>
          <FieldWrapper>
            <TextField
              fullWidth={true}
              margin="normal"
              value={name}
              label="ФИО"
              variant="outlined"
              placeholder="Введите ваше ФИО"
              onChange={(e) => setName(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  height: "50px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                },
              }}
            />

            <TextField
              type="number"
              fullWidth={true}
              margin="normal"
              label="Номер телефона"
              value={number}
              variant="outlined"
              placeholder="Введите ваш номер телефона"
              onChange={(e) => setNumber(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  height: "50px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                },
              }}
            />

            <TextField
              fullWidth={true}
              margin="normal"
              label="Почта email"
              value={email}
              variant="outlined"
              placeholder="Введите ваш email"
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  height: "50px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                },
              }}
            />
          </FieldWrapper>

          <Button onClick={() => submit()}>Отправить</Button>
        </Div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default OrderForm;
