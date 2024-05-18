import { z } from 'zod';

export function ValidateNumber(value: number): boolean {
    const schema = z.number();
    const result = schema.safeParse(value);
    return result.success;
}
