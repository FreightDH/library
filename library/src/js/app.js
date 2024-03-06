import '../scss/style.scss';
import { isWebp } from './lib/helpers.js';
import initMenu from './lib/burger.js';
import initSwiper from './lib/swiper.js';
import initFilter from './modules/favorites/filter.js';
import initAuthorization from './modules/authorization/authorization.js';

window.addEventListener('load', () => {
  isWebp();
  initMenu();
  initSwiper();
  initFilter();
  initAuthorization();

  document.querySelector('.modal').classList.add('visible');
  document.querySelector('.profile__dropdown').classList.add('visible');
});
