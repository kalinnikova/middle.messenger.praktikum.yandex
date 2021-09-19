import {Button, ButtonProps} from "../components/button/Button";
import {render} from "../utils/renderDOM";
import {showLoginError, showNameError, showPasswordError} from "../utils/show-errors";

const loginForm  = document.getElementsByTagName('form')[0];

const login = <HTMLInputElement>document.getElementById("login");
const loginError = document.getElementById("login-error");

const password = <HTMLInputElement>document.getElementById("password");
const passwordError = document.getElementById("password-error");

type HTMLInputFocusEvent = FocusEvent & {currentTarget: HTMLInputElement}

login?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (loginError) {
        showLoginError(login.value, login, loginError);
    }
});

login?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (loginError) {
        showLoginError(login.value, login, loginError);
    }
});

password?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (passwordError) {
        showPasswordError(password.value, password, passwordError);
    }
});

password?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (passwordError) {
        showPasswordError(password.value, password, passwordError);
    }
});

loginForm.addEventListener("submit", function (event: Event) {
    submitLoginForm();
});

const button = new Button(
    <ButtonProps>{
        className: "login__button",
        title: "Войти",
        id: "login-button",
        fn: submitLoginForm
    });
render(".login__button-wrapper", button);

function submitLoginForm() {
    if (login?.value && loginError) {
        showLoginError(login.value, login, loginError);
    }
    if (password?.value && passwordError) {
        showNameError(password.value, password, passwordError);
    }
}
