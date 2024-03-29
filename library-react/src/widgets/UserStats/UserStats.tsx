import type { CSSProperties, FC, ReactElement } from 'react';

import statsInfo from './statsInfo';
import { StatsItem } from './UI';

const style: CSSProperties = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '35px',
};

export const UserStats: FC = (): ReactElement => {
  return (
    <ul style={style}>
      {statsInfo.map(({ title, icon }) => (
        <StatsItem key={title} icon={icon} stat={0} title={title} />
      ))}
    </ul>
  );
};
