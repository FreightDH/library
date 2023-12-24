import { formValidate } from './validation.js';
import { popupClose } from '../../../files/popup.js';
import { setProfileIcon } from '../authorization.js';

export function initRegistration() {
  const registerButton = document.querySelector('.register-submit');
  registerButton.addEventListener('click', registerUser);
}

function registerUser() {
  const registerForm = document.querySelector('.register');
  const profileIcon = document.querySelector('.profile__icon');
  const errorCount = formValidate(registerForm);

  if (!errorCount) {
    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    localStorage.setItem('isSigned', 'true');
    localStorage.setItem('user-data', `${firstName} ${lastName} ${email} ${password}`);

    setProfileIcon(firstName, lastName);
    popupClose(registerForm);
  } else {
    alert('Fill in all required fields!');
  }
}
