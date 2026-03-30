/*
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */

/*
TODO: Створіть змінну num = 10.
TODO: Створіть та привласніть змінній numCopy, значення змінної num.
TODO: Виведіть до консолі обидві ці змінні.
TODO: Змініть значення змінної num і ще раз виведіть у консоль.
*/

// let num = 10;
// const numCopy = num;

// console.log('num =', num);
// console.log('numCopy =', numCopy);

// num = 100;

// console.log('num =', num);
// console.log('numCopy =', numCopy);

/*
TODO: Створіть масив numbers = [1, 2, 3].
TODO: Створіть та привласніть змінній numbersCopy, значення змінної numbers.
TODO: Виведіть до консолі обидва цих масива.
TODO: Перезапишіть перший елемент в масиві numbersCopy і ще раз виведіть обидва масива до консолі.
*/

const numbers = [1, 2, 3];
const numbersCopy = [1, 2, 3];

console.log('numbers =', numbers);
console.log('numbersCopy =', numbersCopy);

numbersCopy[0] = 100;

console.log('numbers =', numbers);
console.log('numbersCopy =', numbersCopy);

console.log(numbers === numbersCopy);
