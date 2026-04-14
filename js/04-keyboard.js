/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keydown', event => {
//   console.log(`event.code: ${event.code}, event.key: ${event.key}`);
// });

/*
 * Обробка комбінацій клавіш
 */
document.addEventListener('keydown', event => {
  // console.log('event.altKey:', event.altKey);
  // console.log('event.ctrlKey:', event.ctrlKey);
  // console.log('event.metaKey:', event.metaKey);
  // console.log('event.shiftKey:', event.shiftKey);

  // console.log(`event.code: ${event.code}, event.key: ${event.key}`);

  if ((event.ctrlKey || event.metaKey) && event.code === 'KeyF') {
    event.preventDefault();

    console.log('Done!');
  }
});
