import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "./img1.png";
import img2 from "./img2.png";
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
  flex: 0 0 50%;
  min-width: 0;
  margin-right: 20px;
`;

const Img = styled.img`
  height: 700px;
  object-fit: cover;
  width: 100%;

  ${media.tablet} {
    height: 300px;
  }

  ${media.phone} {
    height: 200px;
  }
`;

export function EmblaCarouselProduct() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <Embla ref={emblaRef}>
      <Embla__container>
        <Embla__slide>
          <Img src={img1.src} />
        </Embla__slide>
        <Embla__slide>
          <Img src={img2.src} />
        </Embla__slide>
      </Embla__container>
    </Embla>
  );
}
