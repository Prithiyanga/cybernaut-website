import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

// TODO ADD IMAGES AND GIVE IT AS CHILDREN TO THE SLIDE TAG
const SliderComponent = () => {
  const [dimensions, setDimensions] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });

  useEffect(() => {
    setDimensions({
      height: window.screen.height,
      width: window.screen.width,
    });
    if (window.screen.height < window.screen.width) {
      setDimensions({
        height: window.screen.width,
        width: window.screen.height,
      });
    }
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={dimensions.width}
      naturalSlideHeight={dimensions.width}
      totalSlides={3}
    >
      <div className="flex items-center justify-between h-[75%] md:h-[60%] lg:h-[40%] xl:h-[30%] w-[96%]">
        <ButtonBack>
          <ArrowLeftIcon className="w-10 h-10 text-gray-500 absolute top-[32%] md:top-[30%] lg:top-[20%] xl:top-[13%] z-40" />
        </ButtonBack>
        <ButtonNext>
          <ArrowRightIcon className="w-10 h-10 text-gray-500 absolute top-[32%] md:top-[30%] lg:top-[20%] xl:top-[13%] z-40" />
        </ButtonNext>
      </div>
      <Slider className="h-fit z-10">
        <Slide className="h-fit" index={0}>
          <img
            className="object-fill h-[75%] sm:h-[60%] md:h-[50%] lg:h-[40%] xl:h-[30%] w-full"
            src="https://www.cybernautofficial.com/static/media/cybernautPoster.f537893d.jpeg"
          />
        </Slide>
        <Slide index={1}>
          <img
            className="object-fill h-[75%] md:h-[60%] lg:h-[40%] xl:h-[30%] w-full"
            src="https://coolwallpapers.me/picsup/2636454-landscape-4k-free-downloads-hd-wallpaper.jpg"
          />
        </Slide>
        <Slide index={2}>
          <img
            className="object-fill h-[75%] md:h-[60%] lg:h-[40%] xl:h-[30%] w-full"
            src="https://wallpaperaccess.com/full/959294.jpg"
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default SliderComponent;
