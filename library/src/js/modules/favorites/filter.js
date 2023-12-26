import booksInfo from './booksInfo.js';
import { createElement } from '../../files/functions.js';

const initFilter = () => {
  const booksElement = document.querySelector('.filter__picks');
  const seasons = document.querySelectorAll('.params__season');

  for (let i = 0; i < 4; i++) {
    const book = createBook('winter', i);
    booksElement.append(book);
  }

  seasons.forEach((season) => season.addEventListener('click', changeBooks));
};

const createBook = (season, index) => {
  const bookBody = createElement('div', 'picks__book');
  const staff = createElement('div', 'book__staff', 'Staff Picks');
  const title = createElement(
    'div',
    'book__title',
    `${booksInfo[`${season}`][index]['title']} <br> <span>${booksInfo[`${season}`][index]['author']}</span>`,
  );
  const text = createElement('div', 'book__text', `${booksInfo[`${season}`][index]['text']}`);
  const image = createElement(
    'div',
    'book__image',
    `<img src="${booksInfo[`${season}`][index]['image']}" alt="cover">`,
  );
  const button = createElement('button', 'book__btn btn', '<span>Buy</span>');

  bookBody.append(staff, title, text, image, button);
  return bookBody;
};

const changeBooks = (event) => {
  // A place to append books
  const booksElement = document.querySelector('.filter__picks');
  const seasons = document.querySelectorAll('.params__season');

  // Smooth hiding of previous books
  const prevBooks = document.querySelectorAll('.picks__book');
  prevBooks.forEach((book) => book.classList.add('hide'));

  // Change active condition on filter
  seasons.forEach((item) => item.classList.remove('active'));
  event.target.classList.add('active');

  // Creating new books
  for (let i = 0; i < 4; i++) {
    const book = createBook(event.target.textContent.toLowerCase(), i);
    book.classList.add('hide');
    booksElement.append(book);
  }

  // Smooth appearance of new books
  setTimeout(() => {
    prevBooks.forEach((book) => book.remove());
    const newBooks = document.querySelectorAll('.picks__book');
    newBooks.forEach((book) => book.classList.remove('hide'));
  }, 300);
};

export default initFilter;
