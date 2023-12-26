import { logoutUser, setProfileIcon, toggleDropMenu } from './files/functions.js';
import { initAuthModals } from './files/authModals.js';
import { initRegistration } from './files/registration.js';

const initAuthorization = () => {
  document.addEventListener('click', toggleDropMenu);
  initAuthModals();
  initRegistration();

  const isSigned = !!localStorage.getItem('isSigned');

  if (isSigned) {
    const data = JSON.parse(localStorage.getItem('lastUser'));
    const { firstName, lastName } = data;
    setProfileIcon(firstName, lastName);
  }

  const logoutButton = document.querySelector('.logout-btn');
  logoutButton.addEventListener('click', logoutUser);
};

export default initAuthorization;
