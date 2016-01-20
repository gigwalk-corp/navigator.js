var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');

this.navigatorjs = this.navigatorjs || {};
this.navigatorjs.integration = this.navigatorjs.integration || {};

(function() {
	var ViewRecipe = function() {
		this._states = [];
		this._children = [];
		this._viewClass = null;
		this._viewArguments = [];
		this._viewInstance = null;
		this._insideSelector = null;
		this._parentRecipe = null;
		this._viewType = null;
	};

	//PUBLIC API
	ViewRecipe.prototype = {

		addState: function(navigationState) {
			var i, existingState, length = this._states.length;

			for (i = 0; i < length; i++) {
				existingState = this._states[i];

				if (existingState.getPath() == navigationState.getPath()) {
					return;
				}
			}

			this._states.push(navigationState);

			return this;
		},

		getStates: function() {
			return this._states;
		},

		toView: function(viewClass) {
			// TODO: Find a more secure way to determine whether class
			// extends react component

			this._type = !!viewClass.prototype.setState ?
				'REACT' : 'BACKBONE';

			this._viewClass = viewClass;

			// if (this._viewClass.prototype.setState) {
			// 	const _this = this;
			// 	this._viewClass.prototype.componentDidMount = function() {
			// 		console.log(222)
			// 		_this._reactIsMounted = true
			// 	}
			//
			// 	this._viewClass.prototype.componentWillUnmount = function() {
			// 		_this._reactIsMounted = false
			// 	}
			// }

			return this;
		},

		getViewClass: function() {
			return this._viewClass;
		},

		getViewInstance: function() {
			return this._viewInstance;
		},

		initialize: function() {
			var params = this._viewArguments;

			if (this._type === 'REACT') {
				const props = Object.assign(
					{
						ref: function(c) {
							this._viewInstance = c;
						}.bind(this)
					},
					params[0]
				)

				this._element = React.createElement(
					this._viewClass,
					props,
					this._children.map(child => child._element)
				);
			}
			else if (this._type === 'BACKBONE') {
				switch (params.length) {
					default:
					case 0:
					this._viewInstance = new this._viewClass();
					break;
					case 1:
					this._viewInstance = new this._viewClass(params[0]);
					break;
					case 2:
					this._viewInstance = new this._viewClass(params[0], params[1]);
					break;
					case 3:
					this._viewInstance = new this._viewClass(params[0], params[1], params[2]);
					break;
					case 4:
					this._viewInstance = new this._viewClass(params[0], params[1], params[2], params[3]);
					break;
					case 5:
					this._viewInstance = new this._viewClass(params[0], params[1], params[2], params[3], params[4]);
					break;
				}
			}
		},

		getRootEl: function() {
				if (this._type === 'REACT') {
					return $(ReactDOM.findDOMNode(this._viewInstance));
				}
				else if (this._type === 'BACKBONE') {
					return $(this._viewInstance.$el);
				}
		},

		isMounted: function() {
			if (!this.isInstantiated()) {
				this.initialize();
			}

			if (this._type === 'REACT') {
				return this._reactIsMounted;
			}
			else if (this._type === 'BACKBONE') {
				return this.isInstantiated() &&
					$.contains(
						document.documentElement,
						this.getViewInstance().$el[0]
					);
			}
		},

		isInstantiated: function() {
			return this._viewInstance != null;
		},

		withArguments: function() {
			if (arguments.length > 5) {
				throw new Error("Uncle Bob says you want to use too many arguments");
			}
			this._viewArguments = arguments;

			return this;
		},

		inside: function(selector) {
			this._insideSelector = selector;

			return this;
		},

		getInsideSelector: function() {
			return this._insideSelector;
		},

		addChild: function(child) {
			if (this._children.includes(child)) {
				return false;
			}
			this._children.push(child);

			if (!child.isInstantiated()) {
				child.initialize();
			}
			this.initialize();

			return true;
		},

		withParent: function(parentRecipe) {
			this._parentRecipe = parentRecipe;
			return this;
		},

		getParentRecipe: function() {
			return this._parentRecipe;
		}
	};

	navigatorjs.integration.ViewRecipe = ViewRecipe;

}());
