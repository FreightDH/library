import { useState, type FC, type ReactElement } from 'react';

import { SectionTitle } from '@/shared/UI/SectionTitle';
import type { Season } from '@/shared/api/types';

import { Filter } from './UI/Filter';
import { Book } from './UI/Book';
import booksInfo from './booksInfo';
import cl from './FavoritesSection.module.scss';

const filterOptions = ['winter', 'spring', 'summer', 'autumn'];

export const FavoritesSection: FC = (): ReactElement => {
  const [activeFilter, setActiveFilter] = useState<Season>('winter');

  //! global state
  const wasBought = true;

  return (
    <section className={cl.favorites} id="favorites">
      <div className="favorites__container">
        <div className={cl.favorites__body}>
          <SectionTitle>Favorites</SectionTitle>
          <Filter
            activeFilter={activeFilter}
            filterOptions={filterOptions}
            setActiveFilter={setActiveFilter}
          />
          <div className={cl.favorites__books}>
            {booksInfo[activeFilter].map((book) => (
              <Book key={book.title} book={book} wasBought={wasBought} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
