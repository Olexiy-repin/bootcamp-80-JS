/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// const numbers = [5, 10, 15, 20, 25];

// console.log('numbers:', numbers);

/*
~ З ініціалізацією початкового значення для acc
~ 1 Ітерація
  acc = 0;
  el = 5;
  idx = 0;
  arr = numbers;

  return 5;

~ 2 Ітерація
  acc = 5;
  el = 10;
  idx = 1;
  arr = numbers;

  return 15;

~ 3 Ітерація
  acc = 15;
  el = 15;
  idx = 2;
  arr = numbers;

  return 30;

~ 4 Ітерація
  acc = 30;
  el = 20;
  idx = 3;
  arr = numbers;

  return 50;

~ 5 Ітерація
  acc = 50;
  el = 25;
  idx = 4;
  arr = numbers;

  return 75;
*/

/*
~ Без ініціалізації початкового значення для acc

~ 1 Ітерація
  acc = 5;
  el = 10;
  idx = 1;
  arr = numbers;

  return 15;

~ 2 Ітерація
  acc = 15;
  el = 15;
  idx = 2;
  arr = numbers;

  return 30;

~ 3 Ітерація
  acc = 30;
  el = 20;
  idx = 3;
  arr = numbers;

  return 50;

~ 4 Ітерація
  acc = 50;
  el = 25;
  idx = 4;
  arr = numbers;

  return 75;
*/

// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// });

// console.log('total:', total);

// const cardsArr = [
//   {
//     url: 'https://',
//     alt: 'Cat',
//   },
//   {
//     url: 'https://',
//     alt: 'Dog',
//   },
//   {
//     url: 'https://',
//     alt: 'Car',
//   },
// ];
// const cardsTemplate = cardsArr.reduce((acc, el, idx, arr) => {
//   return (
//     acc +
//     ` <li>
//       <a href="">
//         <img src="${el.url}" alt="${el.alt}">
//       </a>
//     </li>`
//   );
// }, '');

// console.log(cardsTemplate);

/*
TODO: Рахуємо загальну зарплату
 */
// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// console.log(salary);

// const salaryValues = Object.values(salary);

// console.log(salaryValues);

// const totalSalary = salaryValues.reduce((acc, salaryValue) => acc + salaryValue);

// console.log(totalSalary);

/*
TODO: Рахуємо загальну кількість годин
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.table(players);

// const totalTimePlayed = players.reduce((acc, el, idx, arr) => {
//   return acc + el.timePlayed;
// }, 0);

// console.log('totalTimePlayed:', totalTimePlayed);

/*
TODO: Рахуємо загальну суму товарів кошика
 */
//~ Повна версія
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// console.table(cart);

// const total = cart.reduce((acc, el, idx, arr) => {
//   return acc + el.price * el.quantity;
// }, 0);

// console.log(total);

//~ Скорочена версія
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// console.table(cart);

// const total = cart.reduce((acc, cartItem) => {
//   return acc + cartItem.price * cartItem.quantity;
// }, 0);

// console.log(total);
