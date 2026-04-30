/*
 * Синтаксис async/await
 * try...catch
 */

import axios from 'axios';

// const fn = async () => {
//   try {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const isSuccess = Math.random() >= 0.5;

//         if (isSuccess) {
//           resolve('Done!');
//         } else {
//           reject('My Error!');
//         }
//       }, 2000);
//     });

//     const result = await promise;

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fn();

//TODO: Запит за постами і обробка відповіді через async/await
//~ Запит за поставми і обрабка через then, catch.
// const getPosts = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }

//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// getPosts();

//~ Запит за постами і обробка відповіді через async/await та метод fetch()
// const getPosts = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getPosts();

//~ Запит за постами і обробка відповіді через async/await та функцію axios
// const getPosts = async () => {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getPosts();

//TODO: Запит за постами і обробка відповіді через async/await та then()/catch()
//~ Використовуючи fetch()
// const getPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// };

// const fn = async () => {
//   try {
//     const data = await getPosts();

//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fn();

// getPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//~ Використовуючи axios()
// const getPosts = () => {
//   return axios.get('https://jsonplaceholder.typicode.com/posts');
// };

// getPosts()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// TODO: Запит за постами і обробка відповіді через async/await на верхньому рівні модуля
// const getPosts = () => {
//   return axios.get('https://jsonplaceholder.typicode.com/posts');
// };

// const response = await getPosts();

// console.log(response);
