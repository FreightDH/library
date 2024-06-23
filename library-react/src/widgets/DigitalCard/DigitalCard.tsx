import { useState, type FC, type ReactElement } from 'react';

import { useAuth } from '@/shared/lib/contexts/AuthContext';

import { CustomButton } from '@/shared/UI/CustomButton';
import { CardInput } from '@/shared/UI/CardInput';

import { UserStats } from './UI/UserStats';
import cl from './DigitalCard.module.scss';

export const DigitalCard: FC = (): ReactElement => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const { isAuth } = useAuth();

  const isUserFound = false;

  return (
    <div className={cl.card}>
      <form action="#" className={cl.card__body}>
        <div className={cl.card__title}>Brooklyn Public Library</div>
        <div className={cl.card__inputs}>
          <CardInput placeholder="Reader's name" setValue={setName} value={name} />
          <CardInput placeholder="Card number" setValue={setCardNumber} value={cardNumber} />
        </div>
      </form>
      <div className={cl.card__footer}>
        {isAuth || isUserFound ? (
          <UserStats />
        ) : (
          <CustomButton className={cl.card__btn}>
            <span>Check the card</span>
          </CustomButton>
        )}
      </div>
    </div>
  );
};
