/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const foo = function (a, b) {
//   console.log('Hello world!');
// };

// foo.test = 10;

// console.dir(foo);
// console.log(foo.test);

// TODO: Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message, num) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
//   console.log(num);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Welcome', 100);
// showFullName.apply(user, ['Welcome', 100]);

// TODO: Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Marvin',
//   lastName: 'Jordan',
//   age: 30,
// };

// showFullName.call(anotherUser, 'Hello', 200);
// showFullName.apply(anotherUser, ['Hello', 200]);

// TODO: Викличте функцію changeColor в контексті різних обʼєктів
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'yellow');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.apply(sweater, ['blue']);

// console.log(sweater);

// TODO: Створіть копію функції changeColor з привʼязаним контекстом
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log('hat =', hat);

/*
const changeHatColor = function (color) {
  let this = hat;

  this.color = color;
}
*/

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('yellow');

// console.log('hat =', hat);

// const sweater = {
//   color: 'green',
// };

// console.log('sweater =', sweater);

// const changeSweaterColor = changeColor.bind(sweater);

// changeSweaterColor('red');

// console.log('sweater =', sweater);

// TODO: Передайте метод обʼєкта в якості callback функції
const user = {
  name: 'Luis',
  age: 30,

  showThis: function () {
    console.log('this =', this);
  },

  showName: function () {
    console.log(this.name);
  },
};

const someFunction = callback => {
  callback();
};

someFunction(user.showName.bind(user));
// someFunction(() => {
//   user.showName();
// });
