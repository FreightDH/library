import type { FC, ReactElement, ReactNode } from 'react';
import cl from './MenuItem.module.scss';

interface MenuItemProps {
  children: ReactNode;
  anchor: string;
}

export const MenuItem: FC<MenuItemProps> = ({ children, anchor }): ReactElement => {
  return (
    <li>
      <a className={cl.menu__link} href={`#${anchor}`}>
        <span>{children}</span>
      </a>
    </li>
  );
};
