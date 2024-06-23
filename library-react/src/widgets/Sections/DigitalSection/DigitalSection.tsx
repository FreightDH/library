import { type FC, type ReactElement } from 'react';

import { cn } from '@/shared/lib';

import { SectionTitle } from '@/shared/UI/SectionTitle';
import { CustomButton } from '@/shared/UI/CustomButton';
import { DigitalCard } from '@/widgets/DigitalCard/DigitalCard';

import cl from './DigitalSection.module.scss';

export const DigitalSection: FC = (): ReactElement => {
  return (
    <section className={cl.digital} id="digital">
      <div className={cl.digital__container}>
        <div className={cl.digital__body}>
          <SectionTitle>Digital Library Cards</SectionTitle>
          <div className={cl.digital__content}>
            <div className={cl.digital__column}>
              <h3 className={cl.column__title}>Find your Library card</h3>
              <DigitalCard />
            </div>
            <div className={cn(cl.digital__column, {}, [cl.column__right])}>
              <h3 className={cl.column__title}>Get a reader card</h3>
              <p className={cl.column__text}>
                You will be able to see a reader card after logging into account or you can register a new
                account
              </p>
              <div className={cl.column__buttons}>
                <CustomButton className={cl.column__btn}>Sign Up</CustomButton>
                <CustomButton className={cl.column__btn}>Log in</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
