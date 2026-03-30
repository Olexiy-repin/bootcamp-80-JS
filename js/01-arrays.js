/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */

const courses = ['HTML', 'CSS', 'JS', 'React'];

console.log(courses);

console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);

courses[0] = 'HTML Fundamentals';

console.log(courses);
console.log(courses.length);

const firstCourse = courses[0];

console.log(firstCourse);

const lastCourse = courses[courses.length - 1];

console.log(lastCourse);
