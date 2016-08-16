// @flow weak
import $ from 'jquery';
import NavigationState from '../NavigationState';
import Navigator from '../Navigator';
import { STATE_CHANGED } from '../NavigatorEvent';

let _usingPushState: bool;
let _rootUrl: string;
let _navigator: Navigator;
let _started: bool;

class StateUrlSyncer {
    constructor(navigator: Navigator): void {
        _usingPushState = false;
        _rootUrl = '/';
        _navigator = navigator;
        _started = false;
        this.supportsPushState = !!(window && window.history && window.history.pushState);
    }
    supportsPushState: bool;
    usePushState = (rootUrl: string) => {
        if (_started) {
            throw new Error('Cannot switch to using push states after start was called');
        }

        _usingPushState = this.supportsPushState;
        _rootUrl = rootUrl || _rootUrl;

        this._redirectPushStateOrHashOnDeeplink();
    }

    isUsingPushState() {
        return _usingPushState;
    }

    _redirectPushStateOrHashOnDeeplink() {
        const pushUrl = this.parsePushStateUrl(window.location.pathname);
        const hashUrl = this.parseHashUrl(window.location.hash);

        if (this.supportsPushState && pushUrl === '' && hashUrl !== '') {
            // There is a hash and no push state.
            window.history.replaceState(null, '', new NavigationState(_rootUrl + hashUrl).getPath());
        } else if (!this.supportsPushState && pushUrl !== '') {
            // There is a push state deeplink, but we don't support it. Redirect back.
            window.location.href = `${_rootUrl}#/${pushUrl}`;
        }
    }

    start = () => {
        if (_started) {
            throw new Error('Already started');
        }

        _started = true;
        this._addListeners();
    };

    _addListeners() {
        if (_usingPushState) {
            $(window).on('popstate', this._onUrlChange);
        } else {
            $(window).on('hashchange', this._onUrlChange);
        }

        _navigator.on(STATE_CHANGED, this._onStateChanged);
    }

    _removeListeners() {
        $(window).off('popstate', this._onUrlChange);
        $(window).off('hashchange', this._onUrlChange);
    }

    setUrl(url: string) {
        let newState;
        const urlState = this.getUrlState();
        if (_usingPushState) {
            newState = new NavigationState(_rootUrl + url);
            if (newState.equals(urlState)) {
                window.history.replaceState(null, '', newState.getPath());
            } else {
                window.history.pushState(null, '', newState.getPath());
            }
        } else {
            newState = new NavigationState(url);
            if (!newState.equals(urlState)) {
                window.location.hash = newState.getPath();
            }
        }
    }

    getRawUrl(): string {
        if (_usingPushState) {
            return this.parsePushStateUrl(window.location.pathname);
        } else {
            return this.parseHashUrl(window.location.hash);
        }
    }

    getUrlState() {
        return new NavigationState(this.getRawUrl());
    }

    _onStateChanged = () => {
        this.setUrl(_navigator.getCurrentState().getPath());
    };

    _onUrlChange = () => {
        _navigator.request(this.getUrlState());
    };

    resetUrl() {
        this.setUrl('');
    }

    parseHashUrl(hashUrl: string) {
        return hashUrl.replace(/^#|$/g, '');
    }

    parsePushStateUrl(pushStateUrl: string): string {
        return pushStateUrl.replace(_rootUrl, '');
    }

    dispose() {
        this._removeListeners();
    }
}

export default StateUrlSyncer;
