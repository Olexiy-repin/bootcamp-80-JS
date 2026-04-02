/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// TODO: Порахуйте загальну кількість відгуків.

//~ Через цикл for...in
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks:', feedbacks);

// let totalFeedback = 0;

// for (const key in feedbacks) {
//   totalFeedback += feedbacks[key];
// }

// console.log(totalFeedback);

//~ Через метод Object.keys()
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks:', feedbacks);

// let totalFeedback = 0;

// const feedbacksKeys = Object.keys(feedbacks);

// console.log(feedbacksKeys);

// for (const feedbackKey of feedbacksKeys) {
//   totalFeedback += feedbacks[feedbackKey];
// }

// console.log(totalFeedback);

//~ Через метод Object.values()
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks:', feedbacks);

// let totalFeedback = 0;

// const feedbackValues = Object.values(feedbacks);

// console.log(feedbackValues);

// for (const value of feedbackValues) {
//   totalFeedback += value;
// }

// console.log(totalFeedback);
