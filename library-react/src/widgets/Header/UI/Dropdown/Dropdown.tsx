import { useState, type FC, type ReactElement } from 'react';

import { cn } from '@/shared/lib';

import profileIcon from './assets/profile.svg';
import cl from './Dropdown.module.scss';

const useAuth = () => {
  const isSigned = false;
  const initials = 'MZ';

  return { isSigned, initials };
};

export const Dropdown: FC = (): ReactElement => {
  const { isSigned, initials } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false); //! в глобальный стейт, при клике в любом месте -> false

  return (
    <div className={cl.dropdown} onClick={() => setDropdownOpen(!isDropdownOpen)}>
      <div className={cl.dropdown__icon}>
        {isSigned ? (
          <div className={cn(cl.dropdown__icon, { [cl.signed]: isSigned })}>{initials}</div>
        ) : (
          <img alt="profile-icon" src={profileIcon} />
        )}
      </div>
      <div
        className={cn(cl.dropdown__body, { [cl.active]: isDropdownOpen })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cl.dropdown__title}>Profile</div>
        <div className={cl.dropdown__options}>
          {isSigned ? (
            <>
              <button className={cl.dropdown__option}>My profile</button>
              <button className={cl.dropdown__option}>Logout</button>
            </>
          ) : (
            <>
              <button className={cl.dropdown__option}>Log In</button>
              <button className={cl.dropdown__option}>Register</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
