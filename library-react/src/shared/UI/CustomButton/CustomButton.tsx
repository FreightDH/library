import type { ComponentPropsWithRef, FC, ReactElement } from 'react';

import { cn } from '@/shared/lib';

import cl from './CustomButton.module.scss';

export const CustomButton: FC<ComponentPropsWithRef<'button'>> = ({
  children,
  onClick,
  className = '',
  ...props
}): ReactElement => {
  return (
    <button className={cn(cl.btn, {}, [className])} onClick={onClick} {...props}>
      <span>{children}</span>
    </button>
  );
};
