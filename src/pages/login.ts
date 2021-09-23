import {Button, ButtonProps} from "../components/button/Button";
import {render} from "../utils/renderDOM";
import {showLoginError, showNameError, showPasswordError} from "../utils/show-errors";
import {addValidation, formValidation} from "../utils/add-validation";

const loginForm  = document.getElementsByTagName('form')[0];

const chatValidationElements = [
    {
        inputName: 'login',
        errorName: 'login-error',
        callback: showLoginError
    },
    {
        inputName: 'password',
        errorName: 'password-error',
        callback: showPasswordError
    }]

addValidation(chatValidationElements);

const button = new Button(
    <ButtonProps>{
        className: "login__button",
        title: "Войти",
        id: "login-button",
        link: "/chat",
        fn: submitLoginForm
    });
render(".login__button-wrapper", button);

loginForm.addEventListener("submit", function (event: Event) {
    submitLoginForm();
});

function submitLoginForm() {
    formValidation(chatValidationElements);
}
