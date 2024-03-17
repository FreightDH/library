import type { FC, ReactElement } from 'react';

import { Menu } from './UI/Menu';
import { Dropdown } from './UI/Dropdown';

import cl from './Header.module.scss';

export const Header: FC = (): ReactElement => {
  return (
    <header className={cl.header}>
      <div className="header__container">
        <div className={cl.header__body}>
          <h1 className={cl.header__logo}>Brooklyn Public Library</h1>
          <div className={cl.header__content}>
            <Menu />
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
};
