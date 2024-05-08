import { ValueObject } from '../interfaces';
import { ValidateNumber } from '../validation';

export class ValueNumber implements ValueObject<number> {
  _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  equals(valueObject: ValueObject<number>): boolean {
    return this.value === valueObject.value;
  }

  static create(value: number): ValueNumber {
    const isValid = ValidateNumber(value);
    if (!isValid) {
      throw new Error('Invalid value');
    }
    return new ValueNumber(value);
  }
}
