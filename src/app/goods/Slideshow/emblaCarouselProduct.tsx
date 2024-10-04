import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

import { media } from "@/constants/media";

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
`;

const Img = styled.img`
  height: 550px;
  object-fit: cover;
  width: 95%;

  ${media.tablet} {
    height: 300px;
  }

  ${media.phone} {
    height: 200px;
  }
`;

interface EmblaProps {
  slider: {
    url: string;
  }[];
}

export function EmblaCarouselProduct({ slider }: EmblaProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <Embla ref={emblaRef}>
      <Embla__container>
        {slider.map((item) => {
          return (
            <Embla__slide key={item.url}>
              <Img src={"http://localhost:1337" + item.url} />
            </Embla__slide>
          );
        })}
      </Embla__container>
    </Embla>
  );
}
