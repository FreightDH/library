import { useState, type FC, type ReactElement } from 'react';

import { MenuItem } from '../MenuItem';
import cl from './Menu.module.scss';
import { cn, useScrollBlock } from '@/shared/lib';

interface MenuProps {}

const menuItems = [
  { id: 1, content: 'About', to: '#about' },
  { id: 2, content: 'Favorites', to: '#favorites' },
  { id: 3, content: 'Coffee shop', to: '#coffeeShop' },
  { id: 4, content: 'Contacts', to: '#contacts' },
  { id: 5, content: 'Library Card', to: '#libraryCard' },
];

export const Menu: FC<MenuProps> = (): ReactElement => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const handleClick = () => {
    if (isMenuOpen) {
      allowScroll();
      setMenuOpen(false);
      return;
    }

    blockScroll();
    setMenuOpen(true);
  };

  return (
    <div className={cl.menu}>
      <button className={cn(cl.menu__icon, { [cl.open]: isMenuOpen })} type="button" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={cn(cl.menu__body, { [cl.open]: isMenuOpen })}>
        <ul className={cl.menu__list}>
          {menuItems.map((item) => (
            <MenuItem key={item.id} to={item.to}>
              {item.content}
            </MenuItem>
          ))}
        </ul>
      </nav>
    </div>
  );
};
