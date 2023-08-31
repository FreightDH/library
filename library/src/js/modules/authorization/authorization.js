const profileIcon = document.querySelector('.profile__icon');
const dropMenu = document.querySelector('.profile__dropdown');

document.addEventListener('click', toggleDropMenu);

function toggleDropMenu(event) {
  const target = event.target;

  if (target.closest('.profile__icon')) {
    dropMenu.classList.toggle('active');
  } else if (dropMenu.classList.contains('active') && !target.closest('.profile__dropdown')) {
    dropMenu.classList.remove('active');
  }
}
