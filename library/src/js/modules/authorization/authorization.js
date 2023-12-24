import { initReglogModals } from './files/reglog.js';
import { initRegistration } from './files/registration.js';

export function initAuthorization() {
  document.addEventListener('click', toggleDropMenu);
  initReglogModals();
  initRegistration();

  const isSigned = !!localStorage.getItem('isSigned');

  if (isSigned) {
    const data = localStorage.getItem('user-data').split(' ');
    const firstName = data[0];
    const lastName = data[1];
    const email = data[2];
    const password = data[3];

    setProfileIcon(firstName, lastName);
  }

  const logoutButton = document.querySelector('.logout-btn');
  logoutButton.addEventListener('click', logoutUser);
}

function toggleDropMenu(event) {
  const dropMenu = document.querySelector('.profile__dropdown');
  const target = event.target;

  if (target.closest('.profile__icon')) {
    dropMenu.classList.toggle('active');
  } else if (
    (dropMenu.classList.contains('active') && !target.closest('.profile__dropdown')) ||
    target.closest('.dropdown__option')
  ) {
    dropMenu.classList.remove('active');
  }
}

function logoutUser() {
  const profileIcon = document.querySelector('.profile__icon');

  localStorage.removeItem('isSigned');
  profileIcon.parentElement.classList.remove('signed');
  profileIcon.innerHTML = '<img src="img/icons/profile.svg" alt="profile-icon" />';
}

export function setProfileIcon(firstName, lastName) {
  const profileIcon = document.querySelector('.profile__icon');
  profileIcon.parentElement.classList.add('signed');
  profileIcon.innerHTML = `<span title="${firstName} ${lastName}">${firstName.slice(0, 1)}${lastName.slice(
    0,
    1,
  )}</span>`;
}
