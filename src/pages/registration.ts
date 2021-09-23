import {render} from "../utils/renderDOM";
import {Button, ButtonProps} from "../components/button/Button";
import {showEmailError, showLoginError, showNameError, showPasswordError, showPhoneError} from "../utils/show-errors";
import {addValidation, formValidation} from "../utils/add-validation";

const registrationForm  = document.getElementsByTagName('form')[0];

const registrationValidationElements = [
    {
        inputName: 'email',
        errorName: 'email-error',
        callback: showEmailError
    },
    {
        inputName: 'registration-login',
        errorName: 'registration-login-error',
        callback: showLoginError
    },
    {
        inputName: 'first-name',
        errorName: 'first-name-error',
        callback: showNameError
    },
    {
        inputName: 'second-name',
        errorName: 'second-name-error',
        callback: showNameError
    },
    {
        inputName: 'password',
        errorName: 'password-error',
        callback: showPasswordError
    },
    {
        inputName: 'password-2',
        errorName: 'password-2-error',
        callback: showPasswordError
    }
]

addValidation(registrationValidationElements);

function submitRegistrationForm() {
    const isError = formValidation(registrationValidationElements)

    if (!isError) {
        window.location.assign("/chat");
    }
}

const button = new Button(
    <ButtonProps>{
        className: "registration__button",
        title: "Зарегистрироваться",
        id: "registration-button",
        type: "submit"
    });
render(".registration__button-wrapper", button);

registrationForm.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    submitRegistrationForm();
});
