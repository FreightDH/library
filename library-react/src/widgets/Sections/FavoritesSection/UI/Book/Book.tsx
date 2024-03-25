import type { FC, ReactElement } from 'react';

import { CustomButton } from '@/shared/UI/CustomButton';
import type { BookInfo } from '@/shared/api/types';

import cl from './Book.module.scss';

interface BookProps {
  book: BookInfo;
}

export const Book: FC<BookProps> = ({ book }): ReactElement => {
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
      <CustomButton className={cl.book__btn}>Buy</CustomButton>
    </div>
  );
};
