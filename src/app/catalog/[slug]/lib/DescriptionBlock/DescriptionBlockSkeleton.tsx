import Skeleton from "react-loading-skeleton";
import { ButtonSkeleton, Wrapper, WrapperTitle } from "./styles";

const DescriptionBlockSkeleton = () => {
  return (
    <Wrapper>
      <WrapperTitle>
        <Skeleton height={21} width={116} />
        <Skeleton height={21} width={105} />
        <Skeleton height={21} width={114} />
      </WrapperTitle>
      <ButtonSkeleton />
    </Wrapper>
  );
};

export default DescriptionBlockSkeleton;
