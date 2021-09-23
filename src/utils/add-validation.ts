type HTMLInputFocusEvent = FocusEvent & {currentTarget: HTMLInputElement}
type ValidationParameters = {inputName: string, errorName: string, callback: (message: string, messageEl: HTMLElement, messageError: HTMLElement) => boolean}

const addValidationListeners = (inputName: ValidationParameters['inputName'], errorName: ValidationParameters['errorName'], callback: ValidationParameters['callback']) => {
    const inputEl = <HTMLInputElement>document.getElementsByName(inputName)[0];
    const errorEl = document.getElementsByName(errorName)[0];

    inputEl?.addEventListener("focus", function (event: HTMLInputFocusEvent) {
        if (errorEl) {
            callback(inputEl.value, inputEl, errorEl);
        }
    });

    inputEl?.addEventListener("blur", function (event: HTMLInputFocusEvent) {
        if (errorEl) {
            callback(inputEl.value, inputEl, errorEl);
        }
    });
}

const addSubmitValidations = (inputName: ValidationParameters['inputName'], errorName: ValidationParameters['errorName'], callback: ValidationParameters['callback']) => {
    const inputEl = <HTMLInputElement>document.getElementsByName(inputName)[0];
    const errorEl = document.getElementsByName(errorName)[0];

    if (errorEl) {
        return callback(inputEl.value, inputEl, errorEl);
    }

    return false;
}

export const addValidation = (validationParameters: ValidationParameters[]) => {
    validationParameters.forEach(({inputName, errorName, callback}) => addValidationListeners(inputName, errorName, callback));
}

export const formValidation = (validationParameters: ValidationParameters[]) => {
    const errors = validationParameters.map(({inputName, errorName, callback}) => addSubmitValidations(inputName, errorName, callback));

    return errors.includes(true);
}
