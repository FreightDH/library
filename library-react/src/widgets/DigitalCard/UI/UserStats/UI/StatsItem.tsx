import type { FC, ReactElement } from 'react';

import cl from './StatsItem.module.scss';

interface StatsItemProps {
  title: string;
  icon: string;
  stat: number;
}

export const StatsItem: FC<StatsItemProps> = ({ title, icon, stat }): ReactElement => {
  return (
    <li className={cl.stat}>
      <div>{title}</div>
      <div className={cl.stat__icon}>
        <img alt={`${title.toLowerCase()}-icon`} src={icon} />
      </div>
      <div>{stat}</div>
    </li>
  );
};
