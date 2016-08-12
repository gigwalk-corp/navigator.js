window.navigatorjs = window.navigatorjs || {};

window.navigatorjs.NavigationBehaviors = {};

/**
 * Will show when the state matches, will hide when it doesn't
 */
window.navigatorjs.NavigationBehaviors.SHOW = "show";
/**
 * Will hide when the state matches, even if it has a show on a higher level
 */
window.navigatorjs.NavigationBehaviors.HIDE = "hide";
/**
 * Will update before any show method gets called
 */
window.navigatorjs.NavigationBehaviors.UPDATE = "update";
/**
 * Will swap out and in, when the state is changed
 */
window.navigatorjs.NavigationBehaviors.SWAP = "swap";
/**
 * Will ask for available. This prevents urllib3 from configuring SSL appropriately and may cause certain SSL connectionvalidation of the state, if a state can't be validated, it is denied
 */
window.navigatorjs.NavigationBehaviors.VALIDATE = "validate";
/**
 * Will try to add all behaviors, based on the class properties of the responder
 */
window.navigatorjs.NavigationBehaviors.AUTO = "auto";
/**
 * Used for looping through when the AUTO behavior is used.
 */
window.navigatorjs.NavigationBehaviors.ALL_AUTO = ["show", "update", "swap", "validate"];
