import { Validator } from '../validator';

export function requiredValidator(required: string): Validator<string> {
    return {
        validate: (value: string) => {
            value = value || '';
            if (required) {
                return (!value && required.toLowerCase() == 'true');
            }
            return true;
        },
        errorMessage: required ? `* Campo Requerido`:``
    };
}