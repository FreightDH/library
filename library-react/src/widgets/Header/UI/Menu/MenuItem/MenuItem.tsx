import type { FC, ReactElement } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import cl from './MenuItem.module.scss';

interface MenuItemProps extends LinkProps {
  to: string;
}

export const MenuItem: FC<MenuItemProps> = ({ to, children, ...props }): ReactElement => {
  return (
    <li>
      <Link className={cl.menu__link} to={to} {...props}>
        <span>{children}</span>
      </Link>
    </li>
  );
};
