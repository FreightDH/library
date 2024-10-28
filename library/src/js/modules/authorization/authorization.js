import { logoutUser, setProfileIcon, toggleDropMenu } from './files/helpers.js';
import initAuthModals from './files/authModals.js';
import initRegistration from './files/registration.js';
import initLogin from './files/login.js';

const initAuthorization = () => {
  document.addEventListener('click', toggleDropMenu);
  initAuthModals();
  initRegistration();
  initLogin();

  const isSigned = !!localStorage.getItem('isSigned');

  if (isSigned) {
    const data = JSON.parse(localStorage.getItem('currentUser'));
    const { firstName, lastName } = data;
    setProfileIcon(firstName, lastName);
  }

  const logoutButton = document.querySelector('.logout-btn');
  logoutButton.addEventListener('click', logoutUser);
};

export default initAuthorization;
