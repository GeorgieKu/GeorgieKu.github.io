const input = document.getElementById('form__input');
const button = document.getElementById('form__btn');

button.disabled = true;

input.addEventListener('input', function() {
  if (input.value.trim() === '') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});