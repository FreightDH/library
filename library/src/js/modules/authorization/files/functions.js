const setProfileIcon = (firstName, lastName) => {
  console.log(firstName, lastName);
  const profileIcon = document.querySelector('.profile__icon');
  profileIcon.parentElement.classList.add('signed');
  profileIcon.innerHTML = `<span title="${firstName} ${lastName}">${firstName.slice(0, 1)}${lastName.slice(
    0,
    1,
  )}</span>`;
};

const logoutUser = () => {
  const profileIcon = document.querySelector('.profile__icon');

  localStorage.removeItem('isSigned');
  profileIcon.parentElement.classList.remove('signed');
  profileIcon.innerHTML = '<img src="img/icons/profile.svg" alt="profile-icon" />';
};

const toggleDropMenu = (event) => {
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
};

export { logoutUser, setProfileIcon, toggleDropMenu };
