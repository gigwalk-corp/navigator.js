// @flow
class AsynchResponders {
    _responders: Object[];
    constructor() {
        this._responders = [];
    }

    // PUBLIC API
    getLength(): number {
        return this._responders.length;
    }

    isBusy(): bool {
        return this.getLength() > 0;
    }

    hasResponder(responder: any): boolean {
        return this._responders.indexOf(responder) !== -1;
    }

    addResponder(responder: any) {
        this._responders.push(responder);
    }

    addResponders(additionalRespondersArray: mixed): void {
        if (Array.isArray(additionalRespondersArray)) {
            const arr = additionalRespondersArray.filter((responder: mixed): boolean => typeof responder === 'object' && responder != null);
            this._responders = this._responders.concat(arr);
        }
    }

    takeOutResponder(responder: any): bool {
        const index = this._responders.indexOf(responder);
        if (index !== -1) {
            this._responders.splice(index, 1);
            return true;
        }

        return false;
    }

    reset() {
        if (this._responders.length > 0) {
            console.warn('Resetting too early? Still have responders marked for asynchronous tasks');
        }

        this._responders = [];
    }
}

export default AsynchResponders;
