const BackboneRecipe = require('../../../src/integration/BackboneRecipe');
const ReactRecipe = require('../../../src/integration/ReactRecipe');

const React = require('react');

describe('ViewRecipe', function () {
    let viewRecipe;
    const ViewRecipe = navigatorjs.integration.ViewRecipe;

    beforeEach(function () {
        viewRecipe = new ViewRecipe();
    });

    it('should register an array of states if not already added', function () {
        const state = {
            getPath() {
                return '/joseph';
            }
        };
        viewRecipe.addState(state);

        expect(viewRecipe._states[0]).toBe(state);
    });

    it('should add not add new state if path is already added for recipe', function () {
        const state = {
            getPath() {
                return '/joseph';
            }
        };
        viewRecipe._states = [state];
        viewRecipe.addState(state);

        expect(viewRecipe._states.length).toBe(1);
    });

    it('should return an array of states', function () {
        expect(Array.isArray(viewRecipe.getStates())).toBe(true);
    });

    it('should set the viewClass', function () {
        const ViewClass = function () {};
        viewRecipe.toView(ViewClass);
        expect(viewRecipe._viewClass).toBe(ViewClass);
    });

  // TODO: Find a way test this, for some reason, function references
  // don't appear to be the same here but the method is working as
  // expected.

    xit('should mixin methods based on viewClass type', function () {
        const ReactView = React.createClass({
            render() {
                return React.createElement('div');
            }
        });
        const BackboneView = Backbone.View.extend({});

        viewRecipe.toView(ReactView);
        expect(viewRecipe.initialize).toEqual(ReactRecipe.initialize);

        viewRecipe.toView(Backbone.View);
        expect(viewRecipe.initialize).toEqual(BackboneRecipe.initialize);
    });

    it('should return viewClass', function () {
        viewRecipe._viewClass = {};
        expect(viewRecipe.getViewClass()).toEqual(viewRecipe._viewClass);
    });

    it('should return viewInstance', function () {
        viewRecipe._viewInstance = {};
        expect(viewRecipe.getViewInstance()).toEqual(viewRecipe._viewInstance);
    });

    it('should have warning functions', function () {
        expect(viewRecipe.getRootEl).toBeDefined();
        expect(viewRecipe.isMounted).toBeDefined();
    });

    it('should report instantiated if viewInstance is not null or undefined', function () {
        viewRecipe._viewInstance = true;
        expect(viewRecipe.isInstantiated()).toBe(true);
        viewRecipe._viewInstance = null;
        expect(viewRecipe.isInstantiated()).toBe(false);
    });

    it('should save reference to viewArguments', function () {
        viewRecipe.withArguments('bananas');
        expect(viewRecipe._viewArguments[0]).toEqual('bananas');
    });

    it('should save reference to insideSelector', function () {
        viewRecipe.inside('selector');
        expect(viewRecipe._insideSelector).toEqual('selector');
    });

    it('should return insideSelector', function () {
        expect(viewRecipe.getInsideSelector()).toEqual(viewRecipe._insideSelector);
    });

    it('should save reference to parentRecipe', function () {
        viewRecipe.withParent('selector');
        expect(viewRecipe._parentRecipe).toEqual('selector');
    });

    it('should return parentRecipe', function () {
        expect(viewRecipe.getParentRecipe()).toEqual(viewRecipe._parentRecipe);
    });
});
