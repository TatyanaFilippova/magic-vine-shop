import {
  ImgSkeleton,
  Text,
  TextSkeleton,
  Wrapper,
  WrapperText,
} from "./styles";

const HomeBlockSecondSkeleton = () => {
  return (
    <Wrapper>
      <ImgSkeleton />
      <WrapperText>
        <TextSkeleton />
        <TextSkeleton />
      </WrapperText>
    </Wrapper>
  );
};

export default HomeBlockSecondSkeleton;
