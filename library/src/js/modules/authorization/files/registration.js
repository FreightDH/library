import validateForm from './validation.js';
import { setProfileIcon } from './functions.js';
import { popupClose } from '../../../files/popup.js';

const initRegistration = () => {
  const registerButton = document.querySelector('.register-submit');
  registerButton.addEventListener('click', registerUser);
};

const registerUser = () => {
  const registerForm = document.querySelector('.register');
  const errorCount = validateForm(registerForm);

  if (!errorCount) {
    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    window.user = { firstName, lastName, email, password };

    localStorage.setItem('isSigned', 'true');
    localStorage.setItem(`${firstName}${lastName}`, JSON.stringify(window.user));
    localStorage.setItem('lastUser', JSON.stringify(window.user));

    setProfileIcon(firstName, lastName);
    popupClose(registerForm);
  } else {
    alert('Fill in all required fields!');
  }
};

export default initRegistration;
