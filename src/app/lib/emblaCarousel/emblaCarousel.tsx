import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "./content/img 1.png";
import img2 from "./content/img 2.png";
import img3 from "./content/img 3.png";
import img4 from "./content/img 4.png";
import img5 from "./content/img 5.png";
import img6 from "./content/img 6.png";
import { media } from "@/constants/media";

const Embla = styled.div`
  overflow: hidden;

  margin-bottom: 60px;

  padding-bottom: 40px;

  ${media.tablet} {
    margin-top: 40px;
  }

  ${media.phone} {
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;

const Embla__container = styled.div`
  display: flex;
`;

const Embla__slide = styled.div`
  flex: 0 0 50%;
  min-width: 0;
  margin-right: 20px;

  ${media.phone} {
    flex: 0 0 60%;
  }
`;

const Img = styled.img`
  height: 520px;
  object-fit: cover;
  width: 100%;

  ${media.tablet} {
    height: 300px;
  }

  ${media.phone} {
    height: 250px;
  }
`;

export function EmblaCarousel() {
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
        <Embla__slide>
          <Img src={img3.src} />
        </Embla__slide>
        <Embla__slide>
          <Img src={img4.src} />
        </Embla__slide>
        <Embla__slide>
          <Img src={img5.src} />
        </Embla__slide>
        <Embla__slide>
          <Img src={img6.src} />
        </Embla__slide>
      </Embla__container>
    </Embla>
  );
}
