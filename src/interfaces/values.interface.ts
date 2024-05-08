export interface ValueObject<Primitive> {
  readonly _value: Primitive;

  get value(): Primitive;

  equals(valueObject: ValueObject<Primitive>): boolean;
}
