import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

import { media } from "@/constants/media";
import getCmsImage from "@/utils/get-cms-image";

const Embla = styled.div`
  overflow: hidden;
  margin-bottom: 60px;
  padding-bottom: 40px;

  ${media.tablet} {
    margin-top: 40px;
  }

  ${media.phone} {
    margin-top: 40px;
    margin-bottom: 10px;
  }
`;

const Embla__container = styled.div`
  display: flex;
`;

const Embla__slide = styled.div`
  flex: 0 0 40%;
  min-width: 0;

  ${media.phone} {
    flex: 0 0 70%;
  }
`;

const Img = styled.img`
  height: 500px;
  object-fit: cover;
  width: 95%;

  ${media.tablet} {
    height: 300px;
  }

  ${media.phone} {
    height: 300px;
  }
`;

interface EmblaProps {
  slider: {
    url: string;
  }[];
  id?: string;
}

export function EmblaCarouselProduct({ slider, id }: EmblaProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <Embla ref={emblaRef}>
      <Embla__container id={id}>
        {slider?.map((item) => {
          return (
            <Embla__slide key={item.url}>
              <Img src={getCmsImage(item)} />
            </Embla__slide>
          );
        })}
      </Embla__container>
    </Embla>
  );
}
