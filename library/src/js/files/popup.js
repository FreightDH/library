import { bodyLockStatus, lockBody, unlockBody } from './functions.js';

export function popupOpen(popup) {
  if (popup) {
    lockBody();
    popup.classList.add('popup-open');
    popup.addEventListener('click', function (event) {
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
