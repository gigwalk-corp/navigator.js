var React = require('react');
var ReactDOM = require('react-dom');

var ReactRecipe = {
  _type: 'REACT',

  // Returns a fake proxy element due to the fact that
  // we do not use these transition functions within
  // our react components

  getViewInstance: function getViewInstance() {
    return {
      navigatorBehaviors: ['IHasStateTransition'],
      transitionIn: function(cb) { cb() },
      transitionOut: function(cb) { cb() }
    }
  },

  // Save reference to our react element instead of
  // view instance like backbone recipe does

  initialize: function initialize() {
    var params = this._viewArguments;

    var props = Object.assign(
      {
        ref: function(c) {
          this._ref = c;
        }.bind(this)
      },
      params[0]
    )

    this._viewInstance = React.createElement(
      this._viewClass,
      props,
      this._children.map(child => child._viewInstance)
    );
  },

  // Use ReactDOM's findDOMNode method to find associated
  // DOM node of the component reference

  getRootEl: function getRootEl() {
    return $(ReactDOM.findDOMNode(this._ref));
  },

  // Component is mounted if is not 'null'

  isMounted: function() {
    if (!this.isInstantiated()) {
      this.initialize();
    }

    return !!this._ref;
  },

  // This method only exists on React recipes.  Adds a
  // recipe to a list of children who will be rendered
  // in this element's props.children

  _showChild: function(child) {
    if (this._children.includes(child)) {
      return;
    }
    this._children.push(child);

    if (!child.isInstantiated()) {
      child.initialize();
    }
    this.initialize();
  },

  // Removes a child from this elements props.children
  // and recreates element

  _removeChild: function(child) {
    var childIndex = this._children.indexOf(child);
    if (childIndex !== -1) {
      this._children.splice(childIndex, 1);
    }
    this.initialize();
  }
};

module.exports = ReactRecipe;
