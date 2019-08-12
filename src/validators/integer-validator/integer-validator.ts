import { Validator } from '../validator';

export const integerValidator: Validator<string> = {
    validate: (value: string) => {
        return value.match(/^-?\d+$/) ? true : false;
    },
    errorMessage: 'Debes introducir un entero válido.'
}
