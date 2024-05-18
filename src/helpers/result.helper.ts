import { Either, Optional } from '@toxictoast/azkaban-base-types';

export class Result<T> {
    private _isSuccess: boolean;
    private _isFailure: boolean;
    private _error?: Optional<Either<T, string>>;
    private _value?: Optional<T>;

    constructor(
        isSuccess: boolean,
        error?: Optional<Either<T, string>>,
        value?: Optional<T>,
    ) {
        if (isSuccess && error) {
            throw new Error(
                'InvalidOperation: A result cannot be successful and contain an error',
            );
        }
        if (!isSuccess && !error) {
            throw new Error(
                'InvalidOperation: A failing result needs to contain an error message',
            );
        }
        this._isSuccess = isSuccess;
        this._isFailure = !isSuccess;
        this._error = error;
        this._value = value;
        Object.freeze(this);
    }

    get value(): Optional<T> {
        if (!this._isSuccess) {
            throw new Error(
                "Can't get the value of an error result. Use 'errorValue' instead.",
            );
        }
        return this._value;
    }

    get errorValue(): Optional<Either<T, string>> {
        return this._error;
    }

    get isSuccess(): boolean {
        return this._isSuccess;
    }

    get isFailure(): boolean {
        return this._isFailure;
    }

    public static ok<U>(value?: Optional<U>): Result<U> {
        return new Result<U>(true, undefined, value);
    }

    public static fail<U>(error: Either<U, string>): Result<U> {
        return new Result<U>(false, error);
    }
}
