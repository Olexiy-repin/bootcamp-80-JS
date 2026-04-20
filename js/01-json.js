/*
 * Формат JSON
 *
 * - Метод JSON.strigify(value)
 * - Метод JSON.parse(value)
 */

// const product = {
//   title: 'Apple',
//   price: 100,
//   description: 'Some text...',
// };
// const productJSON = JSON.stringify(product);

// console.log('product =', product);
// console.log('productJSON =', productJSON);

// const users = [
//   {
//     firstName: 'Madge',
//     lastName: 'Marshall',
//     age: 30,
//   },
//   {
//     firstName: 'Timothy',
//     lastName: 'Dawson',
//     age: 32,
//   },
//   {
//     firstName: 'Michael',
//     lastName: 'Douglas',
//     age: 20,
//   },
// ];

// const usersJSON = JSON.stringify(users);

// console.log('users =', users);
// console.log('usersJSON =', usersJSON);
// console.log(JSON.parse(usersJSON));

// const user = {
//   firstName: 'Todd',
//   lastName: 'Tucker',
//   age: 30,

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log('user =', user);

// const userJSON = JSON.stringify(user);

// console.log('userJSON =', userJSON);

/*
 * Конструкція try...catch для обробки помилок
 */
// console.log('Start');

// try {
//   const user = JSON.parse('{"firstName": "Oleksii", "lastName": "Repin",}');
// } catch (err) {
//   console.log(err);
// }

// console.log('End');
