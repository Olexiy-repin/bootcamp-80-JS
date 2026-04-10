/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//* Функція конструктор
// const User = function (firstName, lastName, email, tel) {
//   // let this = {};
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.tel = tel;
//   // return this;
// };

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// User.prototype.setEmail = function (newEmail) {
//   if (newEmail.includes('@')) {
//     this.email = newEmail;
//   }
// };

// const userRoger = new User('Roger', 'Dixon', 'roger@gmail.com', '(807) 578-8328');

// console.log('userRoger =', userRoger);
// console.log(userRoger.getFullName());
// userRoger.setEmail('roger_dixon@gmail.com');
// console.log('userRoger =', userRoger);

// const userJoel = new User('Joel', 'Jensen', 'joel@gmail.com', '(213) 868-1810');

// console.log('userJoel =', userJoel);
// console.log(userJoel.getFullName());
// userJoel.setEmail('joel_jensen@gmail.com');
// console.log('userJoel =', userJoel);

//* Клас
// class User {
//   #email;
//   #tel;
//   static userCounter = 0;

//   constructor(firstName, lastName, email, tel) {
//     // let this = {}
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.#email = email;
//     this.#tel = tel;

//     User.userCounter++;
//     // return this;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   setEmail(newEmail) {
//     if (newEmail.includes('@')) {
//       this.#email = newEmail;
//     }
//   }

//   get tel() {
//     return this.#tel;
//   }

//   set tel(newTel) {
//     if (typeof newTel === 'string') {
//       this.#tel = newTel;
//     }
//   }
// }

// const userRoger = new User('Roger', 'Dixon', 'roger@gmail.com', '(807) 578-8328');

// console.log('userRoger =', userRoger);
// console.log(userRoger.getFullName());

// console.log(userRoger.getEmail());
// userRoger.setEmail('roger_dixon@gmail.com');
// console.log(userRoger.getEmail());
// console.log(userRoger.tel);
// userRoger.tel = '(953) 983-7099';
// console.log(userRoger.tel);

// const userJoel = new User('Joel', 'Jensen', 'joel@gmail.com', '(213) 868-1810');

// console.log('userJoel =', userJoel);
// console.log(userJoel.getFullName());

// console.log(userJoel.getEmail());
// userJoel.setEmail('joel_jensen@gmail.com');
// console.log(userJoel.getEmail());
// console.log(userJoel.tel);
// userJoel.tel = '(633) 998-9496';
// console.log(userJoel.tel);

// console.log(User.userCounter);
