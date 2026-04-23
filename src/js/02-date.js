//* Створення нової дати
// const date = new Date();
// const date = new Date('2026-04-24T00:00:00');
// const date = new Date(2026, 3, 24, 0, 0, 0, 0);
// const date = new Date(10000);

// console.log(date);

// TODO: Створіть об'єкт date для дати: 10 вересня 2022 року, 3 години 12 хвилин.
// const date1 = new Date('2022-09-10T03:12:00');

// console.log(date1);

// const date2 = new Date(2022, 8, 10, 3, 12, 0, 0);

// console.log(date2);

// TODO: Напишіть функцію isWeekend(date), яка перевіряє, чи є даний день вихідним (субота або неділя).
// const isWeekend = dateInstance => {
//   console.dir(dateInstance);

//   const day = dateInstance.getDay();

//   return day === 0 || day === 6;
// };

// const date = new Date('2025-03-12T00:00:00');

// console.log(isWeekend(date));

/*
TODO: Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
TODO: 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'.
*/
// const getWeekDay = dateInstance => {
//   console.log(dateInstance);

//   const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return days[dateInstance.getDay()];
// };

// console.log(getWeekDay(new Date('2023-09-25')));

/*
TODO: Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
TODO: Параметри:
TODO: year – рік з чотирьох цифр, наприклад, 2012.
TODO: month – місяць від 0 до 11.
TODO: Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).
*/
// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));

// TODO: Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.
// const getSecondsToTomorrow = () => {
//   const dateNow = new Date();
//   const dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);

//   console.group('Now');
//   console.log(dateNow);
//   console.log(dateNow.getTime());
//   console.groupEnd();

//   console.group('Tomorrow');
//   console.log(dateTomorrow);
//   console.log(dateTomorrow.getTime());
//   console.groupEnd();

//   const diff = dateTomorrow - dateNow;

//   return Math.trunc(diff / 1000);
// };

// console.log(getSecondsToTomorrow());

/*
TODO: Напишіть функцію isDateInRange(date, startDate, endDate), яка перевіряє,
TODO: чи поточна дата потрапляє в заданий діапазон дат.
*/
// const isDateInRange = (currentDate, startDate, endDate) => {
//   return currentDate - startDate >= 0 && endDate - currentDate >= 0;
// };

// const date = new Date('2025-03-01T00:00:00'); // 01 березня 2025
// const startDate = new Date('2025-03-02T00:00:00'); // 2 березня 2025
// const endDate = new Date('2025-03-10T00:00:00'); // 10 березня 2025

// console.log(isDateInRange(date, startDate, endDate));
