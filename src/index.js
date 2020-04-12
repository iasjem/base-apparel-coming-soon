const inputEmail = document.getElementById('input_email');
const btnSendEmail = document.getElementById('btn_send_email');
const spanInvalidEmailMessage = document.getElementById('span_invalid_email');
const iconInvalidEmail = document.getElementById('icon_invalid_email');

inputEmail.addEventListener('keydown', function () {
    let isTaggedInvalid = inputEmail.classList.contains('invalid-email');

    if (isTaggedInvalid == true) {
        console.log('alright')
        inputEmail.classList.remove('invalid-email');
        spanInvalidEmailMessage.style.display = "none";
        iconInvalidEmail.style.display = "none";
    } else {
        // do nothing
    }
});

btnSendEmail.addEventListener('click', function () {
    let email = inputEmail.value;
    let isTaggedInvalid = inputEmail.classList.contains('invalid-email');
    let isValidEmail = /([A-z]{1,}|[A-z]{2,}_[A-z0-9]{1,})@([a-z]{3,15})\.([a-z]{2,5})$/.test(email);

    if (isTaggedInvalid == false && isValidEmail == false) {
        inputEmail.classList.add('invalid-email');
        spanInvalidEmailMessage.style.display = "block";
        iconInvalidEmail.style.display = "block";
    } else if (isTaggedInvalid == true && isValidEmail == true) {
        inputEmail.classList.remove('invalid-email');
        spanInvalidEmailMessage.style.display = "none";
        iconInvalidEmail.style.display = "none";
    } else {
        // do nothing
    }
});