// @flow weak
import $ from 'jquery';
import autoBind from '../utils/AutoBind';
import NavigationState from '../NavigationState';
import { STATE_CHANGED } from '../NavigatorEvent';

let _usingPushState;
let _rootUrl;
let _navigator;
let _started;

function StateUrlSyncer(navigator) {
    autoBind(this, this);

    _usingPushState = false;
    _rootUrl = '/';
    _navigator = navigator;
    _started = false;
}

StateUrlSyncer.prototype = {
    supportsPushState: !!(window && window.history && window.history.pushState),

    usePushState(rootUrl) {
        if (_started) {
            throw new Error('Cannot switch to using push states after start was called');
        }

        _usingPushState = this.supportsPushState;
        _rootUrl = rootUrl || _rootUrl;

        this._redirectPushStateOrHashOnDeeplink();
    },

    isUsingPushState() {
        return _usingPushState;
    },

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
    },

    start() {
        if (_started) {
            throw new Error('Already started');
        }

        _started = true;
        this._addListeners();
    },

    _addListeners() {
        if (_usingPushState) {
            $(window).on('popstate', this._onUrlChange);
        } else {
            $(window).on('hashchange', this._onUrlChange);
        }

        _navigator.on(STATE_CHANGED, this._onStateChanged);
    },

    _removeListeners() {
        $(window).off('popstate', this._onUrlChange);
        $(window).off('hashchange', this._onUrlChange);
    },

    setUrl(url) {
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
    },

    getRawUrl() {
        if (_usingPushState) {
            return this.parsePushStateUrl(window.location.pathname);
        }
        return this.parseHashUrl(window.location.hash);
    },

    getUrlState() {
        return new NavigationState(this.getRawUrl());
    },

    _onStateChanged() {
        this.setUrl(_navigator.getCurrentState().getPath());
    },

    _onUrlChange() {
        _navigator.request(this.getUrlState());
    },

    resetUrl() {
        this.setUrl('');
    },

    parseHashUrl(hashUrl) {
        return hashUrl.replace(/^#|$/g, '');
    },

    parsePushStateUrl(pushStateUrl) {
        return pushStateUrl.replace(_rootUrl, '');
    },

    dispose() {
        this._removeListeners();
    }

};

export default StateUrlSyncer;
