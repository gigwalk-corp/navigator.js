// @flow
// navigator-main
import * as NavigatorEvent from './NavigatorEvent';
import * as NavigationBehaviors from './NavigationBehaviors';
import ResponderLists from './ResponderLists';
import NavigationState from './NavigationState';
import NavigationResponderBehaviors from './NavigationResponderBehaviors';
import History from './History';
import AsynchResponders from './AsynchResponders';
import Navigator from './Navigator';

require('./ResponderLists');
require('./NavigationBehaviors');
require('./NavigationResponderBehaviors');

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

window.navigatorjs = {
    ...window.navigatorjs,
    NavigatorEvent,
    NavigationBehaviors,
    ResponderLists,
    NavigationState,
    NavigationResponderBehaviors,
    History,
    AsynchResponders,
    Navigator,
};

module.exports = navigatorjs;
