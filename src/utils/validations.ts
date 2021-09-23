
export const validateName = (value: string): boolean => {
    const validationRe = /^[A-ZА-Я][a-zа-я\-]+$/gi;
    return validationRe.test(value);
}

export const validateLogin = (value: string): boolean => {
    const validationRe = /^(\w[\_\-]*){3,20}$/gi;
    const nonDigitalRe = /\D/gi;
    return nonDigitalRe.test(value) && validationRe.test(value);
}

export const validateEmail = (value: string): boolean => {
    const validationRe = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/gi
    return validationRe.test(value);
}

export const validatePassword = (value: string): boolean => {
    return !(value.length < 8 && value.length > 40);
}

export const validatePhone = (value: string): boolean => {
    const validationRe = /^\+?\d{8,15}$/gi
    return validationRe.test(value);
}

export const validateMessage = (value: string): boolean => {
    return value.length > 0;
}
