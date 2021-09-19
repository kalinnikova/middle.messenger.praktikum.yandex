import {validateLogin, validateMessage, validateName, validatePassword, validatePhone} from "./validations";

export function showEmailError(email: HTMLInputElement, emailError: HTMLElement) {
    if (email.validity.valueMissing) {
        emailError.textContent = "Заполните поле e-mail";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Некорректно введен e-mail";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Минимальная длинна e-mail: ${ email.minLength }`;
    }

    email.classList.add("input-error");
    emailError.classList.add("error--active");
}

export function showLoginError(login: string, loginEl: HTMLElement, loginError: HTMLElement) {
    if (validateLogin(login)) {
        loginEl?.classList.remove("input-error");
        loginError.textContent = "";
        loginError.classList.remove("error--active");
    } else {
        loginEl?.classList.add("input-error");
        loginError.textContent = "Логин введен неверно";
        loginError.classList.add("error--active");
    }
}

export function showNameError(name: string, nameEl: HTMLElement, nameError: HTMLElement) {
    if (validateName(name)) {
        nameEl?.classList.remove("input-error");
        nameError.textContent = "";
        nameError.classList.remove("error--active");
    } else {
        nameEl?.classList.add("input-error");
        nameError.textContent = "Имя введено неверно";
        nameError.classList.add("error--active");
    }
}

export function showPhoneError(name: string, phoneEl: HTMLElement, phoneError: HTMLElement) {
    if (validatePhone(name)) {
        phoneEl?.classList.remove("input-error");
        phoneError.textContent = "";
        phoneError.classList.remove("error--active");
    } else {
        phoneEl?.classList.add("input-error");
        phoneError.textContent = "Телефон введен неверно";
        phoneError.classList.add("error--active");
    }
}

export function showPasswordError(password: string, passwordEl: HTMLElement, passwordError: HTMLElement) {
    if (validatePassword(password)) {
        passwordEl?.classList.remove("input-error");
        passwordError.textContent = "";
        passwordError.classList.remove("error--active");
    } else {
        passwordEl?.classList.add("input-error");
        passwordError.textContent = "Пароль введен неверно";
        passwordError.classList.add("error--active");
    }
}

export function showMessageError(message: string, messageEl: HTMLElement, messageError: HTMLElement) {
    if (validateMessage(message)) {
        messageEl?.classList.remove("input-error");
        messageError.textContent = "";
        messageError.classList.remove("error--active");
    } else {
        messageEl?.classList.add("input-error");
        messageError.textContent = "Пароль введен неверно";
        messageError.classList.add("error--active");
    }
}
