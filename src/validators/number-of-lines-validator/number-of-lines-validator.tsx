import { Validator } from '../validator';

export function numberOfLinesValidator(params :ILinesValidator ): Validator<string> {
    return {
       
        validate: (value: string) => {
            value = value || '';
            var nLines = value.split(/\r*\n/).length;
            return !(nLines > Number(params.rows)) 
        },
        errorMessage: params.rows ? `${params.message}.`:''
    };
}

export interface ILinesValidator {
rows?    : number,
message?  : string
}