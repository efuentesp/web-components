export interface Validator<A> {
    validate: (x: A) => boolean;
    errorMessage?: string;
    requiredMessage?:string;
}

export interface AsyncValidator<A> {
    validate: (x: A) => Promise<boolean>;
    errorMessage?: string;
    requiredMessage?:string;
}

export interface ValidatorEntry {
    name: string;
    options?: any;
}

export const defaultValidator: Validator<any> = {
    validate: (_x: any) => true
}

export function combineValidators<A>(v1: Validator<A>, v2: Validator<A>): Validator<A> {
    let combined: Validator<A>;
    combined = {
        validate: (x: A) => {
            const res1: boolean = v1.validate(x);
            const res2: boolean = v2.validate(x);
            if (!res1) {
                combined.errorMessage = v1.errorMessage;
                combined.requiredMessage= v1.requiredMessage;
            } else if (!res2) {
                combined.errorMessage = v2.errorMessage;
                combined.requiredMessage= v2.requiredMessage;
            }
            return res1 && res2;
        },
    }
    return combined;
}

