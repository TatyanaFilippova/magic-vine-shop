import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import getCmsImage from "@/utils/get-cms-image";
import {
  Container,
  Embla,
  Embla__container,
  Embla__slide,
  Img,
} from "./styles";

interface EmblaProps {
  slider: {
    url: string;
  }[];
  id?: string;
}

export function EmblaCarouselProduct({ slider, id }: EmblaProps) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <Container>
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
    </Container>
  );
}
