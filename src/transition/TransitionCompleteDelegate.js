// @flow
import type { ValidationStatus } from './TransitionStatus';
/* globals NotifyComplete */
interface NotifyComplete {
    notifyComplete(responder: any, status: ValidationStatus, behavior: any): any;
}

export default class TransitionCompleteDelegate {
    constructor(responder: any, status: ValidationStatus, behavior: any, navigator: ?Navigator, transitionNamespace: NotifyComplete) {
        this._responder = responder;
        this._status = status;
        this._behavior = behavior;
        this._navigator = navigator;
        this._transitionNamespace = transitionNamespace;
        this._called = false;
    }

    _responder: any;
    _status: ValidationStatus;
    _behavior: any;
    _navigator: ?Navigator;
    _transitionNamespace: ?NotifyComplete;
    _called: bool;

    call = () => {
        if (this._called) {
            throw new Error('Illegal second call to transition complete. This instance is already prepared for garbage collection!');
        }

        this._called = true;
        if (this._transitionNamespace) {
            this._transitionNamespace.notifyComplete(this._responder, this._status, this._behavior);
            this._responder = null;
            this._navigator = null;
            this._transitionNamespace = null;
        }
    }
}
