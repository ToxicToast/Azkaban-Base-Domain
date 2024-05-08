import { z } from 'zod';

export function ValidateBoolean(value: boolean): boolean {
  const schema = z.boolean();
  const result = schema.safeParse(value);
  return result.success;
}
