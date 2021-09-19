import {render} from "../utils/renderDOM";
import {Button, ButtonProps} from "../components/button/Button";
import {showEmailError, showLoginError, showNameError, showPasswordError, showPhoneError} from "../utils/show-errors";

const registrationForm  = document.getElementsByTagName('form')[0];

const email = <HTMLInputElement>document.getElementById("email");
const emailError = document.getElementById("email-error");

const registrationLogin = <HTMLInputElement>document.getElementById("registration-login");
const registrationLoginError = document.getElementById("registration-login-error");

const firstName = <HTMLInputElement>document.getElementById("first-name");
const firstNameError = <HTMLInputElement>document.getElementById("first-name-error");

const secondName = <HTMLInputElement>document.getElementById("second-name");
const secondNameError = document.getElementById("second-name-error");

const phone = <HTMLInputElement>document.getElementById("phone");
const phoneError = document.getElementById("phone-error");

const registrationPassword = <HTMLInputElement>document.getElementById("password");
const registrationPasswordError = document.getElementById("password-error");

const registrationPassword2 = <HTMLInputElement>document.getElementById("password-2");
const registrationPassword2Error = document.getElementById("password-2-error");

type HTMLInputFocusEvent = FocusEvent & {currentTarget: HTMLInputElement}

email?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (email.validity.valid && emailError) {
        emailError.textContent = "";
        email.classList.remove("input-error");
        emailError.classList.remove("input-error");
    } else {
        showEmailError(email, emailError!);
    }
});

email?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (email.validity.valid && emailError) {
        emailError.textContent = "";
        email.classList.remove("input-error");
        emailError.classList.remove("error");
    } else {
        showEmailError(email, emailError!);
    }
});

registrationLogin?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && registrationLoginError) {
        showLoginError(event.currentTarget.value, event.currentTarget, registrationLoginError);
    }
});

registrationLogin?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && registrationLoginError) {
        showLoginError(event.currentTarget.value, event.currentTarget, registrationLoginError);
    }
});

firstName?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && firstNameError) {
        showNameError(event.currentTarget.value, event.currentTarget, firstNameError);
    }
});

firstName?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && firstNameError) {
        showNameError(event.currentTarget.value, event.currentTarget, firstNameError);
    }
});

secondName?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && secondNameError) {
        showNameError(event.currentTarget.value, event.currentTarget, secondNameError);
    }
});

secondName?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && secondNameError) {
        showNameError(event.currentTarget.value, event.currentTarget, secondNameError);
    }
});

phone?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && phoneError) {
        showNameError(event.currentTarget.value, event.currentTarget, phoneError);
    }
});

phone?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && phoneError) {
        showNameError(event.currentTarget.value, event.currentTarget, phoneError);
    }
});

registrationPassword?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && registrationPasswordError) {
        showPasswordError(event.currentTarget.value, event.currentTarget, registrationPasswordError);
    }
});

registrationPassword?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && registrationPasswordError) {
        showPasswordError(event.currentTarget.value, event.currentTarget, registrationPasswordError);
    }
});

registrationPassword2?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && registrationPasswordError) {
        showPasswordError(event.currentTarget.value, event.currentTarget, registrationPasswordError);
    }
});

registrationPassword2?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && registrationPasswordError) {
        showPasswordError(event.currentTarget.value, event.currentTarget, registrationPasswordError);
    }
});

const button = new Button(
    <ButtonProps>{
        className: "registration__button",
        title: "Зарегистрироваться",
        id: "registration-button",
        fn: submitRegistrationForm
    });
render(".registration__button-wrapper", button);

registrationForm.addEventListener("submit", function (event: Event) {
    submitRegistrationForm();
});

function submitRegistrationForm() {
    if (!email.validity.valid && emailError) {
        showEmailError(email, emailError);
    }
    if (registrationLogin?.value && registrationLoginError) {
        showLoginError(registrationLogin.value, registrationLogin, registrationLoginError);
    }
    if (firstName?.value && firstNameError) {
        showNameError(firstName.value, firstName, firstNameError);
    }
    if (secondName?.value && secondNameError) {
        showNameError(secondName.value, secondName, secondNameError);
    }
    if (phone?.value && phoneError) {
        showPhoneError(phone.value, phone, phoneError);
    }
    if (registrationPassword?.value && registrationPasswordError) {
        showPasswordError(registrationPassword.value, registrationPassword, registrationPasswordError);
    }
    if (registrationPassword2?.value && registrationPassword2Error) {
        showPasswordError(registrationPassword2.value, registrationPassword2, registrationPassword2Error);
    }
}