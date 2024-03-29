import { type FC, type ReactElement } from 'react';

import { CustomButton } from '@/shared/UI/CustomButton';
import type { BookInfo } from '@/shared/api/types';

import cl from './Book.module.scss';
import { cn } from '@/shared/lib';

interface BookProps {
  book: BookInfo;
  wasBought: boolean;
}

export const Book: FC<BookProps> = ({ book, wasBought }): ReactElement => {
  const { title, author, text, image } = book;

  return (
    <div className={cl.book}>
      <div className={cl.book__staff}>Staff Picks</div>
      <div className={cl.book__title}>
        {title} <br /> <span>${author}</span>
      </div>
      <p className={cl.book__text}>{text}</p>
      <div className={cl.book__image}>
        <img alt={`${title}-cover`} src={image} />
      </div>
      <CustomButton className={cn(cl.book__btn, { [cl.owned]: wasBought })} disabled={wasBought}>
        {wasBought ? 'Own' : 'Buy'}
      </CustomButton>
    </div>
  );
};
