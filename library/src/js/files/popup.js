import { bodyLockStatus, lockBody, unlockBody } from './functions.js';

const popupOpen = (popup) => {
  if (bodyLockStatus && popup) {
    lockBody();
    popup.classList.add('popup-open');
    popup.addEventListener('click', (event) => {
      if (!event.target.closest('.popup-content') || event.target.closest('.popup-close')) {
        popupClose(event.target.closest('.popup'));
      }
    });
  }
};

const popupClose = (popup) => {
  if (bodyLockStatus) {
    unlockBody();
    popup.classList.remove('popup-open');
  }
};

export { popupOpen, popupClose };
