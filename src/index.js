const inputEmail = document.getElementById('input_email');
const btnSendEmail = document.getElementById('btn_send_email');
const spanInvalidEmailMessage = document.getElementById('span_invalid_email');
const iconInvalidEmail = document.getElementById('icon_invalid_email');

const showInvalidMessage = () => {
    inputEmail.classList.add('invalid-email');
    spanInvalidEmailMessage.style.display = "block";
    iconInvalidEmail.style.display = "block";
};

const clearInvalidMessage = () => {
    inputEmail.classList.remove('invalid-email');
    spanInvalidEmailMessage.style.display = "none";
    iconInvalidEmail.style.display = "none";
};

const validateEmail = () => {
    let email = inputEmail.value;
    let isTaggedInvalid = inputEmail.classList.contains('invalid-email');
    let isValidEmail = /([A-z]{1,}|[A-z]{2,}_[A-z0-9]{1,})@([a-z]{3,15})\.([a-z]{2,5})$/.test(email);
    let modalEmailSuccess = $('#modal-email-success');

    if (isValidEmail == true) {
        modalEmailSuccess.modal('show');
    } else if (isTaggedInvalid == false && isValidEmail == false) {
        showInvalidMessage();
    } else if (isTaggedInvalid == true && isValidEmail == true) {
        clearInvalidMessage();
        modalEmailSuccess.modal('show');
    } else {
        // do nothing
    }
};

inputEmail.addEventListener('keydown', function () {
    let isTaggedInvalid = inputEmail.classList.contains('invalid-email');

    if (isTaggedInvalid == true) {
        clearInvalidMessage();
    } else {
        // do nothing
    }
});


inputEmail.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        validateEmail();
    }
});

btnSendEmail.addEventListener('click', function () {
    validateEmail();
});