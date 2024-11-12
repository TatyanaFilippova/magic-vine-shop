import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Container,
  Embla,
  Embla__container,
  Embla__slide,
  ImgSkeleton,
} from "./styles";

const imgSkeleton = Array.from({ length: 3 });
export function EmblaCarouselProductSkeleton() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <Embla ref={emblaRef}>
      <Embla__container>
        {imgSkeleton.map((item, key) => {
          return (
            <Embla__slide key={key}>
              <ImgSkeleton />
            </Embla__slide>
          );
        })}
      </Embla__container>
    </Embla>
  );
}
