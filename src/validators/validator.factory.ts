import { Validator, ValidatorEntry, defaultValidator, combineValidators } from './validator'
import { lengthValidator     } from './length-validator/length-validator';
import { minMaxValidator     } from './min-max-validator/min-max-validator';
import { numberOfLinesValidator } from './number-of-lines-validator/number-of-lines-validator';
import { emailValidator      } from './email-validator/email-validator';
import { integerValidator    } from './integer-validator/integer-validator';
import { requiredValidator   } from './required-validator/required-validator';

export enum ValidatorsName {
    length   = 'length',
    minmax   = 'min-max',
    lines    = 'lines',
    email    = 'email',
    integer  = 'integer',
    required = 'required'
}

export function getValidator<A>(list: Array<string | ValidatorEntry | Validator<A>>): Validator<A> {
    return (list || []).map(v => {
        if (typeof v === 'string') {
            return validatorFactory(v, null);
        } else if ( v && (v as any).name) {
            v = v as ValidatorEntry;
            return validatorFactory(v.name, v.options);
        } else {
            return v as Validator<A>;
        }
    }).reduce(combineValidators, defaultValidator);
}

export function validatorFactory(name: string, options: any): Validator<any> {
    options = options || {};
    switch (name) {
        case (ValidatorsName.length):
           return lengthValidator(options.params);
        case (ValidatorsName.minmax):
            return minMaxValidator(options.params);
        case (ValidatorsName.required):
           return requiredValidator(options.required);
        case (ValidatorsName.lines):
           return numberOfLinesValidator(options.params);
        case (ValidatorsName.email):
           return emailValidator;
        case (ValidatorsName.integer):
           return integerValidator;
        
        default:
           return defaultValidator;
    }
}

