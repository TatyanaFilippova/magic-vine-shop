import styled from "styled-components";
import imgForm from "./image 20.png";
import imgForm2 from "./image 21.png";
import {
  TextField,
  createTheme,
  ThemeProvider,
  outlinedInputClasses,
  Theme,
  useTheme,
} from "@mui/material";
import { red } from "@mui/material/colors";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 100px;
  background-color: #bcc0b4;
  text-align: center;
`;

const Div = styled.div`
  height: 486px;
  position: relative;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img2 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
  margin-bottom: 10px;
`;

const FieldWrapper = styled.div`
  width: 630px;
`;

const Img1 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
`;

const Title = styled.div`
  font-size: 36px;
  text-align: center;
  padding-top: 36px;
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
`;

const Description = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
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

const OrderForm = (props: any) => {
  const { setEmail, setNumber, setName } = props;

  const outerTheme = useTheme();
  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Wrapper>
        <Div>
          <Img1 src={imgForm.src} />
          <Img2 src={imgForm2.src} />
        </Div>
        <Div>
          <Title>Форма заказа</Title>
          <Description>Введите ваши данные</Description>
          <FieldWrapper>
            <TextField
              fullWidth={true}
              margin="normal"
              label="Name"
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
              label="Number"
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
              label="Email"
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

          <Button>Отправить</Button>
        </Div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default OrderForm;
