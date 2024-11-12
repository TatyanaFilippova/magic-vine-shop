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
import { serverAxios } from "@/configs/axios";
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
  DivImg,
  Container,
} from "./styles";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data } = useProductDetailApi(params.slug);
  const [isSuccess, setSuccess] = useState(false);

  const outerTheme = useTheme();

  const submit = async (values: any) => {
    await serverAxios.post("/add-order", {
      data: {
        number: values.number,
        name: values.name,
        email: values.email,
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
      <Wrapper onSubmit={handleSubmit(submit)}>
        {" "}
        <Container>
          <DivImg>
            <Img1 src={imgForm.src} />
            <Img2 src={imgForm2.src} />
          </DivImg>
          <Div>
            <Title id={id}>Форма заказа</Title>
            <Description>Введите ваши данные</Description>
            <FieldWrapper>
              <TextField
                fullWidth={true}
                margin="normal"
                label="ФИО"
                variant="outlined"
                placeholder="Введите ваше ФИО"
                autoComplete="off"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFFFFF",
                    height: "50px",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    minWidth: "100%",
                  },
                }}
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-zА-Яа-яё ]+$/i,
                })}
              />
              {errors.name?.type === "required" && (
                <p role="alert" style={{ color: "red", textAlign: "left" }}>
                  Введите ФИО
                </p>
              )}
              {errors.name?.type === "pattern" && (
                <p role="alert" style={{ color: "red", textAlign: "left" }}>
                  Введите корректное ФИО
                </p>
              )}

              <TextField
                type="number"
                fullWidth={true}
                margin="normal"
                label="Номер телефона"
                variant="outlined"
                placeholder="Введите ваш номер телефона"
                autoComplete="off"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFFFFF",
                    height: "50px",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    minWidth: "100%",
                  },
                }}
                {...register("number", {
                  required: true,
                  pattern: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/i,
                })}
              />
              {errors.number?.type === "required" && (
                <p role="alert" style={{ color: "red", textAlign: "left" }}>
                  Введите номер телефона
                </p>
              )}
              {errors.number?.type === "pattern" && (
                <p role="alert" style={{ color: "red", textAlign: "left" }}>
                  Введите корректный номер телефона
                </p>
              )}

              <TextField
                fullWidth={true}
                margin="normal"
                label="Почта email"
                variant="outlined"
                placeholder="Введите ваш email"
                autoComplete="off"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFFFFF",
                    height: "50px",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    minWidth: "100%",
                  },
                }}
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email?.type === "required" && (
                <p role="alert" style={{ color: "red", textAlign: "left" }}>
                  Введите ваш email
                </p>
              )}
            </FieldWrapper>

            <Button type="submit">Отправить</Button>
          </Div>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default OrderForm;
