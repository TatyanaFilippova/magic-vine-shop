import styled from "styled-components";
import Marquee from "react-fast-marquee";

const WrapperText = styled.div`
  height: 40px;
  width: 100%;
  margin-top: 50px;

  background: #f2eae2;
`;

const Text = styled.div`
  text-align: center;

  padding-top: 10px;
  padding-bottom: 12px;
  padding-right: 400px;
`;

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
