// @flow
// navigator-main
import * as NavigatorEvent from './NavigatorEvent';
import * as NavigationBehaviors from './NavigationBehaviors';
require('./Navigator');
require('./ResponderLists');
require('./AsynchResponders');
require('./History');
require('./NavigationBehaviors');
require('./NavigationResponderBehaviors');
require('./NavigationState');

// utils
require('./utils/Bind');
require('./utils/AutoBind');

// transition
require('./transition/TransitionCompleteDelegate');
require('./transition/TransitionStatus');
require('./transition/ValidationPreparedDelegate');

// polyfills
require('./polyfills/array');

// integration
require('./integration/StateCommandMap');
require('./integration/StateUrlSyncer');
require('./integration/StateViewMap');
require('./integration/ViewRecipe');

// features
require('./features/DebugConsole');

navigatorjs = {
    ...navigatorjs,
    NavigatorEvent,
    NavigationBehaviors,
};

module.exports = navigatorjs;
