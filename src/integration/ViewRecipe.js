// @flow weak
import _ from 'underscore';
import ReactRecipe from './ReactRecipe';
import BackboneRecipe from './BackboneRecipe';

class ViewRecipe {
    constructor() {
        this._states = [];
        this._viewClass = null;
        this._viewArguments = [];
        this._viewInstance = null;
        this._insideSelector = null;
        this._parentRecipe = null;
        this._viewType = null;
    }
    _states: Array<any>
    _viewClass: mixed;
    _viewArguments: Array<mixed>;
    _viewInstance: mixed;
    _insideSelector: mixed;
    _parentRecipe: mixed;
    _viewType: mixed;
    // PUBLIC API
    addState(navigationState) {
        const length = this._states.length;

        for (let i = 0; i < length; i++) {
            const existingState = this._states[i];

            if (existingState.getPath() === navigationState.getPath()) {
                return;
            }
        }

        this._states.push(navigationState);

        return this;
    }

    getStates() {
        return this._states;
    }

    toView(viewClass) {
        this._viewClass = viewClass;

        _.extend(this, BackboneRecipe);

        return this;
    }

    toComponent(viewClass) {
        this._viewClass = viewClass;

        _.extend(this, ReactRecipe);

        return this;
    }

    getViewClass() {
        return this._viewClass;
    }

    getViewInstance() {
        return this._viewInstance;
    }

    getRootEl() {
        console.warn('Method getRootEl should be implemented by viewRecipe');
    }

    isMounted() {
        console.warn('Method isMounted should be implemented by viewRecipe');
    }

    isInstantiated() {
        return this._viewInstance !== null;
    }

    withArguments(...args) {
        if (args.length > 5) {
            throw new Error('Uncle Bob says you want to use too many arguments');
        }
        this._viewArguments = args;

        return this;
    }

    inside(selector) {
        this._insideSelector = selector;

        return this;
    }

    getInsideSelector() {
        return this._insideSelector;
    }

    withParent(parentRecipe) {
        this._parentRecipe = parentRecipe;
        return this;
    }

    getParentRecipe() {
        return this._parentRecipe;
    }
}

export default ViewRecipe;
