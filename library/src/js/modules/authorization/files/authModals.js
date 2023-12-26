import { popupClose, popupOpen } from '../../../files/popup.js';

const initAuthModals = () => {
  initAuthModal('register');
  initAuthModal('login');
  initCrossLinks();
};

const initAuthModal = (type) => {
  const modal = document.querySelector(`.${type}`);
  const buttons = document.querySelectorAll(`.${type}-btn`);
  buttons.forEach((btn) => btn.addEventListener('click', () => popupOpen(modal)));
};

const initCrossLinks = () => {
  const reglogLinkButtons = document.querySelectorAll('.reglog-link');
  reglogLinkButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const linkText = event.target.textContent.toLowerCase();
      popupClose(event.target.closest('.popup'));

      setTimeout(() => {
        popupOpen(document.querySelector(`.${linkText}`));
      }, 500);
    });
  });
};

export { initAuthModals };
