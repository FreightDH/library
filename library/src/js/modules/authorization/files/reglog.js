import { lockBody } from '../../../files/functions.js';
import { popupClose, popupOpen } from '../../../files/popup.js';

export function initReglogModals() {
  registrationModal();
  loginModal();
  crossLinks();
}

function registrationModal() {
  const registerModal = document.querySelector('.register');
  const registerButtons = document.querySelectorAll('.register-btn');
  registerButtons.forEach((btn) => btn.addEventListener('click', () => popupOpen(registerModal)));
}

function loginModal() {
  const loginModal = document.querySelector('.login');
  const loginButtons = document.querySelectorAll('.login-btn');
  loginButtons.forEach((btn) => btn.addEventListener('click', () => popupOpen(loginModal)));
}

function crossLinks() {
  const reglogLinkButtons = document.querySelectorAll('.reglog-link');
  reglogLinkButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const linkText = event.target.textContent.toLowerCase();
      popupClose(event.target.closest('.popup'));
      popupOpen(document.querySelector(`.${linkText}`));
    });
  });
}
