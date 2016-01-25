var BackboneRecipe = require('../../../public/js/navigator-js/integration/BackboneRecipe');
var ReactTestUtils = require('react-addons-test-utils');
var jQuery = require('jquery');
var React = require('react');

const ReactComponent = React.createClass({
    render: function render() {
        return React.createElement('div')
    }
});

describe('React Recipe', function() {
	var ViewRecipe = navigatorjs.integration.ViewRecipe;
	var viewRecipe;

	beforeEach(function() {
		viewRecipe = new ViewRecipe();
		viewRecipe.toView(ReactComponent);
	});

  it('should have a type', function() {
    expect(typeof BackboneRecipe._type).toBe('string');
  });

	it('should return a jQuery object', function() {
		viewRecipe.initialize();
		expect(viewRecipe.getRootEl() instanceof $).toBe(true);
	});

	it('should call isInstantiated', function() {
		spyOn(viewRecipe, 'isInstantiated').and.callThrough();
		viewRecipe.isMounted();
		expect(viewRecipe.isInstantiated).toHaveBeenCalled();
	});

	it('should return false if not isInstantiated', function() {
		spyOn(viewRecipe, 'isInstantiated').and.returnValue(false);
		expect(viewRecipe.isMounted()).toBe(false);
	});

	it('should return true if and only if view element is in the DOM', function() {
    viewRecipe._viewClass = ReactComponent;
		viewRecipe.initialize();

		expect(viewRecipe.isMounted()).toBe(false);
    ReactTestUtils.renderIntoDocument(viewRecipe._viewInstance);
		expect(viewRecipe.isMounted()).toBe(true);
	});

	it('should create a view instance', function() {
		var MyViewClass = function MyViewClass() {};
		viewRecipe._viewClass = ReactComponent;
		viewRecipe.initialize();

		expect(ReactTestUtils.isElement(viewRecipe._viewInstance)).toBe(true);
	});
});
