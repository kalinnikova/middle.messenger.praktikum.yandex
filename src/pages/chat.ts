import {showMessageError} from "../utils/show-errors";

const message = <HTMLInputElement>document.getElementById("message");
const messageError = document.getElementById("message-error");

type HTMLInputFocusEvent = FocusEvent & {currentTarget: HTMLInputElement}

message?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
    if (messageError) {
        showMessageError(message.value, message, messageError);
    }
});

message?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
    if (messageError) {
        showMessageError(message.value, message, messageError);
    }
});

