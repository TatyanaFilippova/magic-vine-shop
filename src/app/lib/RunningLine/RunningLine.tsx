import Marquee from "react-fast-marquee";
import { Text, WrapperText } from "./styles";

const RunningLine = () => {
  return (
    <WrapperText>
      <Marquee gradient={true} gradientColor="white" gradientWidth={800}>
        <Text>На первый заказ скидка 10%!</Text>
        <Text>На первый заказ скидка 10%!</Text>
        <Text>На первый заказ скидка 10%!</Text>
      </Marquee>
    </WrapperText>
  );
};

export default RunningLine;
