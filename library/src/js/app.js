import '../scss/style.scss';
import * as myFunctions from './files/functions.js';
import * as menuFunctions from './files/burger.js';
import { initSwiper } from './files/swiper.js';
import { initFilter } from './modules/favorites/filter.js';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();
// Модуль для работы с меню-бургер
menuFunctions.initMenu();
// Слайдер
initSwiper();
// Фильтры
initFilter();

import './modules/favorites/filter.js';
