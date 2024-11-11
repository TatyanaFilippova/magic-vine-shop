import imgForm from "./assets/imgForm.png";
import imgForm2 from "./assets/imgForm2.png";
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
import {serverAxios} from "@/configs/axios";
import { useParams } from "next/navigation";
import {
  Button,
  Description,
  FieldWrapper,
  Img1,
  Img2,
  Title,
  Wrapper,
  Div,
} from "./styles";
import useProductDetailApi from "@/api/getProductDetail";

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

  const { data } = useProductDetailApi(params.slug)

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [isSuccess, setSuccess] = useState(false);

  const outerTheme = useTheme();

  const submit = async () => {
    await serverAxios.post("/add-order", {
      data: {
        number: number,
        name: name,
        email: email,
        product: data?.documentId,
      },
    });
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
