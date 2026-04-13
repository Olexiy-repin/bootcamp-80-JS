/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

//* Робота з інлайновими стилями
// const refs = {
//   navLink: document.querySelector('.js-site-nav-link'),
// };

// console.log(refs);

// refs.navLink.style.color = 'teal';
// refs.navLink.style.fontSize = '32px';
// refs.navLink.style.backgroundColor = 'tomato';

// refs.navLink.style.cssText = 'color: teal; font-size: 32px; background-color: tomato;';

//* Робота з класами
const refs = {
  backdrop: document.querySelector('.js-backdrop'),
};

console.log(refs);

// refs.backdrop.classList.add('is-open');
// refs.backdrop.classList.remove('is-open');

// if (refs.mobileMenu.classList.contains('is-open')) {
//   refs.mobileMenu.classList.remove('is-open');
// } else {
//   refs.mobileMenu.classList.add('is-open');
// }

refs.backdrop.classList.toggle('is-open');
refs.backdrop.classList.toggle('is-open');
refs.backdrop.classList.toggle('is-open');
refs.backdrop.classList.toggle('is-open');
