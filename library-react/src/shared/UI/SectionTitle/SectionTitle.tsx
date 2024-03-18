import type { FC, ReactElement, ReactNode } from 'react';

import cl from './SectionTitle.module.scss';

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = ({ children }): ReactElement => {
  return <h2 className={cl.section__title}>{children}</h2>;
};
