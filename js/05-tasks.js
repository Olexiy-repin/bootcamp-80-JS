/*
TODO: Створи об'єкт person, що містить ім'я, прізвище та вік користувача.
TODO: Виведи його у консоль.
*/

// const person = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 30,
// };

// console.log(person);

/*
TODO: Напиши скрипт, який для об'єкта user, послідовно:
TODO: - додає поле mood зі значенням 'happy'
TODO: - замінює значення hobby на 'skydiving'
TODO: - замінює значення premium на false
TODO: - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: false,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// console.log('user =', user);

// const userKeys = Object.keys(user);

// console.log(userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//TODO: Зведіть у квадрат кожен елемент цього об'єкта.
// const coordinates = {
//   x: 2,
//   y: 3,
//   z: 4,
// };

// console.log('coordinates:', coordinates);

// const coordinatesKeys = Object.keys(coordinates);

// console.log(coordinatesKeys);

// for (const key of coordinatesKeys) {
//   coordinates[key] = coordinates[key] ** 2;
// }

// console.log('coordinates:', coordinates);

/*
TODO: Напиши функцію hasProperty(obj, key), яка перевіряє, чи є певний ключ у переданому об'єкті.
*/
// const hasProperty = function (obj, key) {
//   return key in obj;
// };

// const userAlice = { firstName: 'Alice', age: 25 };
// const userLeona = { firstName: 'Leona', age: 25 };

// console.log(hasProperty(userAlice, 'age')); // true
// console.log(hasProperty(userLeona, 'gender')); // false

/*
TODO: Напиши функцію mergeObjects(firstObj, secondObj), яка об'єднує два об'єкти в один.
*/
// const mergeObjects = function (firstObj, secondObj) {
//   const newObj = {};

//   const firstObjKeys = Object.keys(firstObj);

//   for (const key of firstObjKeys) {
//     newObj[key] = firstObj[key];
//   }

//   const secondObjKeys = Object.keys(secondObj);

//   for (const key of secondObjKeys) {
//     newObj[key] = secondObj[key];
//   }

//   return newObj;
// };

// console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, d: 4 }));

/*
TODO: Напиши функцію isObjectEmpty(obj), яка перевіряє, чи містить обʼєкт властивості.
*/
// const isObjectEmpty = function (obj) {
//   const objKeys = Object.keys(obj);

//   return objKeys.length === 0;
// };

// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({ a: 1 })); // false

/*
TODO: У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
TODO: підсумовування всіх зарплат і збережіть результат у змінній sum.
TODO: Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log('salaries:', salaries);

let totalSalary = 0;

const salariesValues = Object.values(salaries);

console.log('salariesValues:', salariesValues);

for (const salaryValue of salariesValues) {
  totalSalary += salaryValue;
}

console.log('totalSalary:', totalSalary);
