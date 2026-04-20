const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
};

let formData = {
  username: '',
  email: '',
  message: '',
};

const fillFormFields = () => {
  try {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formDataFromLS === null) {
      return;
    }

    formData = formDataFromLS;

    const formDataFromLSKeys = Object.keys(formDataFromLS);

    formDataFromLSKeys.forEach(key => {
      refs.feedbackForm.elements[key].value = formDataFromLS[key];
    });
  } catch (err) {
    console.log(err);
  }
};

fillFormFields();

const onFeedbackFormFieldChange = ({ target: formFieldEl }) => {
  const formFieldName = formFieldEl.name;
  const formFieldValue = formFieldEl.value.trim();

  formData[formFieldName] = formFieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    alert('Усі поля мають бути заповнені!');

    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  refs.feedbackForm.reset();
};

refs.feedbackForm.addEventListener('change', onFeedbackFormFieldChange);
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
