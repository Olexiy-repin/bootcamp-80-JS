/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
TODO: Оброби форму та збережи відгук користувача в об'єкт
*/
const refs = {
  feedbackForm: document.querySelector('.js-form'),
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const formData = {
    email: refs.feedbackForm.elements.email.value.trim(),
    username: refs.feedbackForm.elements.username.value.trim(),
    comment: refs.feedbackForm.elements.comment.value.trim(),
  };

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    alert('Усі поля форми мають бути заповнені!');

    return;
  }

  console.log(formData);

  refs.feedbackForm.reset();
};

refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
