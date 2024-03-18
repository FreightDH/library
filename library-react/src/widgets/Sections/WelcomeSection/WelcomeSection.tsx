import type { FC, ReactElement } from 'react';
import cl from './WelcomeSection.module.scss';

interface WelcomeSectionProps {}

export const WelcomeSection: FC<WelcomeSectionProps> = (): ReactElement => {
  return (
    <section className={cl.welcome}>
      <div className={cl.welcome__body}>
        <h2 className={cl.welcome__title}>
          Welcome <br />
          to the Brooklyn library
        </h2>
      </div>
    </section>
  );
};
