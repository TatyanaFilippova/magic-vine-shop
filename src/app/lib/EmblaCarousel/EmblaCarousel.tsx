import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "./assets/img 1.jpg";
import img2 from "./assets/img 2.png";
import img3 from "./assets/img 3.png";
import img4 from "./assets/img 4.png";
import img5 from "./assets/img 5.png";
import img6 from "./assets/img 6.png";
import img7 from "./assets/img 7.png";
import { Embla, Embla__container, Embla__slide, Img } from "./styles";

const img = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
];

function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <Embla ref={emblaRef}>
      <Embla__container>
        {img.map((item) => {
          return (
            <Embla__slide key={item}>
              <Img src={item} />
            </Embla__slide>
          );
        })}
      </Embla__container>
    </Embla>
  );
}
export default EmblaCarousel;
