import { Validator } from '../validator';



export function lengthValidator(params :ILengthValidator ): Validator<string> {
    return {
        validate: (value: string) => {
            value = value || '';
            if (params.min && params.max) {
                return params.min <= value.length && value.length <= params.max;
            }
            if (params.min) {
                return params.min <= value.length;
            }
            if (params.max) {
                return value.length <= params.max;
            } 
            return true;
        },
        //requiredMessage:
        // params.required && params.message[2].type==="required" ? `${params.message[2].message} ` :''
        //,
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

const msg: IMessage= {type:"required",message:"el campo es requerido"}

console.log(msg)
// Riot "Conectividad"
// Alert del valor ingresado desde riot
// Requerido
// Mensajes customizables
// Refactoring

export function lengthValidatorOriginal(min: number, max: number ): Validator<string> {
    return {
        validate: (value: string) => {
            value = value || '';
            if (min && max) {
                return min <= value.length && value.length <= max;
            }
            if (min) {
                return min <= value.length;
            }
            if (max) {
                return value.length <= max;
            } 
            return true;
        },
        errorMessage:
            min && max ? `You must enter between ${min} and ${max} characters.`
            : min ? `You must enter at least ${min} characters.`
            : max ? `You must enter less than ${max} characters.` : ''
    };
}

