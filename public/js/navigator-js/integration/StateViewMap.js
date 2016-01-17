var ReactDOM = require('react-dom');

this.navigatorjs = this.navigatorjs || {};
this.navigatorjs.integration = this.navigatorjs.integration || {};

(function() {
	var _navigator = null;
	var _orderedRecipes = null;
	var _$root = null;


	var StateViewMap = function(navigator, $root) {
		_navigator = navigator;
		_orderedRecipes = [];
		_$root = $root || $('body');

		_navigator.on(navigatorjs.NavigatorEvent.STATE_REQUESTED, _handleStateRequested);
	};

	function _addRecipe(statesOrPaths) {
		var recipe = new navigatorjs.integration.ViewRecipe();

		var i, length = statesOrPaths.length;
		for (i = 0; i < length; i++) {
			recipe.addState(navigatorjs.NavigationState.make(statesOrPaths[i]));
		}

		_orderedRecipes.push(recipe);

		return recipe;
	}

	function _handleStateRequested(e, eventData) {
		var requestedState = eventData.state,
			index, recipe, recipeStates, recipesLength = _orderedRecipes.length,
			j, state, statesLength,
			viewInstance;

		for (index = 0; index < recipesLength; index++) {
			recipe = _orderedRecipes[index];
			recipeStates = recipe.getStates();
			statesLength = recipeStates.length;

			for (j = 0; j < statesLength; j++) {
				state = recipeStates[j];

				if (requestedState.contains(state)) {

					// if (viewInstance.navigatorBehaviors instanceof Array) {
						_addViewElementToDOM(recipe);
						viewInstance = recipe.getViewInstance();
						_navigator.add(viewInstance, state);
					// }
				}
			}
		}
	}

	function _addViewElementToDOM(recipe) {
		// If element for this view is already initialized and in the DOM

		// if (recipe.isMounted()) {
		// 	return;
		// }

		// if (recipe.isInstantiated() && $.contains(document.documentElement, recipe.getViewInstance().$el)) {
		// 	return recipe.getViewInstance();
		// }

		// By default all views are added to default root element

		var $container = _$root;
		var parentRecipe = recipe.getParentRecipe(),
			$inside,
			insideSelector = recipe.getInsideSelector();

		if (parentRecipe) {
			// If parent view recipe has not been constructed, initialize
			// the parent view and add it to the DOM correctly

			if (!parentRecipe.isInstantiated()) {
				_addViewElementToDOM(parentRecipe);
			}

			$container = parentRecipe.getRootEl();
		}

		// If view has a DOM selector to be inserted with, save reference
		// to this container element

		if (insideSelector != null) {
			$inside = $container.find(insideSelector);
			$container = $inside.length > 0 ? $inside.first() : $container;
		}

		var i = _orderedRecipes.indexOf(recipe) + 1,
			length = _orderedRecipes.length,
			testRecipe;

		if (recipe._type === 'BACKBONE') {
			for (i; i < length; i++) {
				testRecipe = _orderedRecipes[i];

				// If any other views have the same parent, add this element before
				// those elements in the container element

				if (testRecipe.isInstantiated() && testRecipe.getRootEl().parent()[0] == $container[0]) {
					testRecipe.getRootEl().before(recipe.getRootEl());
					return;
				}
			}
		}

		console.log(111)
		// otherwise add on top
		if (recipe._type === 'REACT') {
			recipe._viewInstance = ReactDOM.render(recipe._element, $container[0]);
		} else {
			$container.append(recipe.getRootEl());
		}
	}

	//PUBLIC API
	StateViewMap.prototype = {
		mapState: function(statesOrPaths) {
			var allArgumentsAsOneFlatArray = [];
			allArgumentsAsOneFlatArray = allArgumentsAsOneFlatArray.concat.apply(allArgumentsAsOneFlatArray, arguments);
			return _addRecipe(allArgumentsAsOneFlatArray);
		},

		get$Root: function() {
			return _$root;
		}
	};

	navigatorjs.integration.StateViewMap = StateViewMap;

}());
