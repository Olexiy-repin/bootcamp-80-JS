/*
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

/*
TODO: Створення копії масиву примітивів
*/
// const values = [23, 34, 4, 5];
// const valuesCopy = [...values];

// console.log('values =', values);
// console.log('valuesCopy =', valuesCopy);

// valuesCopy[0] = 100;

// console.log('values =', values);
// console.log('valuesCopy =', valuesCopy);

/*
TODO: Створення копії масиву зі складними типами даних
*/
// const users = [
//   {
//     firstName: 'Tillie',
//     lastName: 'McGee',
//   },
//   {
//     firstName: 'Mathilda',
//     lastName: 'Perkins',
//   },
//   {
//     firstName: 'Nathan',
//     lastName: 'Pratt',
//   },
// ];
// const usersCopy = structuredClone(users);

// console.log('users =', users);
// console.log('usersCopy =', usersCopy);

// usersCopy[0].firstName = 'Oleksii';

// console.log('users =', users);
// console.log('usersCopy =', usersCopy);

/*
TODO: Поєднуємо кілька масивів в один через spread
*/
// const lastWeekTemps = [1, 2, 3, 4, 5, 6, 7];
// const currentTemps = [8, 9, 10, 11, 12, 13, 14];
// const nextWeekTemps = [15, 16, 17, 18, 19, 20, 21];

// const allTemps = [100, ...lastWeekTemps, 200, ...currentTemps, 300, ...nextWeekTemps, 400];

// console.log('allTemps:', allTemps);

/*
TODO: Пошук найменшої або найбільшої температури (числа)
*/
//~ 1 Варіант через цикл for
// const temps = [18, 14, 12, 21, 17, 29, 24];

// let min = temps[0];
// let max = temps[0];

// for (let i = 1; i < temps.length; i++) {
//   if (temps[i] < min) {
//     min = temps[i];
//   }
// }

// for (let i = 1; i < temps.length; i++) {
//   if (temps[i] > max) {
//     max = temps[i];
//   }
// }

// console.log(min);
// console.log(max);

//~ 2 Варіант через spread та методи Math.min()/Math.max()
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const minTemp = Math.min(...temps);
// const maxTemp = Math.max(...temps);

// console.log('temps: ', temps);
// console.log('minTemp: ', minTemp);
// console.log('maxTemp: ', maxTemp);

/*
TODO: Створення копії об'єкта
*/
// const obj = { x: 1, y: 2 };
// const objCopy = {
//   ...obj,
// };

// console.log('obj: ', obj);
// console.log('objCopy:', objCopy);

// objCopy.x = 100;

// console.log('obj: ', obj);
// console.log('objCopy:', objCopy);

/*
TODO: Створення копії об'єкта зі складними типами даних
*/
// const user = {
//   firstName: 'Joel',
//   lastName: 'Dean',
//   friends: [
//     {
//       fullName: 'Joe Robbins',
//       isOnline: true,
//     },
//     {
//       fullName: 'Clyde Obrien',
//       isOnline: false,
//     },
//     {
//       fullName: 'Grace Summers',
//       isOnline: false,
//     },
//   ],
// };
// const userCopy = structuredClone(user);

// console.log('user:', user);
// console.log('userCopy:', userCopy);

// userCopy.firstName = 'Oleksii';
// userCopy.friends[0].fullName = 'Jane Warner';

// console.log('user:', user);
// console.log('userCopy:', userCopy);

/*
TODO: Поєднуємо декілько обʼєктів в один через spread
*/
// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {
//   ...objA,
//   ...objB,
// };

// console.log('objA: ', objA);
// console.log('objB: ', objB);
// console.log('objC: ', objC);

/*
TODO: Оновлюємо налаштування користувача
*/
// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

// TODO: Напишіть функцію sum, яка складає довільну кількість аргументів
// const sum = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 40, 60));
// console.log(sum(10, 40, 60, 100, 200, 300, 4000, 5));
