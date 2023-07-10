document.addEventListener('DOMContentLoaded', function() {
    const NAME_REGEXP = /[a-zA-Z]/g;
    const inputName = document.querySelector('input[name="name"]');
    const inputPhone = document.querySelector('input[name="phone"]');
    const inputLocation = document.querySelector('input[name="location"]');
    const textarea = document.querySelector('textarea');
    const borderName = inputName.parentNode.parentNode;
    const borderPhone = inputPhone.parentNode.parentNode;
    const borderLocation = inputLocation.parentNode.parentNode;
    const borderTextarea = textarea.parentNode.parentNode;
    const validationNameText = document.createElement('div');
          validationNameText.classList.add('error');
          validationNameText.style.display = 'none';
          validationNameText.textContent = "Please, enter your name";
          borderName.parentNode.append(validationNameText);
    const validationPhoneText = document.createElement('div');
          validationPhoneText.classList.add('error');
          validationPhoneText.style.display = 'none';
          validationPhoneText.textContent = "Please, enter your phone number";
          borderPhone.parentNode.append(validationPhoneText);
    const validationLocationText = document.createElement('div');
          validationLocationText.classList.add('error');
          validationLocationText.style.display = 'none';
          validationLocationText.textContent = "Please, enter your location";
          borderLocation.parentNode.append(validationLocationText);
    const validationTextareaText = document.createElement('div');
          validationTextareaText.classList.add('error');
          validationTextareaText.classList.add('error-textarea');
          validationTextareaText.style.display = 'none';
          validationTextareaText.textContent = "Please, enter more then 15 letters";
          borderTextarea.parentNode.append(validationTextareaText);
    function validateInputs(nameOfInput, inputBorder, validText, validTest) {
        function onInput() {
            if(validTest(nameOfInput.value)) {
                inputBorder.style.backgroundColor = '#00FF38';
                validText.style.display = 'none';
            } else {
                inputBorder.style.backgroundColor = 'red';
                validText.style.display = 'block';
            }
        }
        nameOfInput.addEventListener('input', onInput);
    }
    function isInputValid(value) {
        return (NAME_REGEXP.test(value) && value.length > 2);
    }
    function isPhoneValid(value) {
        return (value.length > 10);
    }
    function isLocationValid(value) {
        return (value.length > 3);
    }
    function isTextareaValid(value) {
        return (value.length > 15);
    }
    validateInputs(inputName, borderName, validationNameText, isInputValid);
    validateInputs(inputPhone, borderPhone, validationPhoneText, isPhoneValid);
    validateInputs(inputLocation, borderLocation, validationLocationText, isLocationValid);
    validateInputs(textarea, borderTextarea, validationTextareaText, isTextareaValid);
});