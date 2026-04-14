/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

const refs = {
  formField: document.querySelector('.js-user-name'),
  checkbox: document.querySelector('.js-policy-checkbox'),
};

/*
TODO: Виводь в консоль все що користувач вводить в input
*/

// refs.formField.addEventListener('input', () => {
//   console.log(refs.formField.value);
// });

/*
TODO: Користувач вводить в input своє ім'я після втрати
TODO: фокусу отримує alert з повідомленням-привітанням
 */

// refs.formField.addEventListener('blur', () => {
//   const fieldValue = refs.formField.value.trim();

//   if (fieldValue.length === 0) {
//     return;
//   }

//   alert(`Welcome ${fieldValue}!`);
// });

// refs.formField.addEventListener('change', () => {
//   const fieldValue = refs.formField.value.trim();

//   if (fieldValue.length === 0) {
//     return;
//   }

//   alert(`Welcome ${fieldValue}!`);
// });

/*
TODO: Після того, як користувач активує чекбокс, виводиться alert
*/
// refs.checkbox.addEventListener('change', () => {
//   console.log('refs.checkbox.checked:', refs.checkbox.checked);

//   if (refs.checkbox.checked) {
//     alert('Done!');
//   }
// });
