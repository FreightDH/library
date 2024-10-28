import validateForm from './validation.js';
import { setProfileIcon } from './helpers.js';
import { popupClose } from '../../../lib/popup.js';
import { generateRandomHexNumber } from '../../../lib/helpers.js';

const initRegistration = () => {
  const registerButton = document.querySelector('.register-submit');
  registerButton.addEventListener('click', registerUser);
};

const registerUser = () => {
  const registerForm = document.querySelector('.register');
  const errorCount = validateForm(registerForm);

  if (!errorCount) {
    const email = document.getElementById('emailInput').value;

    if (localStorage.getItem(email)) {
      alert('This email already registered!');
      return;
    }

    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const password = document.getElementById('passwordInput').value;
    const cardNumber = generateRandomHexNumber();

    window.user = { firstName, lastName, email, password, cardNumber };

    localStorage.setItem('isSigned', 'true');
    localStorage.setItem(`${email}`, JSON.stringify(window.user));
    localStorage.setItem(`${cardNumber}`, JSON.stringify(window.user));
    localStorage.setItem('currentUser', JSON.stringify(window.user));

    setProfileIcon(firstName, lastName);
    popupClose(registerForm);
    registerForm.querySelectorAll('input').forEach((item) => (item.value = ''));
  } else {
    alert('Fill in all required fields!');
  }
};

export default initRegistration;
