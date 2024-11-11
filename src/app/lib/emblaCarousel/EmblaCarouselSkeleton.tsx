import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "./assets/img 1.jpg";
import img2 from "./assets/img 2.png";

import { Embla, Embla__container, Embla__slide, ImgSkeleton } from "./styles";

const img = [img1.src, img2.src];

function EmblaCarouselSkeleton() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <Embla ref={emblaRef}>
      <Embla__container>
        {img.map((item) => {
          return (
            <Embla__slide key={item}>
              <ImgSkeleton />
            </Embla__slide>
          );
        })}
      </Embla__container>
    </Embla>
  );
}
export default EmblaCarouselSkeleton;
