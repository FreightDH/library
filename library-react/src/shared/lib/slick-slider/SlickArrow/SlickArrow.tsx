import type { ComponentPropsWithRef, FC, ReactElement } from 'react';

import arrowIcon from './assets/arrow.svg';

interface SlickArrowProps extends ComponentPropsWithRef<'button'> {
  direction: 'next' | 'prev';
}

export const SlickArrow: FC<SlickArrowProps> = ({ direction, className, onClick }): ReactElement => {
  return (
    <button
      className={className}
      style={direction === 'prev' ? { transform: 'rotate(180deg)' } : {}}
      onClick={onClick}
    >
      <img alt="arrow-icon" src={arrowIcon} />
    </button>
  );
};
