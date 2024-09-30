import styled from "styled-components";
import imgForm from "./image 20.png";
import imgForm2 from "./image 21.png";
import { TextField, Button, Typography } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 100px;
  background-color: #bcc0b4;
`;

const Div = styled.div`
  height: 486px;
  position: relative;
  width: 700px;
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

const Img1 = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: 9px 7px 10px 0px rgba(0, 0, 0, 0.47);
`;

const OrderForm = (props: any) => {
  const { setEmail, setNumber, setName } = props;
  return (
    <Wrapper>
      <Div>
        <Img1 src={imgForm.src} />
        <Img2 src={imgForm2.src} />
      </Div>
      <Div>
        <Typography variant="h3" textAlign="center">
          Форма заказа
        </Typography>
        <Typography variant="body1" marginBottom={2} textAlign="center">
          Введите ваши данные
        </Typography>
        <TextField
          fullWidth={true}
          margin="normal"
          label="Name"
          variant="outlined"
          placeholder="Введите ваше ФИО"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="number"
          fullWidth={true}
          margin="normal"
          label="Number"
          variant="outlined"
          placeholder="Введите ваш номер телефона"
          onChange={(e) => setNumber(e.target.value)}
        />
        <TextField
          fullWidth={true}
          margin="normal"
          label="Email"
          variant="outlined"
          placeholder="Введите ваш email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          sx={{
            fontFamily: "Popins",
            marginTop: 2,
            width: "60%",
            marginBottom: 2,
          }}
          variant="contained"
        >
          Отправить
        </Button>
      </Div>
    </Wrapper>
  );
};

export default OrderForm;
