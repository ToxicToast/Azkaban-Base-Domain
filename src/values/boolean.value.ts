import { ValueObject } from '../interfaces';
import { ValidateBoolean } from '../validation';

export class ValueBoolean implements ValueObject<boolean> {
  _value: boolean;

  private constructor(value: boolean) {
    this._value = value;
  }

  get value(): boolean {
    return this._value;
  }

  equals(valueObject: ValueObject<boolean>): boolean {
    return this.value === valueObject.value;
  }

  static create(value: boolean): ValueBoolean {
    const isValid = ValidateBoolean(value);
    if (!isValid) {
      throw new Error('Invalid value');
    }
    return new ValueBoolean(value);
  }
}
