import Skeleton from "react-loading-skeleton";
import {
  ButtonSkeleton,
  Description,
  DescriptionSkeleton,
  Title,
  TitleSkeleton,
  Wrapper,
} from "./styles";
import { FC } from "react";

interface HomeBannerProps {
  hesLink?: boolean;
}

const HomeBannerSkeleton: FC<HomeBannerProps> = ({ hesLink }) => {
  return (
    <Wrapper>
      <Title>
        <TitleSkeleton />
      </Title>
      <Description>
        <DescriptionSkeleton />
        <Skeleton height={24} width={245} style={{ marginBottom: "30px" }} />
      </Description>
      {hesLink && <ButtonSkeleton />}
    </Wrapper>
  );
};

export default HomeBannerSkeleton;
