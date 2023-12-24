import { bodyLockStatus, bodyLockToggle, lockBody, unlockBody } from './functions.js';

export function popupOpen(popup) {
  if (bodyLockStatus && popup) {
    lockBody();
    popup.classList.add('popup-open');
    popup.addEventListener('click', (event) => {
      if (!event.target.closest('.popup-content') || event.target.closest('.popup-close')) {
        popupClose(event.target.closest('.popup'));
      }
    });
  }
}

export function popupClose(popup) {
  if (bodyLockStatus) {
    unlockBody();
    popup.classList.remove('popup-open');
  }
}
