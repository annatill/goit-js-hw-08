import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const elements = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

function onFormInput() {
  const email = elements.input.value;
  const message = elements.textarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function onFormSubmit(event) {
  event.preventDefault();

  const inputEl = elements.input.value.trim();
  const textareaEl = elements.textarea.value.trim();

  if (inputEl === '' || textareaEl === '') {
    alert('Please, fill in the form');
    return;
  }
  console.log({
    email: inputEl,
    message: textareaEl,
  });
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function init() {
  elements.form.addEventListener('input', throttle(onFormInput, 500));
  elements.form.addEventListener('submit', onFormSubmit);

  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    elements.input.value = parsedData.email;
    elements.textarea.value = parsedData.message;
  }
}
init();
