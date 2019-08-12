import { Validator } from '../validator';



export function minMaxValidator(params :ILengthValidator ): Validator<string> {
    return {
        validate: (value: string) => {
            value = value || '';
            if (params.min && params.max) {
                return params.min <= Number(value) && Number(value) <= params.max;
            }
            if (params.min) {
                return params.min <= Number(value);
            }
            if (params.max) {
                return Number(value) <= params.max;
            } 
            return true;
        },
        errorMessage:
        params.min && params.max && 
        params.message[0].type==="min-val" &&
        params.message[1].type==="max-val"   ? `${params.message[0].message} y ${params.message[1].message}.`:
        params.min && params.max && 
        params.message[1].type==="min-val" &&
        params.message[0].type==="max-val"   ? `${params.message[1].message} y ${params.message[0].message}.`:
        params.min && params.message[0].type==="min-val"? `${params.message[0].message}.` :
        params.max && params.message[0].type==="max-val"? `${params.message[0].message}.` :''
    };
}

export interface IMessage{
    type:"min-val" | "max-val" | "required",
    message:string
}

export interface ILengthValidator {
    min?    : number,
    max?    : number,
    required?: boolean
    message?: IMessage[] 
}

