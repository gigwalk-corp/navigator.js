// @flow
class NavigationState {
    _path: string;
    constructor(pathStringOrArray: string | string[]) {
        this._path = '';

        if (pathStringOrArray instanceof Array) {
            this.setSegments(pathStringOrArray);
        } else {
            this.setPath(pathStringOrArray || '');
        }
    }

    static make(stateOrPath): NavigationState {
        return stateOrPath instanceof NavigationState ? stateOrPath : new NavigationState(stateOrPath);
    }

    setPath(_path: string | NavigationState): this {
        const path: string = _path instanceof NavigationState ? _path.getPath() : _path;
        if (typeof path === 'string') {
            this._path = `/${path.toLowerCase()}/`;
            this._path = this._path.replace(new RegExp('[^-_/A-Za-z0-9* ]', 'g'), '');
            this._path = this._path.replace(new RegExp('/+', 'g'), '/');
            this._path = this._path.replace(/\s+/g, '-');
        }
        return this;
    }

    getPath(): string {
        return this._path;
    }

    getPathRegex(): RegExp {
        const segments = this.getSegments();
        let regexPath: string = '/';
        let segment;
        let i;
        const length = segments.length;

        for (i = 0; i < length; i++) {
            segment = segments[i];

            if (segment === '**') {
                // match any character, including slashes (multiple segments)
                // eg: bla or bla/bla or bla/bla/bla
                regexPath = `${regexPath}(.*)`;
            } else if (segment === '*') {
                // match anything expect slashes and end with a slash (1 segment only).
                // eg: bla/ but not /bla/ or bla/bla/
                regexPath = `${regexPath}([^/]*)/`;
            } else {
                // Either the segment, a wildcard or double wildcard and ends with a forward slash (1 segment only).
                // eg: segment/ or */ or **/
                regexPath = `${regexPath}(${segment}|\\*|\\*\\*)\\/`;
            }
        }

        return new RegExp(regexPath);
    }

    setSegments(segments: string[]) {
        this.setPath(segments.join('/'));
    }

    getSegments(): string[] {
        const segments = this._path.split('/');

        segments.pop();
        segments.shift();

        return segments;
    }

    getSegment(index: number): ?string {
        return this.getSegments()[index];
    }

    getFirstSegment(): ?string {
        return this.getSegment(0);
    }

    getLastSegment(): ?string {
        const segments = this.getSegments();
        return this.getSegment(segments.length - 1);
    }

    contains(foreignStateOrPathOrArray: Array<NavigationState | string> | string | NavigationState): boolean {
        if (Array.isArray(foreignStateOrPathOrArray)) {
            return this._containsStateInArray(foreignStateOrPathOrArray);
        }

        const // if we get this far, it is a state or path
        foreignStateOrPath = foreignStateOrPathOrArray;

        const foreignState = NavigationState.make(foreignStateOrPath);
        const foreignSegments = foreignState.getSegments();
        const nativeSegments = this.getSegments();
        const foreignMatch = this.getPath().match(foreignState.getPathRegex());
        const nativeMatch = foreignState.getPath().match(this.getPathRegex());
        const isForeignMatch = foreignMatch && foreignMatch.index === 0 ? true : false; // eslint-disable-line no-unneeded-ternary
        const isNativeMatch = nativeMatch && nativeMatch.index === 0 ? true : false; // eslint-disable-line no-unneeded-ternary
        const foreignSegmentDoubleWildcardsMatch = foreignState.getPath().match(/\*\*/g);
        const doubleWildcardsLength = foreignSegmentDoubleWildcardsMatch ? foreignSegmentDoubleWildcardsMatch.length : 0;
        const tooManyForeignSegments = foreignSegments.length > (nativeSegments.length + doubleWildcardsLength);
        const enoughNativeSegments = nativeSegments.length > foreignSegments.length;

        return (isForeignMatch || (isNativeMatch && enoughNativeSegments)) && !tooManyForeignSegments;
    }

    _containsStateInArray(foreignStatesOrPaths: Array<NavigationState | string>): bool {
        let i;
        const length = foreignStatesOrPaths.length;
        let foreignStateOrPath;

        for (i = 0; i < length; i++) {
            foreignStateOrPath = foreignStatesOrPaths[i];
            if (this.contains(foreignStateOrPath)) {
                return true;
            }
        }

        return false;
    }

    equals(stateOrPathOrArray: Array<NavigationState | string> | NavigationState | string): boolean {
        if (Array.isArray(stateOrPathOrArray)) {
            return this._equalsStateInArray(stateOrPathOrArray);
        }

        const // if we get this far, it is a state or path
        stateOrPath = stateOrPathOrArray; // Or the other way around for double wildcard states

        const state = NavigationState.make(stateOrPath);
        const subtractedState = this.subtract(state) || state.subtract(this);

        if (!subtractedState) {
            return false;
        } else {
            return subtractedState.getSegments().length === 0;
        }
    }

    _equalsStateInArray(statesOrPaths: Array<NavigationState | string>): bool {
        let i;
        const length = statesOrPaths.length;
        let stateOrPath;

        for (i = 0; i < length; i++) {
            stateOrPath = statesOrPaths[i];
            if (this.equals(stateOrPath)) {
                return true;
            }
        }

        return false;
    }

    subtract(operandStateOrPath: NavigationState | string): ?NavigationState {
        const operand = NavigationState.make(operandStateOrPath);


        if (!this.contains(operand)) {
            return null;
        }

        const subtractedPath = this.getPath().replace(operand.getPathRegex(), '');

        return new NavigationState(subtractedPath);
    }

    append(stringOrState: NavigationState | string): this {
        const path: string = typeof stringOrState === 'string' ? stringOrState : stringOrState.getPath();
        return this.setPath(this._path + path);
    }

    prepend(stringOrState: NavigationState | string): this {
        const path: string = typeof stringOrState === 'string' ? stringOrState : stringOrState.getPath();
        return this.setPath(path + this._path);
    }

    hasWildcard(): bool {
        return this.getPath().indexOf('/*/') !== -1;
    }

    mask(sourceStateOrPath: string | NavigationState): NavigationState {
        const sourceState = NavigationState.make(sourceStateOrPath);
        const unmaskedSegments = this.getSegments();
        const sourceSegments = sourceState.getSegments();
        const length = Math.min(unmaskedSegments.length, sourceSegments.length);
        let i;

        for (i = 0; i < length; i++) {
            if (unmaskedSegments[i] === '*') {
                unmaskedSegments[i] = sourceSegments[i];
            }
        }

        return new NavigationState(unmaskedSegments);
    }

    clone(): NavigationState {
        return new NavigationState(this._path);
    }
}

export default NavigationState;
