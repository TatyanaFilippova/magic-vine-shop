import Marquee from "react-fast-marquee";
import { Text, WrapperText } from "./styles";
import Skeleton from "react-loading-skeleton";

const result = Array.from({ length: 3 });

const RunningLineSkeleton = () => {
  return (
    <WrapperText>
      <Skeleton height={41} />
    </WrapperText>
  );
};

export default RunningLineSkeleton;
