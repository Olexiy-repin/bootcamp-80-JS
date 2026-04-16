/*
 * Додавання прослуховувача подій на кожен елемент
 */

// TODO: Отримай колір квадрата по якому було здійснено клік
// const refs = {
//   boxes: document.querySelectorAll('.js-box'),
// };

// console.log(refs.boxes);

// refs.boxes.forEach(box => {
//   box.addEventListener('click', event => {
//     console.log(event.target.dataset.bgColor);
//   });
// });

//~ 1 Ітерація
// refs.boxes[0].addEventListener('click', event => {
//   console.log(event.target.dataset.bgColor);
// });

//~ 2 Ітерація
// refs.boxes[1].addEventListener('click', event => {
//   console.log(event.target.dataset.bgColor);
// });

//~ 2 Ітерація
// refs.boxes[2].addEventListener('click', event => {
//   console.log(event.target.dataset.bgColor);
// });

/*
 * Дегегування подій
 */

// TODO: Отримай колір квадрата по якому було здійснено клік
const refs = {
  container: document.querySelector('.js-container'),
};

refs.container.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  console.log(event.target.dataset.bgColor);
  console.dir(event.target);
});
