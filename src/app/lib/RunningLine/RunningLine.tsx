import Marquee from "react-fast-marquee";
import { Text, WrapperText } from "./styles";

const result = Array.from({ length: 3 });

const RunningLine = () => {
  return (
    <WrapperText>
      <Marquee gradient={true} gradientColor="white" gradientWidth={800}>
        {result.map((item, key) => {
          return <Text key={key}>На первый заказ скидка 10%!</Text>;
        })}
      </Marquee>
    </WrapperText>
  );
};

export default RunningLine;
