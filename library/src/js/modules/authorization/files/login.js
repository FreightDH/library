import { popupClose } from '../../../files/popup.js';
import { setProfileIcon } from './helpers.js';

const initLogin = () => {
  const loginButton = document.querySelector('.login-submit');
  loginButton.addEventListener('click', checkUser);
};

const checkUser = () => {
  const loginForm = document.querySelector('.login');
  const inputLogin = document.getElementById('emailLoginInput').value;
  const inputPassword = document.getElementById('passwordLoginInput').value;
  const user = JSON.parse(localStorage.getItem(inputLogin));

  if (user.password === inputPassword) {
    document.getElementById('emailLoginInput').value = '';
    document.getElementById('passwordLoginInput').value = '';

    localStorage.setItem('isSigned', 'true');
    localStorage.setItem('lastUser', JSON.stringify(user));
    setProfileIcon(user.firstName, user.lastName);
    popupClose(loginForm);
  } else {
    alert('Incorrect login or password!');
  }
};

export default initLogin;
