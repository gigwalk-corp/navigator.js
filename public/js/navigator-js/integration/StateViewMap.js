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

					_addViewElementToDOM(recipe);
					var viewInstance = recipe.getViewInstance();
					if (Array.isArray(viewInstance.navigatorBehaviors)) {
						_navigator.add(viewInstance, state);
					}

				} else {
					if (recipe.isMounted()) {
						_removeViewElementFromDOM(recipe);
					}
				}
			}
		}
	}

	function _removeViewElementFromDOM(recipe) {
		var parentRecipe = recipe.getParentRecipe();
		var removalType = '' + (parentRecipe ? parentRecipe._type : 'BACKBONE') + ' > ' + recipe._type;

		switch (removalType) {
			case 'BACKBONE > REACT':
				var rootEl = recipe.getRootEl();
				rootEl.parent().remove();
				ReactDOM.unmountComponentAtNode(rootEl.parent()[0]);
				recipe._reactIsMounted = false;
				break;

			case 'BACKBONE > BACKBONE':
				recipe.getRootEl().remove();
				break;

			default:
				console.error('unknown recipe type!');
				break;

		}
	}

	function _addViewElementToDOM(recipe) {
		// If element for this view is already initialized and in the DOM

		if (recipe.isMounted()) {
			return;
		}

		if (!recipe.isInstantiated()) {
			recipe.initialize();
		}

		// By default all views are added to default root element

		var parentRecipe = recipe.getParentRecipe();

		if (parentRecipe) {
			// If parent view recipe has not been varructed, initialize
			// the parent view and add it to the DOM correctly

			if (!parentRecipe.isMounted()) {
				_addViewElementToDOM(parentRecipe);
			}
		}

		_addRecipeToParent(parentRecipe, recipe);
	}

	function _addRecipeToParent(parentRecipe, recipe) {
		var $container = _$root,
			$inside,
			insideSelector = recipe.getInsideSelector();

		if (parentRecipe) {
			$container = parentRecipe.getRootEl();
		}

		if (insideSelector != null) {
			$inside = $container.find(insideSelector);
			$container = $inside.length > 0 ? $inside.first() : $container;
		}

		var i = _orderedRecipes.indexOf(recipe) + 1,
		length = _orderedRecipes.length,
		testRecipe;

		var additionType = '' + (parentRecipe ? parentRecipe._type : 'BACKBONE') + ' > ' + recipe._type;

		switch (additionType) {
			case 'BACKBONE > BACKBONE':
				for (i; i < length; i++) {
					testRecipe = _orderedRecipes[i];

					// If any other views have the same parent, add this element before
					// those elements in the container element

					if (testRecipe.isInstantiated() && testRecipe.isMounted() && testRecipe.getRootEl().parent()[0] == $container[0]) {
						testRecipe.getRootEl().before(recipe.getRootEl());
						return;
					}
				}
				$container.append(recipe.getRootEl());
				break;

			case 'BACKBONE > REACT':
				var $proxy = $(document.createElement('div'));
				$container.append($proxy);
				ReactDOM.render(recipe._viewInstance, $proxy[0]);

				break;

			case 'REACT > REACT':
				// TODO: Here account for case where parentRecipe is not
				// root element of render tree.

				parentRecipe._showChild(recipe);
				ReactDOM.render(
					parentRecipe._viewInstance,
					parentRecipe.getRootEl().parent()[0]
				);
				break;
			default:
				console.error('Invalid recipe type combination!');
				break;

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
