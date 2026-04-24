/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isSuccess = Math.random() >= 0.5;

//     if (isSuccess) {
//       resolve('Done!');
//     } else {
//       reject('My Error!');
//     }
//   }, 2000);
// });

// console.log(promise);

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */
// promise
//   .then(result => {
//     console.log(result);

//     return 'Hello';
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     // preloader.stop();

//     console.log('Hello from finally!');
//   });

// TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// console.log(promise);

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

// TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('Error');
// });

// console.log(promise);

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err); // 'Error'
//   });

//~ Event loop
// console.log('Start');

// const promise = new Promise((resolve, reject) => {
//   console.log('Hello from class Promise!');

//   resolve('Done!');
// });

// setTimeout(() => {
//   console.log('Hello from setTimeout!');
// }, 0);

// promise.then(result => {
//   console.log(result);
// });

// console.log('End');
