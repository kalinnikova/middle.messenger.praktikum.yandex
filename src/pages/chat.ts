import {showMessageError} from "../utils/show-errors";
import {addValidation} from "../utils/add-validation";

const chatValidationElements = [{
    inputId: 'message',
    errorId: 'message-error',
    callback: showMessageError
}]

// @ts-ignore
addValidation(chatValidationElements);
