import type { FC, ReactElement } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Slide } from './Slide';
import { SlickArrow } from './SlickArrow';
import './SlickSlider.scss';

interface SlickSliderProps {
  sliderImages: { id: number; src: string }[];
}

const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  nextArrow: <SlickArrow direction="next" />,
  prevArrow: <SlickArrow direction="prev" />,
  responsive: [
    {
      breakpoint: 1439.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export const SlickSlider: FC<SlickSliderProps> = ({ sliderImages }): ReactElement => {
  return (
    <div className="slider__wrapper">
      <Slider {...sliderSettings}>
        {sliderImages.map(({ id, src }) => (
          <Slide key={id} src={src} />
        ))}
      </Slider>
    </div>
  );
};
