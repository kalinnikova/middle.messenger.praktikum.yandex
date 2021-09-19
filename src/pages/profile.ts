import {showEmailError, showLoginError, showNameError, showPasswordError, showPhoneError} from "../utils/show-errors";
import {Button, ButtonProps} from "../components/button/Button";
import {render} from "../utils/renderDOM";

const profileForm  = document.getElementsByTagName('form')[0];

const profileEmail = <HTMLInputElement>document.getElementById("profile-email");
const profileEmailError = document.getElementById("profile-email-error");

const profileLogin = <HTMLInputElement>document.getElementById("profile-login");
const profileLoginError = document.getElementById("profile-login-error");

const profileFirstName = <HTMLInputElement>document.getElementById("profile-first-name");
const profileFirstNameError = <HTMLInputElement>document.getElementById("profile-first-name-error");

const profileSecondName = <HTMLInputElement>document.getElementById("profile-second-name");
const profileSecondNameError = document.getElementById("profile-second-name-error");

const profilePhone = <HTMLInputElement>document.getElementById("profile-phone");
const profilePhoneError = document.getElementById("profile-phone-error");

type HTMLInputFocusEvent = FocusEvent & {currentTarget: HTMLInputElement}

profileEmail?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (profileEmail.validity.valid && profileEmailError) {
        profileEmailError.textContent = "";
        profileEmail.classList.remove("input-error");
        profileEmailError.classList.remove("input-error");
    } else {
        showEmailError(profileEmail, profileEmailError!);
    }
});

profileEmail?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (profileEmail.validity.valid && profileEmailError) {
        profileEmailError.textContent = "";
        profileEmail.classList.remove("input-error");
        profileEmailError.classList.remove("error");
    } else {
        showEmailError(profileEmail, profileEmailError!);
    }
});

profileLogin?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && profileLoginError) {
        showLoginError(event.currentTarget.value, event.currentTarget, profileLoginError);
    }
});

profileLogin?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && profileLoginError) {
        showLoginError(event.currentTarget.value, event.currentTarget, profileLoginError);
    }
});

profileFirstName?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && profileFirstNameError) {
        showNameError(event.currentTarget.value, event.currentTarget, profileFirstNameError);
    }
});

profileFirstName?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && profileFirstNameError) {
        showNameError(event.currentTarget.value, event.currentTarget, profileFirstNameError);
    }
});

profileSecondName?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && profileSecondNameError) {
        showNameError(event.currentTarget.value, event.currentTarget, profileSecondNameError);
    }
});

profileSecondName?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && profileSecondNameError) {
        showNameError(event.currentTarget.value, event.currentTarget, profileSecondNameError);
    }
});

profilePhone?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && profilePhoneError) {
        showNameError(event.currentTarget.value, event.currentTarget, profilePhoneError);
    }
});

profilePhone?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (event.currentTarget?.value && profilePhoneError) {
        showNameError(event.currentTarget.value, event.currentTarget, profilePhoneError);
    }
});

const button = new Button(
    <ButtonProps>{
        className: "profile__button",
        title: "Сохранить",
        id: "profile-button",
        fn: submitRegistrationForm
    });
render(".profile__button-wrapper", button);

profileForm.addEventListener("submit", function (event: Event) {
    submitRegistrationForm();
});

function submitRegistrationForm() {
    if (!profileEmail.validity.valid && profileEmailError) {
        showEmailError(profileEmail, profileEmailError);
    }
    if (profileLogin?.value && profileLoginError) {
        showLoginError(profileLogin.value, profileLogin, profileLoginError);
    }
    if (profileFirstName?.value && profileFirstNameError) {
        showNameError(profileFirstName.value, profileFirstName, profileFirstNameError);
    }
    if (profileSecondName?.value && profileSecondNameError) {
        showNameError(profileSecondName.value, profileSecondName, profileSecondNameError);
    }
    if (profilePhone?.value && profilePhoneError) {
        showPhoneError(profilePhone.value, profilePhone, profilePhoneError);
    }
}
