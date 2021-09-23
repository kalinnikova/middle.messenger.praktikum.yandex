import {showEmailError, showLoginError, showNameError, showPasswordError, showPhoneError} from "../utils/show-errors";
import {Button, ButtonProps} from "../components/button/Button";
import {render} from "../utils/renderDOM";
import {addValidation, formValidation} from "../utils/add-validation";

const profileForm  = document.getElementsByTagName('form')[0];

const profileValidationElements = [
    {
        inputName: 'profile-email',
        errorName: 'profile-email-error',
        callback: showEmailError
    },
    {
        inputName: 'profile-login',
        errorName: 'profile-login-error',
        callback: showLoginError
    },
    {
        inputName: 'profile-first-name',
        errorName: 'profile-first-name-error',
        callback: showNameError
    },
    {
        inputName: 'profile-second-name',
        errorName: 'profile-second-name-error',
        callback: showNameError
    },
    {
        inputName: 'profile-phone',
        errorName: 'profile-phone-error',
        callback: showPhoneError
    }
]

addValidation(profileValidationElements);

function submitRegistrationForm() {
    const isError = formValidation(profileValidationElements)

    if (!isError) {
        window.location.assign("/chat");
    }
}

const button = new Button(
    <ButtonProps>{
        className: "profile__button",
        title: "Сохранить",
        id: "profile-button",
        type: "submit"
    });
render(".profile__button-wrapper", button);

profileForm.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    submitRegistrationForm();
});
