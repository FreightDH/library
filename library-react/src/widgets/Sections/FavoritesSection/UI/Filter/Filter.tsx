import type { Dispatch, FC, MouseEvent, ReactElement, SetStateAction } from 'react';

import { cn } from '@/shared/lib';
import type { Season } from '@/shared/api/types';

import cl from './Filter.module.scss';

interface FilterProps {
  filterOptions: string[];
  activeFilter: Season;
  setActiveFilter: Dispatch<SetStateAction<Season>>;
}

export const Filter: FC<FilterProps> = ({ filterOptions, activeFilter, setActiveFilter }): ReactElement => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { textContent } = event.target as HTMLElement;
    setActiveFilter(textContent as Season);
  };

  return (
    <div className={cl.filter}>
      <h3 className={cl.filter__title}>Pick favorites of season</h3>
      <ul className={cl.filter__options}>
        {filterOptions.map((option) => (
          <li key={option}>
            <button
              className={cn(cl.options__item, { [cl.active]: activeFilter === option })}
              onClick={handleClick}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
