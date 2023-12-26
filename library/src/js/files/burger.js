import { bodyLockStatus, bodyLockToggle, unlockBody } from './functions.js';

const initMenu = () => {
  if (document.querySelector('.menu__icon')) {
    document.addEventListener('click', (event) => {
      if (bodyLockStatus && event.target.closest('.menu__icon')) {
        bodyLockToggle();
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('.menu__body').classList.toggle('menu-open');
      }
      if (bodyLockStatus && event.target.closest('.menu__link')) {
        unlockBody();
        document.documentElement.classList.remove('menu-open');
        document.querySelector('.menu__body').classList.remove('menu-open');
      }
      if (bodyLockStatus && !event.target.closest('.menu__link') && !event.target.closest('.popup-content')) {
        unlockBody();
        document.documentElement.classList.remove('menu-open');
        document.querySelector('.menu__body').classList.remove('menu-open');
      }
    });
  }
};

export default initMenu;
