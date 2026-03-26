/*
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

//~ 6 хибних значень: false, NaN, null, undefined, 0, ''.
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(''));

// console.log(Boolean(3.14));
// console.log(Boolean(-10));
// console.log(Boolean('hello'));
// console.log(Boolean('false'));

/*
 ~ Оператор &&
 */

// console.log(false && true);
// console.log(0 && 'Hello');

// const minutes = 0;

// if (minutes >= 0) {
//   if (minutes < 60) {
//     console.log('Done!');
//   }
// }

// if (minutes >= 0 && minutes < 60) {
//   console.log('Done!');
// }

/*
 ~ Оператор ||
 */

// console.log(false || false)
// console.log(0 || null);

// const firstName = prompt('Введіть імʼя') || 'anonym';
// const message = `Welcome ${firstName}`;

// if (firstName === null || firstName === '') {
//   message = `Welcome anonym`;
// } else {
//   message = `Welcome ${firstName}`;
// }

// console.log(message);

/*
 ~ Оператор !
 */

// console.log(!true);
// console.log(!false);
// console.log(!'');
// console.log(!'Hello');

/*
 TODOD: Що буде виведено до консолі?
 */

console.log(true && 3); // 3

console.log(false && 3); // false

console.log(true && 4 && 'kiwi'); // 'kiwi'

console.log(true && 0 && 'kiwi'); // 0

console.log(true || 3); // true

console.log(true || 3 || 4); // true

console.log(true || false || 7); // true

console.log(null || 2 || undefined); // 2

console.log((1 && 0 && 2) > 0); // false

console.log(0 || (2 && 3) || 4); // 3
