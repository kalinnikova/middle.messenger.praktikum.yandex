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

function submitLoginForm() {
    const isError = formValidation(chatValidationElements);

    if (!isError) {
        window.location.assign("/chat");
    }
}

const button = new Button(
    <ButtonProps>{
        className: "login__button",
        title: "Войти",
        id: "login-button",
        type: "submit"
    });
render(".login__button-wrapper", button);

loginForm.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    submitLoginForm();
});
