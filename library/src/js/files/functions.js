// ПРОВЕРКА ПОДДЕРЖКИ WEBP
const isWebp = () => {
  // Проверка поддержки webp
  function testWebP(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      callback(webP.height === 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebP((support) => {
    const className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
};
//----------------------------------------------------------------------
// МОДУЛИ БЛОКИРОВКИ ПРОКРУТКИ
let bodyLockStatus = true;

const unlockBody = (delay = 300) => {
  const body = document.querySelector('body');
  if (bodyLockStatus) {
    const lockPadding = document.querySelectorAll('[data-lp]');
    setTimeout(() => {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      document.documentElement.classList.remove('lock');
    }, delay);

    bodyLockStatus = false;
    setTimeout(() => {
      bodyLockStatus = true;
    }, delay);
  }
};

const lockBody = (delay = 300) => {
  const body = document.querySelector('body');
  if (bodyLockStatus) {
    const lockPadding = document.querySelectorAll('[data-lp]');
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = `${window.innerWidth - document.querySelector('.wrapper').offsetWidth}px`;
    }
    body.style.paddingRight = `${window.innerWidth - document.querySelector('.wrapper').offsetWidth}px`;
    document.documentElement.classList.add('lock');

    bodyLockStatus = false;
    setTimeout(() => {
      bodyLockStatus = true;
    }, delay);
  }
};

const bodyLockToggle = (delay = 300) => {
  if (document.documentElement.classList.contains('lock')) {
    unlockBody(delay);
  } else {
    lockBody(delay);
  }
};
//----------------------------------------------------------------------
// СОЗДАНИЕ ЭЛЕМЕНТА
const createElement = (tag = 'div', classname = '', content = '') => {
  const element = document.createElement(tag);
  element.className = `${classname}`;
  element.innerHTML = `${content}`;

  return element;
};
//----------------------------------------------------------------------

export { isWebp, lockBody, unlockBody, bodyLockToggle, bodyLockStatus, createElement };
