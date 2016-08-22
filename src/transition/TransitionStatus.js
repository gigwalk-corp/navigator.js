// @flow weak
export type ValidationStatus =
    -2 |
    -1 |
    1 |
    2 |
    3 |
    4 |
    5;

export const UNINITIALIZED: -2 = -2;
export const INITIALIZED: -1 = -1;
export const HIDDEN: 1 = 1;
export const APPEARING: 2 = 2;
export const SHOWN: 3 = 3;
export const SWAPPING: 4 = 4;
export const DISAPPEARING: 5 = 5;

export function toString(status: ValidationStatus): string {
    switch (status) {
        case UNINITIALIZED:
            return 'UNINITIALIZED';
        case INITIALIZED:
            return 'INITIALIZED';
        case HIDDEN:
            return 'HIDDEN';
        case APPEARING:
            return 'APPEARING';
        case SHOWN:
            return 'SHOWN';
        case SWAPPING:
            return 'SWAPPING';
        case DISAPPEARING:
            return 'DISAPPEARING';
        default:
            return 'UNKNOWN';
    }
}
