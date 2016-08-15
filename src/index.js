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
import Bind from './utils/Bind';
import AutoBind from './utils/AutoBind';
import DebugConsole from './features/DebugConsole';
import * as TransitionStatus from './transition/TransitionStatus';
import TransitionCompleteDelegate from './transition/TransitionCompleteDelegate';
import ValidationPreparedDelegate from './transition/ValidationPreparedDelegate';

// integration
require('./integration/StateCommandMap');
require('./integration/StateUrlSyncer');
require('./integration/StateViewMap');
require('./integration/ViewRecipe');

module.exports = window.navigatorjs = {
    ...window.navigatorjs,
    NavigatorEvent,
    NavigationBehaviors,
    ResponderLists,
    NavigationState,
    NavigationResponderBehaviors,
    History,
    AsynchResponders,
    Navigator,
    utils: {
        Bind,
        AutoBind,
    },
    features: {
        DebugConsole,
    },
    transition: {
        TransitionStatus,
        TransitionCompleteDelegate,
        ValidationPreparedDelegate,
    },
};
