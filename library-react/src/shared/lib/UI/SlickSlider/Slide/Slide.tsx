import type { FC, ReactElement } from 'react';

import cl from './Slide.module.scss';

interface SlideProps {
  src: string;
}

export const Slide: FC<SlideProps> = ({ src }): ReactElement => {
  return (
    <div className={cl.slide}>
      <img alt="library-image" src={src} />
    </div>
  );
};
