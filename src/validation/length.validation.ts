import { z } from 'zod';
import { Optional } from '@toxictoast/azkaban-base-types';

export function ValidateLength(
    value: string,
    min?: Optional<number>,
    max?: Optional<number>,
    withTrim?: Optional<boolean>,
): boolean {
    const schema = z.string();
    if (withTrim === true) {
        schema.trim();
    }
    if (min) {
        schema.min(min);
    }
    if (max) {
        schema.max(max);
    }
    const result = schema.safeParse(value);
    return result.success;
}
