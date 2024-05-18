import { ValueObject } from '../interfaces';
import { Optional } from '@toxictoast/azkaban-base-types';
import { ValidateLength, ValidateString } from '../validation';

export class ValueString implements ValueObject<string> {
    _value: string;

    private constructor(value: string) {
        this._value = value;
    }

    get value(): string {
        return this._value;
    }

    equals(valueObject: ValueObject<string>): boolean {
        return this.value === valueObject.value;
    }

    static create(
        value: string,
        options?: Optional<{ min?: number; max?: number; withTrim?: boolean }>,
    ): ValueString {
        const isValid = ValidateString(value);
        const additionalValidation = ValidateLength(
            value,
            options?.min,
            options?.max,
            options?.withTrim,
        );
        if (!isValid || !additionalValidation) {
            throw new Error('Invalid value');
        }
        return new ValueString(value);
    }
}
