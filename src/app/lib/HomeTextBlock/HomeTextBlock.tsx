import { Text, Wrapper } from "./styles";

const HomeTextBlock = ({ text, textSecond }: any) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Text>{textSecond}</Text>
    </Wrapper>
  );
};

export default HomeTextBlock;
