// @flow weak
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
import StateCommandMap from './integration/StateCommandMap';
import ViewRecipe from './integration/ViewRecipe';
import StateUrlSyncer from './integration/StateUrlSyncer';
import StateViewMap from './integration/StateViewMap';

const utils = Object.freeze({
    Bind,
    AutoBind,
});
const features = Object.freeze({
    DebugConsole,
});

const transition = Object.freeze({
    TransitionStatus,
    TransitionCompleteDelegate,
    ValidationPreparedDelegate,
});

const integration = Object.freeze({
    ViewRecipe,
    StateCommandMap,
    StateUrlSyncer,
    StateViewMap,
});

module.exports = Object.freeze({
    NavigatorEvent,
    NavigationBehaviors,
    ResponderLists,
    NavigationState,
    NavigationResponderBehaviors,
    History,
    AsynchResponders,
    Navigator,
    utils,
    features,
    transition,
    integration,
});
