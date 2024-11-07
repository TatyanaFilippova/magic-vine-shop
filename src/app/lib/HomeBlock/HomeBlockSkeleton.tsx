import {
  ImgSkeleton,
  Text,
  TextSkeleton,
  Wrapper,
  WrapperText,
} from "./styles";

const HomeBlockSkeleton = () => {
  return (
    <Wrapper>
      <WrapperText>
        <TextSkeleton />
        <TextSkeleton />
      </WrapperText>
      <ImgSkeleton />
    </Wrapper>
  );
};

export default HomeBlockSkeleton;
