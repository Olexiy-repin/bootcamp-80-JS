/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const userMethods = {
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   setEmail: function (newEmail) {
//     if (newEmail.includes('@')) {
//       this.email = newEmail;
//     }
//   },
// };

// const userElva = Object.create(userMethods);

// userElva.firstName = 'Elva';
// userElva.lastName = 'Arnold';
// userElva.email = 'elva@gmail.com';

// console.log('userElva =', userElva);
// console.log(userElva.getFullName());
// userElva.setEmail('elva_arnold@gmail.com');
// console.log(userElva);

// const userDuane = Object.create(userMethods);

// userDuane.firstName = 'Duane';
// userDuane.lastName = 'Nunez';
// userDuane.email = 'duane@gmail.com';

// console.log('userDuane =', userDuane);

// console.log(userDuane.getFullName());
// userDuane.setEmail('duane_nunez@gmail.com');
// console.log('userDuane =', userDuane);

// const userElva = {
//   firstName: 'Elva',
//   lastName: 'Arnold',
//   email: 'elva@gmail.com',

//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   setEmail: function (newEmail) {
//     if (newEmail.includes('@')) {
//       this.email = newEmail;
//     }
//   },
// };

// const userDuane = {
//   firstName: 'Duane',
//   lastName: 'Nunez',
//   email: 'duane@gmail.com',

//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   setEmail: function (newEmail) {
//     if (newEmail.includes('@')) {
//       this.email = newEmail;
//     }
//   },
// };

// console.log(userElva);
// console.log(userDuane);

/*
 * Перебір власних властивостей з hasOwnProperty()
 */
// const objC = {
//   propertyC: 'obj C',
// };

// const objB = Object.create(objC);

// objB.propertyB = 'obj B';

// const objA = Object.create(objB);

// objA.propertyA = 'obj A';

// console.log(objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(`${key}: ${objA[key]}`);
//   }
// }

// const objKeys = Object.keys(objA);

// console.log(objKeys);
