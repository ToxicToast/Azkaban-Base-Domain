import { z } from 'zod';
import { Optional } from '@toxictoast/azkaban-base-types';

export function ValidateString(value: string): boolean {
    const schema = z.string();
    const result = schema.safeParse(value);
    return result.success;
}
