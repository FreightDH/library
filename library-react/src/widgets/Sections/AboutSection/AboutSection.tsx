import type { FC, ReactElement } from 'react';

import { SectionTitle } from '@/shared/UI/SectionTitle';
import { SlickSlider } from '@/shared/lib/slick-slider';

import { image_1, image_2, image_3, image_4, image_5 } from './assets';
import cl from './AboutSection.module.scss';

interface AboutSectionProps {}

const sliderImages = [
  { id: 1, src: image_1 },
  { id: 2, src: image_2 },
  { id: 3, src: image_3 },
  { id: 4, src: image_4 },
  { id: 5, src: image_5 },
  { id: 6, src: image_3 },
  { id: 7, src: image_1 },
  { id: 8, src: image_4 },
  { id: 9, src: image_2 },
];

export const AboutSection: FC<AboutSectionProps> = (): ReactElement => {
  return (
    <section className={cl.about} id="about">
      <div className="about__container">
        <div className={cl.about__body}>
          <SectionTitle>About</SectionTitle>
          <p className={cl.about__text}>
            The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside
          </p>
          <SlickSlider sliderImages={sliderImages} />
        </div>
      </div>
    </section>
  );
};
