// @flow
import Navigator from '../Navigator';
import NavigationState from '../NavigationState';

export default class ValidationPreparedDelegate {
    constructor(
        validatorResponder: any,
        truncatedState: NavigationState,
        fullState: NavigationState,
        navigator: Navigator,
        validationNamespace: { notifyValidationPrepared: Function }
    ): void {
        this._validatorResponder = validatorResponder;
        this._truncatedState = truncatedState;
        this._fullState = fullState;
        this._navigator = navigator;
        this._validationNamespace = validationNamespace;
    }

    _validatorResponder: any;
    _truncatedState: ?NavigationState;
    _fullState: ?NavigationState;
    _navigator: ?Navigator;
    _validationNamespace: ?{ notifyValidationPrepared: Function };
    call = () => {
        if (this._validationNamespace) {
            this._validationNamespace.notifyValidationPrepared(this._validatorResponder, this._truncatedState, this._fullState);
            this._validatorResponder = null;
            this._truncatedState = null;
            this._fullState = null;
            this._navigator = null;
            this._validationNamespace = null;
        }
    };
}
