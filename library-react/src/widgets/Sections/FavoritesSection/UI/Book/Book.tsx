import { useEffect, type FC, type ReactElement, useState } from 'react';

import { cn } from '@/shared/lib';
import { CustomButton } from '@/shared/UI/CustomButton';
import type { BookInfo } from '@/shared/api/types';

import cl from './Book.module.scss';

interface BookProps {
  book: BookInfo;
}

export const Book: FC<BookProps> = ({ book }): ReactElement => {
  const { title, author, text, image } = book;
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 150);
  }, []);

  return (
    <div className={cn(cl.book, { [cl.hide]: hide })}>
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
