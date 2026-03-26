/*
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

/*
TODO: Запросіть у користувача число, якщо число дорівнює 10,
TODO: то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/
// const userNumber = Number(prompt('Введіть число 10!'));

// if (userNumber === 10) {
//   console.log('Вірно');
// } else {
//   console.log('Невірно');
// }

/*
TODO: Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.
*/
// const balance = 100;

// if (balance > 0) {
//   console.log('Positive');
// } else {
//   console.log('Negative');
// }

/*
TODO: В залежності від значення в змінній login, потрібно формувати відповідне повідомлення.
TODO: Співробітник - Привіт
TODO: Директор - Вітаю
TODO: '' - Немає логіну
TODO: В інших випадках повідомлення має бути порожнім.
*/
// const login = 'Співробітник';
// let message;

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);

// if () {}

// if () {} else {}

// if () {} else if () {}

// if () {} else if () {} else {}

/*
TODO: Перепишіть конструкцію if з використанням тернарного оператора.
*/
// const a = 4;
// const b = 1;

// const result = a + b < 4 ? 'Мало' : 'Багато';

// a + b < 4 ? (result = 'Мало') : (result = 'Багато');

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// console.log(result);

/*
TODO: Перепишіть if..else за допомогою декількох тернарних операторів.
*/
// const login = 'Директор';
// let message =
//   login === 'Співробітник'
//     ? 'Привіт'
//     : login === 'Директор'
//       ? 'Вітаю'
//       : login === ''
//         ? 'Немає логіну'
//         : '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);
