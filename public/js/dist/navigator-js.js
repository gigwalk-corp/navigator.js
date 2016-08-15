/*!
 * @gigwalk/navigator-js - v1.0.0 - 2016-08-15
 * undefined
 * Copyright (c) 2016 Bigger Boat
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("underscore"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "underscore", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["navigator-js"] = factory(require("jquery"), require("underscore"), require("react"), require("react-dom"));
	else
		root["navigator-js"] = factory(root["jQuery"], root["_"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_95__, __WEBPACK_EXTERNAL_MODULE_97__, __WEBPACK_EXTERNAL_MODULE_98__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _freeze = __webpack_require__(1);

	var _freeze2 = _interopRequireDefault(_freeze);

	var _NavigatorEvent = __webpack_require__(23);

	var NavigatorEvent = _interopRequireWildcard(_NavigatorEvent);

	var _NavigationBehaviors = __webpack_require__(24);

	var NavigationBehaviors = _interopRequireWildcard(_NavigationBehaviors);

	var _ResponderLists = __webpack_require__(25);

	var _ResponderLists2 = _interopRequireDefault(_ResponderLists);

	var _NavigationState = __webpack_require__(31);

	var _NavigationState2 = _interopRequireDefault(_NavigationState);

	var _NavigationResponderBehaviors = __webpack_require__(32);

	var _NavigationResponderBehaviors2 = _interopRequireDefault(_NavigationResponderBehaviors);

	var _History = __webpack_require__(83);

	var _History2 = _interopRequireDefault(_History);

	var _AsynchResponders = __webpack_require__(86);

	var _AsynchResponders2 = _interopRequireDefault(_AsynchResponders);

	var _Navigator = __webpack_require__(87);

	var _Navigator2 = _interopRequireDefault(_Navigator);

	var _Bind = __webpack_require__(91);

	var _Bind2 = _interopRequireDefault(_Bind);

	var _AutoBind = __webpack_require__(84);

	var _AutoBind2 = _interopRequireDefault(_AutoBind);

	var _DebugConsole = __webpack_require__(92);

	var _DebugConsole2 = _interopRequireDefault(_DebugConsole);

	var _TransitionStatus = __webpack_require__(88);

	var TransitionStatus = _interopRequireWildcard(_TransitionStatus);

	var _TransitionCompleteDelegate = __webpack_require__(89);

	var _TransitionCompleteDelegate2 = _interopRequireDefault(_TransitionCompleteDelegate);

	var _ValidationPreparedDelegate = __webpack_require__(90);

	var _ValidationPreparedDelegate2 = _interopRequireDefault(_ValidationPreparedDelegate);

	var _StateCommandMap = __webpack_require__(93);

	var _StateCommandMap2 = _interopRequireDefault(_StateCommandMap);

	var _ViewRecipe = __webpack_require__(94);

	var _ViewRecipe2 = _interopRequireDefault(_ViewRecipe);

	var _StateUrlSyncer = __webpack_require__(100);

	var _StateUrlSyncer2 = _interopRequireDefault(_StateUrlSyncer);

	var _StateViewMap = __webpack_require__(101);

	var _StateViewMap2 = _interopRequireDefault(_StateViewMap);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//  weak
	// navigator-main
	var utils = (0, _freeze2.default)({
	    Bind: _Bind2.default,
	    AutoBind: _AutoBind2.default
	});
	var features = (0, _freeze2.default)({
	    DebugConsole: _DebugConsole2.default
	});

	var transition = (0, _freeze2.default)({
	    TransitionStatus: TransitionStatus,
	    TransitionCompleteDelegate: _TransitionCompleteDelegate2.default,
	    ValidationPreparedDelegate: _ValidationPreparedDelegate2.default
	});

	var integration = (0, _freeze2.default)({
	    ViewRecipe: _ViewRecipe2.default,
	    StateCommandMap: _StateCommandMap2.default,
	    StateUrlSyncer: _StateUrlSyncer2.default,
	    StateViewMap: _StateViewMap2.default
	});

	module.exports = (0, _freeze2.default)({
	    NavigatorEvent: NavigatorEvent,
	    NavigationBehaviors: NavigationBehaviors,
	    ResponderLists: _ResponderLists2.default,
	    NavigationState: _NavigationState2.default,
	    NavigationResponderBehaviors: _NavigationResponderBehaviors2.default,
	    History: _History2.default,
	    AsynchResponders: _AsynchResponders2.default,
	    Navigator: _Navigator2.default,
	    utils: utils,
	    features: features,
	    transition: transition,
	    integration: integration
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(18).Object.freeze;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(4)
	  , meta     = __webpack_require__(5).onFreeze;

	__webpack_require__(16)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(6)('meta')
	  , isObject = __webpack_require__(4)
	  , has      = __webpack_require__(7)
	  , setDesc  = __webpack_require__(8).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(12)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(9)
	  , IE8_DOM_DEFINE = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(15)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(11) && !__webpack_require__(12)(function(){
	  return Object.defineProperty(__webpack_require__(13)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4)
	  , document = __webpack_require__(14).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(4);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(17)
	  , core    = __webpack_require__(18)
	  , fails   = __webpack_require__(12);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(14)
	  , core      = __webpack_require__(18)
	  , ctx       = __webpack_require__(19)
	  , hide      = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 18 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(8)
	  , createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(11) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//  weak
	var TRANSITION_STATUS_UPDATED = exports.TRANSITION_STATUS_UPDATED = 'TRANSITION_STATUS_UPDATED';
	var STATE_REQUESTED = exports.STATE_REQUESTED = 'STATE_REQUESTED';
	var STATE_CHANGED = exports.STATE_CHANGED = 'STATE_CHANGED';
	var TRANSITION_STARTED = exports.TRANSITION_STARTED = 'TRANSITION_STARTED';
	var TRANSITION_FINISHED = exports.TRANSITION_FINISHED = 'TRANSITION_FINISHED';

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//  weak
	/**
	 * Will show when the state matches, will hide when it doesn't
	 */
	var SHOW = exports.SHOW = 'show';
	/**
	 * Will hide when the state matches, even if it has a show on a higher level
	 */
	var HIDE = exports.HIDE = 'hide';
	/**
	 * Will update before any show method gets called
	 */
	var UPDATE = exports.UPDATE = 'update';
	/**
	 * Will swap out and in, when the state is changed
	 */
	var SWAP = exports.SWAP = 'swap';
	/**
	 * Will ask for available. This prevents urllib3 from configuring SSL appropriately and
	 * may cause certain SSL connectionvalidation of the state, if a state can't be validated, it is denied
	 */
	var VALIDATE = exports.VALIDATE = 'validate';
	/**
	 * Will try to add all behaviors, based on the class properties of the responder
	 */
	var AUTO = exports.AUTO = 'auto';
	/**
	 * Used for looping through when the AUTO behavior is used.
	 */
	var ALL_AUTO = exports.ALL_AUTO = ['show', 'update', 'swap', 'validate'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(26);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(27);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//  weak
	var ResponderLists = function () {
	    function ResponderLists() {
	        (0, _classCallCheck3.default)(this, ResponderLists);

	        this.validateByPath = {};
	        this.updateByPath = {};
	        this.swapByPath = {};
	        this.showByPath = {};
	        this.hideByPath = {};
	        this.swappedBefore = {};

	        this.all = [this.validateByPath, this.updateByPath, this.swapByPath, this.showByPath, this.hideByPath, this.swappedBefore];
	    }

	    (0, _createClass3.default)(ResponderLists, [{
	        key: 'toString',
	        value: function toString() {
	            var s = 'ResponderLists [';

	            for (var variable in this) {
	                // $FlowFixMe
	                var list = this[variable];

	                if (this.all.indexOf(list) > -1) {
	                    var contents = [];
	                    for (var key in list) {
	                        contents.push('[' + key + ' = ' + list[key] + ']'); // eslint-disable-line prefer-template
	                    }
	                    s += '\n\t[' + variable + ': ' + contents.join(', ') + '], '; // eslint-disable-line prefer-template
	                }
	            }

	            s += ']';
	            return s;
	        }
	    }]);
	    return ResponderLists;
	}();

	exports.default = ResponderLists;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(28);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	var $Object = __webpack_require__(18).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(17);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(11), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(26);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(27);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//  weak
	var NavigationState = function () {
	    function NavigationState(pathStringOrArray) {
	        (0, _classCallCheck3.default)(this, NavigationState);

	        this._path = '';

	        if (pathStringOrArray instanceof Array) {
	            this.setSegments(pathStringOrArray);
	        } else {
	            this.setPath(pathStringOrArray || '');
	        }
	    }

	    (0, _createClass3.default)(NavigationState, [{
	        key: 'setPath',
	        value: function setPath(_path) {
	            var path = _path instanceof NavigationState ? _path.getPath() : _path;
	            if (typeof path === 'string') {
	                this._path = '/' + path.toLowerCase() + '/';
	                this._path = this._path.replace(new RegExp('[^-_/A-Za-z0-9* ]', 'g'), '');
	                this._path = this._path.replace(new RegExp('/+', 'g'), '/');
	                this._path = this._path.replace(/\s+/g, '-');
	            }
	            return this;
	        }
	    }, {
	        key: 'getPath',
	        value: function getPath() {
	            return this._path;
	        }
	    }, {
	        key: 'getPathRegex',
	        value: function getPathRegex() {
	            var segments = this.getSegments();
	            var regexPath = '/';
	            var segment = void 0;
	            var i = void 0;
	            var length = segments.length;

	            for (i = 0; i < length; i++) {
	                segment = segments[i];

	                if (segment === '**') {
	                    // match any character, including slashes (multiple segments)
	                    // eg: bla or bla/bla or bla/bla/bla
	                    regexPath = regexPath + '(.*)';
	                } else if (segment === '*') {
	                    // match anything expect slashes and end with a slash (1 segment only).
	                    // eg: bla/ but not /bla/ or bla/bla/
	                    regexPath = regexPath + '([^/]*)/';
	                } else {
	                    // Either the segment, a wildcard or double wildcard and ends with a forward slash (1 segment only).
	                    // eg: segment/ or */ or **/
	                    regexPath = regexPath + '(' + segment + '|\\*|\\*\\*)/';
	                }
	            }

	            return new RegExp(regexPath);
	        }
	    }, {
	        key: 'setSegments',
	        value: function setSegments(segments) {
	            this.setPath(segments.join('/'));
	        }
	    }, {
	        key: 'getSegments',
	        value: function getSegments() {
	            var segments = this._path.split('/');

	            segments.pop();
	            segments.shift();

	            return segments;
	        }
	    }, {
	        key: 'getSegment',
	        value: function getSegment(index) {
	            return this.getSegments()[index];
	        }
	    }, {
	        key: 'getFirstSegment',
	        value: function getFirstSegment() {
	            return this.getSegment(0);
	        }
	    }, {
	        key: 'getLastSegment',
	        value: function getLastSegment() {
	            var segments = this.getSegments();
	            return this.getSegment(segments.length - 1);
	        }
	    }, {
	        key: 'contains',
	        value: function contains(foreignStateOrPathOrArray) {
	            if (Array.isArray(foreignStateOrPathOrArray)) {
	                return this._containsStateInArray(foreignStateOrPathOrArray);
	            }

	            var // if we get this far, it is a state or path
	            foreignStateOrPath = foreignStateOrPathOrArray;

	            var foreignState = NavigationState.make(foreignStateOrPath);
	            var foreignSegments = foreignState.getSegments();
	            var nativeSegments = this.getSegments();
	            var foreignMatch = this.getPath().match(foreignState.getPathRegex());
	            var nativeMatch = foreignState.getPath().match(this.getPathRegex());
	            // $FlowFixMe should return the corrent type
	            var isForeignMatch = foreignMatch && foreignMatch.index === 0 ? true : false; // eslint-disable-line no-unneeded-ternary
	            // $FlowFixMe should return the corrent type
	            var isNativeMatch = nativeMatch && nativeMatch.index === 0 ? true : false; // eslint-disable-line no-unneeded-ternary
	            var foreignSegmentDoubleWildcardsMatch = foreignState.getPath().match(/\*\*/g);
	            var doubleWildcardsLength = foreignSegmentDoubleWildcardsMatch ? foreignSegmentDoubleWildcardsMatch.length : 0;
	            var tooManyForeignSegments = foreignSegments.length > nativeSegments.length + doubleWildcardsLength;
	            var enoughNativeSegments = nativeSegments.length > foreignSegments.length;

	            return (isForeignMatch || isNativeMatch && enoughNativeSegments) && !tooManyForeignSegments;
	        }
	    }, {
	        key: '_containsStateInArray',
	        value: function _containsStateInArray(foreignStatesOrPaths) {
	            var i = void 0;
	            var length = foreignStatesOrPaths.length;
	            var foreignStateOrPath = void 0;

	            for (i = 0; i < length; i++) {
	                foreignStateOrPath = foreignStatesOrPaths[i];
	                if (this.contains(foreignStateOrPath)) {
	                    return true;
	                }
	            }

	            return false;
	        }
	    }, {
	        key: 'equals',
	        value: function equals(stateOrPathOrArray) {
	            if (stateOrPathOrArray instanceof Array) {
	                return this._equalsStateInArray(stateOrPathOrArray);
	            }

	            var // if we get this far, it is a state or path
	            stateOrPath = stateOrPathOrArray; // Or the other way around for double wildcard states

	            var state = NavigationState.make(stateOrPath);
	            var subtractedState = this.subtract(state) || state.subtract(this);

	            if (subtractedState === null) {
	                return false;
	            }

	            return subtractedState.getSegments().length === 0;
	        }
	    }, {
	        key: '_equalsStateInArray',
	        value: function _equalsStateInArray(statesOrPaths) {
	            var i = void 0;
	            var length = statesOrPaths.length;
	            var stateOrPath = void 0;

	            for (i = 0; i < length; i++) {
	                stateOrPath = statesOrPaths[i];
	                if (this.equals(stateOrPath)) {
	                    return true;
	                }
	            }

	            return false;
	        }
	    }, {
	        key: 'subtract',
	        value: function subtract(operandStateOrPath) {
	            var operand = NavigationState.make(operandStateOrPath);

	            if (!this.contains(operand)) {
	                return null;
	            }

	            var subtractedPath = this.getPath().replace(operand.getPathRegex(), '');

	            return new NavigationState(subtractedPath);
	        }
	    }, {
	        key: 'append',
	        value: function append(stringOrState) {
	            var path = stringOrState;
	            if (stringOrState instanceof NavigationState) {
	                path = stringOrState.getPath();
	            }
	            return this.setPath(this._path + path);
	        }
	    }, {
	        key: 'prepend',
	        value: function prepend(stringOrState) {
	            var path = stringOrState;
	            if (stringOrState instanceof NavigationState) {
	                path = stringOrState.getPath();
	            }
	            return this.setPath(path + this._path);
	        }
	    }, {
	        key: 'hasWildcard',
	        value: function hasWildcard() {
	            return this.getPath().indexOf('/*/') !== -1;
	        }
	    }, {
	        key: 'mask',
	        value: function mask(sourceStateOrPath) {
	            var sourceState = NavigationState.make(sourceStateOrPath);
	            var unmaskedSegments = this.getSegments();
	            var sourceSegments = sourceState.getSegments();
	            var length = Math.min(unmaskedSegments.length, sourceSegments.length);
	            var i = void 0;

	            for (i = 0; i < length; i++) {
	                if (unmaskedSegments[i] === '*') {
	                    unmaskedSegments[i] = sourceSegments[i];
	                }
	            }

	            return new NavigationState(unmaskedSegments);
	        }
	    }, {
	        key: 'clone',
	        value: function clone() {
	            return new NavigationState(this._path);
	        }
	    }], [{
	        key: 'make',
	        value: function make(stateOrPath) {
	            return stateOrPath instanceof NavigationState ? stateOrPath : new NavigationState(stateOrPath);
	        }
	    }]);
	    return NavigationState;
	}();

	exports.default = NavigationState;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(33);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//  weak

	var NavigationResponderBehaviors = {};
	NavigationResponderBehaviors.IHasStateInitialization = {
	    name: 'IHasStateInitialization',
	    methods: ['initializeByNavigator']
	};
	NavigationResponderBehaviors.IHasStateValidation = {
	    name: 'IHasStateValidation',
	    methods: ['validate']
	};
	NavigationResponderBehaviors.IHasStateValidationAsync = {
	    name: 'IHasStateValidationAsync',
	    extends: ['IHasStateValidation'],
	    methods: ['prepareValidation']
	};
	NavigationResponderBehaviors.IHasStateValidationOptional = {
	    name: 'IHasStateValidationOptional',
	    extends: ['IHasStateValidation'],
	    methods: ['willValidate']
	};
	NavigationResponderBehaviors.IHasStateValidationOptionalAsync = {
	    name: 'IHasStateValidationOptionalAsync',
	    extends: ['IHasStateValidationAsync', 'IHasStateValidationOptional'],
	    methods: []
	};
	NavigationResponderBehaviors.IHasStateRedirection = {
	    name: 'IHasStateRedirection',
	    extends: ['IHasStateValidation'],
	    methods: ['redirect']
	};
	NavigationResponderBehaviors.IHasStateSwap = {
	    name: 'IHasStateSwap',
	    methods: ['willSwapToState', 'swapOut', 'swapIn']
	};
	NavigationResponderBehaviors.IHasStateTransition = {
	    name: 'IHasStateTransition',
	    methods: ['transitionIn', 'transitionOut']
	};
	NavigationResponderBehaviors.IHasStateUpdate = {
	    name: 'IHasStateUpdate',
	    methods: ['updateState']
	};

	NavigationResponderBehaviors.implementsBehaviorInterface = function implementsBehaviorInterface(object, _interface) {
	    if (object.navigatorBehaviors === undefined || !(object.navigatorBehaviors instanceof Array)) {
	        // The input interface is not set on object's navigatorBehaviors.
	        return false;
	    }

	    var inheritanceChain = NavigationResponderBehaviors.getInterfaceInheritanceChain(_interface);
	    var methodsToBeImplemented = NavigationResponderBehaviors.getInterfaceMethods(inheritanceChain);
	    var i = void 0;
	    var method = void 0;
	    var length = methodsToBeImplemented.length;

	    for (i = 0; i < length; i++) {
	        method = methodsToBeImplemented[i];

	        if (object[method] === undefined || typeof object[method] !== 'function') {
	            return false;
	        }
	    }

	    return true;
	};

	NavigationResponderBehaviors.getInterfaceInheritanceChain = function (_interface, existingChain) {
	    var chain = existingChain || [];
	    var extendingInterface = void 0;
	    var i = void 0;
	    var interfaceObject = NavigationResponderBehaviors[_interface];

	    if (interfaceObject === undefined || (typeof interfaceObject === 'undefined' ? 'undefined' : (0, _typeof3.default)(interfaceObject)) !== 'object') {
	        //		console.log('behaviorObject for interface is undefined ', interface );
	        return chain;
	    }

	    chain.push(_interface);
	    var extendsArray = interfaceObject.extends;
	    if (extendsArray === undefined) {
	        //		console.log('extendsArray for interface is undefined, the chain ends here ', interface, chain);
	        return chain;
	    }

	    var length = extendsArray.length;

	    for (i = 0; i < length; i++) {
	        extendingInterface = extendsArray[i];
	        if (chain.indexOf(extendingInterface) === -1) {
	            // We did not yet extend this interface, so continue to follow the chain
	            NavigationResponderBehaviors.getInterfaceInheritanceChain(extendingInterface, chain);
	        }
	    }

	    return chain;
	};

	NavigationResponderBehaviors.getInterfaceMethods = function (interfaces) {
	    if (interfaces === undefined || !Array.isArray(interfaces)) {
	        // No valid input
	        return [];
	    }

	    var combinedInterfacesChain = [];
	    var _interface = void 0;
	    var i = void 0;
	    var length = interfaces.length;
	    var interfaceObject = void 0;
	    var interfaceMethods = void 0;
	    var j = void 0;
	    var methodsLength = void 0;
	    var method = void 0;
	    var methods = [];

	    for (i = 0; i < length; i++) {
	        _interface = interfaces[i];
	        NavigationResponderBehaviors.getInterfaceInheritanceChain(_interface, combinedInterfacesChain);
	    }

	    length = combinedInterfacesChain.length;
	    for (i = 0; i < length; i++) {
	        _interface = combinedInterfacesChain[i];
	        interfaceObject = NavigationResponderBehaviors[_interface];
	        interfaceMethods = interfaceObject.methods;
	        if (interfaceObject !== undefined && (typeof interfaceObject === 'undefined' ? 'undefined' : (0, _typeof3.default)(interfaceObject)) === 'object' && interfaceMethods !== undefined && interfaceMethods instanceof Array) {
	            methodsLength = interfaceMethods.length;
	            for (j = 0; j < methodsLength; j++) {
	                method = interfaceMethods[j];
	                if (methods.indexOf(method) === -1) {
	                    methods.push(method);
	                }
	            }
	        }
	    }

	    return methods;
	};

	exports.default = NavigationResponderBehaviors;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(34);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(68);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(63);
	module.exports = __webpack_require__(67).f('iterator');

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(37)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(40)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(39);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(17)
	  , redefine       = __webpack_require__(42)
	  , hide           = __webpack_require__(21)
	  , has            = __webpack_require__(7)
	  , Iterators      = __webpack_require__(43)
	  , $iterCreate    = __webpack_require__(44)
	  , setToStringTag = __webpack_require__(59)
	  , getPrototypeOf = __webpack_require__(61)
	  , ITERATOR       = __webpack_require__(60)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(45)
	  , descriptor     = __webpack_require__(22)
	  , setToStringTag = __webpack_require__(59)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(21)(IteratorPrototype, __webpack_require__(60)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(9)
	  , dPs         = __webpack_require__(46)
	  , enumBugKeys = __webpack_require__(57)
	  , IE_PROTO    = __webpack_require__(55)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(13)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(58).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(8)
	  , anObject = __webpack_require__(9)
	  , getKeys  = __webpack_require__(47);

	module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(48)
	  , enumBugKeys = __webpack_require__(57);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(7)
	  , toIObject    = __webpack_require__(49)
	  , arrayIndexOf = __webpack_require__(52)(false)
	  , IE_PROTO     = __webpack_require__(55)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(50)
	  , defined = __webpack_require__(39);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(51);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(49)
	  , toLength  = __webpack_require__(53)
	  , toIndex   = __webpack_require__(54);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(56)('keys')
	  , uid    = __webpack_require__(6);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(14)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14).document && document.documentElement;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(8).f
	  , has = __webpack_require__(7)
	  , TAG = __webpack_require__(60)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(56)('wks')
	  , uid        = __webpack_require__(6)
	  , Symbol     = __webpack_require__(14).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(7)
	  , toObject    = __webpack_require__(62)
	  , IE_PROTO    = __webpack_require__(55)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(39);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	var global        = __webpack_require__(14)
	  , hide          = __webpack_require__(21)
	  , Iterators     = __webpack_require__(43)
	  , TO_STRING_TAG = __webpack_require__(60)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(65)
	  , step             = __webpack_require__(66)
	  , Iterators        = __webpack_require__(43)
	  , toIObject        = __webpack_require__(49);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(40)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(60);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	module.exports = __webpack_require__(18).Symbol;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(14)
	  , has            = __webpack_require__(7)
	  , DESCRIPTORS    = __webpack_require__(11)
	  , $export        = __webpack_require__(17)
	  , redefine       = __webpack_require__(42)
	  , META           = __webpack_require__(5).KEY
	  , $fails         = __webpack_require__(12)
	  , shared         = __webpack_require__(56)
	  , setToStringTag = __webpack_require__(59)
	  , uid            = __webpack_require__(6)
	  , wks            = __webpack_require__(60)
	  , wksExt         = __webpack_require__(67)
	  , wksDefine      = __webpack_require__(71)
	  , keyOf          = __webpack_require__(72)
	  , enumKeys       = __webpack_require__(73)
	  , isArray        = __webpack_require__(76)
	  , anObject       = __webpack_require__(9)
	  , toIObject      = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(15)
	  , createDesc     = __webpack_require__(22)
	  , _create        = __webpack_require__(45)
	  , gOPNExt        = __webpack_require__(77)
	  , $GOPD          = __webpack_require__(79)
	  , $DP            = __webpack_require__(8)
	  , $keys          = __webpack_require__(47)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(78).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(75).f  = $propertyIsEnumerable;
	  __webpack_require__(74).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(14)
	  , core           = __webpack_require__(18)
	  , LIBRARY        = __webpack_require__(41)
	  , wksExt         = __webpack_require__(67)
	  , defineProperty = __webpack_require__(8).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(47)
	  , toIObject = __webpack_require__(49);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(47)
	  , gOPS    = __webpack_require__(74)
	  , pIE     = __webpack_require__(75);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 75 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(51);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(49)
	  , gOPN      = __webpack_require__(78).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(48)
	  , hiddenKeys = __webpack_require__(57).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(75)
	  , createDesc     = __webpack_require__(22)
	  , toIObject      = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(15)
	  , has            = __webpack_require__(7)
	  , IE8_DOM_DEFINE = __webpack_require__(10)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71)('asyncIterator');

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71)('observable');

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _AutoBind = __webpack_require__(84);

	var _AutoBind2 = _interopRequireDefault(_AutoBind);

	var _NavigatorEvent = __webpack_require__(23);

	var NavigatorEvent = _interopRequireWildcard(_NavigatorEvent);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* History manager for the navigatorjs.Navigator
	*
	* @example
	*	<code>
	*
	*		// Create the normal navigator
	*		var navigator = new navigatorjs.Navigator();
	*
	*		// Create the history and supply the navigator it should manage
	*		var history = new navigatorjs.History(navigator);
	*
	*		// Navigate to states as you normally would
	*		navigator.request('/my/state');
	*
	*		// Go back in time
	*		history.back();
	*
	*	</code>
	*
	* @author Laurent van Dommelen
	* @created 11 oct 2013
	*
	* @param {navigatorjs.Navigator} navigator
	*/
	//  weak
	var History = function History(navigator) {
	    // Bind the methods to this scope
	    (0, _AutoBind2.default)(this, this);

	    // Initialize the instance
	    this._initialize(navigator);
	};

	// Default max history length, don't change this,
	// change the maxLength instance property
	History.MAX_HISTORY_LENGTH = 100;

	// Navigation direction types
	History.DIRECTION_BACK = -1;
	History.DIRECTION_NORMAL = 0;
	History.DIRECTION_FORWARD = 1;

	/**
	* Instance properties
	*/
	History.prototype = {

	    // The navigator it is controlling
	    _navigator: null,

	    // The history, last state is at start of Array
	    _history: null,

	    // The current position in history
	    _historyPosition: 0,

	    // The navigator doesn't know anything about going forward or back.
	    // Therefore, we need to keep track of the direction.
	    // This is changed when the forward or back methods are called.
	    _navigationDirection: History.DIRECTION_NORMAL,

	    // The max number of history states
	    maxLength: History.MAX_HISTORY_LENGTH,

	    /**
	    * Create the history manager. When navigating back and forword, the history is maintained.
	    * It is truncated when navigating to a state naturally
	    *
	    * @param {navigatorjs.Navigator} navigator
	    * @param {Object} [options]
	    */
	    _initialize: function _initialize(navigator, options) {
	        // Setup the options
	        if (options) {
	            this.maxLength = options.maxLength || this.maxLength;
	        }

	        // Create the history array containing the NavigationState objects
	        this._history = [];

	        // Listen to changes on the navigator
	        this._navigator = navigator;
	        this._navigator.on(NavigatorEvent.STATE_CHANGED, this._handleStateChange);
	    },


	    /**
	    * Go back in the history
	    *
	    * @param {Number} [steps=1] The number of steps to go back in history
	    * @return {Boolean} Returns false if there was no previous state
	    */
	    back: function back(steps) {
	        // Check if we know history
	        if (this._historyPosition === this._history.length - 1) {
	            return false;
	        }

	        // Set to 1 by default
	        steps = steps || 1;

	        // Set the history position and navigate to it
	        this._historyPosition = Math.min(this._history.length - 1, this._historyPosition + steps);
	        this._navigationDirection = History.DIRECTION_BACK;
	        this._navigateToCurrentHistoryPosition();
	        return true;
	    },


	    /**
	    * Go forward in the history
	    *
	    * @param {Number} [steps=1] The number of steps to go forward in history
	    * @return {Boolean} Returns false if there was no next state
	    */
	    forward: function forward(steps) {
	        if (this._historyPosition === 0) {
	            return false;
	        }

	        // Set to 1 by default
	        steps = steps || 1;

	        // Set the history position and navigate to it
	        this._historyPosition = Math.max(0, this._historyPosition - steps);
	        this._navigationDirection = History.DIRECTION_FORWARD;
	        this._navigateToCurrentHistoryPosition();
	        return true;
	    },


	    /**
	    * Go back in the history and return that NavigationState
	    *
	    * @param {Number} [steps=1] The number of steps to go back in history
	    * @return {navigatorjs.NavigationState} The found state or null if no state was found
	    */
	    getPreviousState: function getPreviousState(steps) {
	        // Cannot go beyond the first entry in history
	        if (this._history.length === 0 || this._historyPosition === Math.max(0, this._history.length - 1)) {
	            return null;
	        }

	        // Set to 1 by default
	        steps = steps || 1;

	        // Fetch the requested state in history
	        var position = Math.min(this._history.length - 1, Math.max(0, this._historyPosition + steps));
	        return this._history[position];
	    },


	    /**
	    * Go forward in the history and return that NavigationState
	    *
	    * @param {Number} [steps=1] The number of steps to go back in history
	    * @return {navigatorjs.NavigationState} The found state or null if no state was found
	    */
	    getNextState: function getNextState(steps) {
	        // Cannot look into the future
	        if (this._history.length === 0 || this._historyPosition === 0) {
	            return null;
	        }

	        // Set to 1 by default
	        steps = steps || 1;

	        // Fetch the requested state in history
	        var position = Math.max(0, this._historyPosition - steps);
	        return this._history[position];
	    },


	    /**
	    * Fetch the current NavigationState
	    *
	    * @return {navigatorjs.NavigationState}
	    */
	    getCurrentState: function getCurrentState() {
	        return this._history[this._historyPosition] || null;
	    },


	    /**
	    * Clear the navigation history
	    */
	    clearHistory: function clearHistory() {
	        this._history = [];
	        this._historyPosition = 1;
	    },


	    /**
	    * Get the full history
	    *
	    * @return {Array} List of navigatorjs.NavigationStates
	    */
	    all: function all() {
	        return this._history;
	    },


	    /**
	    * Get the state by historyposition
	    *
	    * @param {Number} position The position in history
	    * @return {navigatorjs.NavigationState} The found state or null if no state was found
	    */
	    getStateByPosition: function getStateByPosition(position) {
	        if (position < 0 || position > this._history.length - 1) {
	            return null;
	        }
	        return this._history[position];
	    },


	    /**
	    * Get the first occurence of a state in the history
	    *
	    * @param {navigatorjs.NavigationState} state The NavigationState in history
	    * @return {Number} The found position or false if not found
	    */
	    getPositionByState: function getPositionByState(state) {
	        return this.getPositionByPath(state.getPath());
	    },


	    /**
	    * Find the first occurence of the path in the history
	    *
	    * @param {String} path
	    * @return {Number} The index or false if not found
	    */
	    getPositionByPath: function getPositionByPath(path) {
	        var count = this.getLength();
	        for (var i = 0; i < count; i++) {
	            if (this._history[i].getPath() === path) {
	                return i;
	            }
	        }
	        return false;
	    },


	    /**
	    * Get the number of items in the history
	    *
	    * @return {Number}
	    */
	    getLength: function getLength() {
	        return this._history.length;
	    },


	    /**
	    * Tell the navigator to go the current historyPosition
	    */
	    _navigateToCurrentHistoryPosition: function _navigateToCurrentHistoryPosition() {
	        var newState = this._history[this._historyPosition];
	        this._navigator.request(newState);
	    },


	    /**
	    * Check what to do with the new state
	    *
	    * @param {Object} event
	    * @param {Object} update
	    */
	    _handleStateChange: function _handleStateChange(event, update) {
	        var state = update.state;

	        switch (this._navigationDirection) {

	            case History.DIRECTION_BACK:
	                this._navigationDirection = History.DIRECTION_NORMAL;
	                break;

	            case History.DIRECTION_NORMAL:

	                // Strip every history state before current
	                this._history.splice(0, this._historyPosition);

	                // Add the state at the beginning of the history array
	                this._history.unshift(state);
	                this._historyPosition = 0;

	                // Truncate the history to the max allowed items
	                this._history.length = Math.min(this._history.length, this.maxLength);
	                break;

	            case History.DIRECTION_FORWARD:
	                this._navigationDirection = History.DIRECTION_NORMAL;
	                break;
	            default:
	                break;
	        }
	    }
	};

	// Copy the History object to the navigatorjs namespace
	exports.default = History;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = AutoBind;

	var _jquery = __webpack_require__(85);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function AutoBind(object, context) {
	    for (var key in object) {
	        var method = object[key];
	        if (typeof method === 'function') {
	            object[key] = _jquery2.default.proxy(object[key], context);
	        }
	    }
	} //  weak

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_85__;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(26);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(27);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//  weak
	var AsynchResponders = function () {
	    function AsynchResponders() {
	        (0, _classCallCheck3.default)(this, AsynchResponders);

	        this._responders = [];
	    }

	    // PUBLIC API


	    (0, _createClass3.default)(AsynchResponders, [{
	        key: 'getLength',
	        value: function getLength() {
	            return this._responders.length;
	        }
	    }, {
	        key: 'isBusy',
	        value: function isBusy() {
	            return this.getLength() > 0;
	        }
	    }, {
	        key: 'hasResponder',
	        value: function hasResponder(responder) {
	            return this._responders.indexOf(responder) !== -1;
	        }
	    }, {
	        key: 'addResponder',
	        value: function addResponder(responder) {
	            this._responders.push(responder);
	        }
	    }, {
	        key: 'addResponders',
	        value: function addResponders(additionalRespondersArray) {
	            if (additionalRespondersArray && additionalRespondersArray instanceof Array && additionalRespondersArray.length) {
	                this._responders = this._responders.concat(additionalRespondersArray);
	            }
	        }
	    }, {
	        key: 'takeOutResponder',
	        value: function takeOutResponder(responder) {
	            var index = this._responders.indexOf(responder);
	            if (index !== -1) {
	                this._responders.splice(index, 1);
	                return true;
	            }

	            return false;
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            if (this._responders.length > 0) {
	                console.warn('Resetting too early? Still have responders marked for asynchronous tasks');
	            }

	            this._responders = [];
	        }
	    }]);
	    return AsynchResponders;
	}();

	exports.default = AsynchResponders;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(26);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(27);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _jquery = __webpack_require__(85);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _NavigationState = __webpack_require__(31);

	var _NavigationState2 = _interopRequireDefault(_NavigationState);

	var _NavigationResponderBehaviors = __webpack_require__(32);

	var _NavigationResponderBehaviors2 = _interopRequireDefault(_NavigationResponderBehaviors);

	var _NavigationBehaviors = __webpack_require__(24);

	var NavigationBehaviors = _interopRequireWildcard(_NavigationBehaviors);

	var _NavigatorEvent = __webpack_require__(23);

	var NavigatorEvent = _interopRequireWildcard(_NavigatorEvent);

	var _AsynchResponders = __webpack_require__(86);

	var _AsynchResponders2 = _interopRequireDefault(_AsynchResponders);

	var _TransitionStatus = __webpack_require__(88);

	var TransitionStatus = _interopRequireWildcard(_TransitionStatus);

	var _TransitionCompleteDelegate = __webpack_require__(89);

	var _TransitionCompleteDelegate2 = _interopRequireDefault(_TransitionCompleteDelegate);

	var _ValidationPreparedDelegate = __webpack_require__(90);

	var _ValidationPreparedDelegate2 = _interopRequireDefault(_ValidationPreparedDelegate);

	var _ResponderLists = __webpack_require__(25);

	var _ResponderLists2 = _interopRequireDefault(_ResponderLists);

	var _AutoBind = __webpack_require__(84);

	var _AutoBind2 = _interopRequireDefault(_AutoBind);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _$eventDispatcher = null;
	// internal namespaces
	//  weak
	/* eslint "no-use-before-define": 1 */
	var _flow = {};
	var _transition = {};
	var _validation = {};
	var _hidden = {};
	//
	var _currentState = null;
	var _previousState = null;
	var _defaultState = null;
	var _isTransitioning = false;
	//
	var _responders = null; // new ResponderLists();
	var _respondersByID = null; // {};
	var _statusByResponderID = null; // {};
	var _redirects = null;
	var _disappearingAsynchResponders = null;
	var _appearingAsynchResponders = null;
	var _swappingAsynchResponders = null;
	var _validatingAsynchResponders = null;
	var _preparedValidatingAsynchRespondersStack = null;
	var _inlineRedirectionState = null;
	//
	var _asyncInvalidated = false;
	var _asyncValidated = false;
	var _asyncValidationOccurred = false;
	var _responderIDCount = 0;

	var _modify = function _modify(addition, responder, pathsOrStates, behaviorString) {
	    if (_relayModification(addition, responder, pathsOrStates, behaviorString)) {
	        return;
	    }

	    // Using the path variable as dictionary key to break instance referencing.
	    var path = _NavigationState2.default.make(pathsOrStates).getPath();

	    var list = void 0;
	    var matchingInterface = void 0;

	    // Create, store and retrieve the list that matches the desired behavior.

	    switch (behaviorString) {
	        case NavigationBehaviors.SHOW:
	            matchingInterface = 'IHasStateTransition';
	            list = _responders.showByPath[path] = _responders.showByPath[path] || [];
	            break;
	        case NavigationBehaviors.HIDE:
	            matchingInterface = 'IHasStateTransition';
	            list = _responders.hideByPath[path] = _responders.hideByPath[path] || [];
	            break;
	        case NavigationBehaviors.VALIDATE:
	            matchingInterface = 'IHasStateValidation';
	            list = _responders.validateByPath[path] = _responders.validateByPath[path] || [];
	            break;
	        case NavigationBehaviors.UPDATE:
	            matchingInterface = 'IHasStateUpdate';
	            list = _responders.updateByPath[path] = _responders.updateByPath[path] || [];
	            break;
	        case NavigationBehaviors.SWAP:
	            matchingInterface = 'IHasStateSwap';
	            list = _responders.swapByPath[path] = _responders.swapByPath[path] || [];
	            break;
	        default:
	            throw new Error('Unknown behavior: ' + behaviorString);
	    }

	    // TODO: Build in more strict validation?
	    if (!_NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, matchingInterface)) {
	        throw new Error('Responder ' + responder + ' should implement ' + matchingInterface + ' to respond to ' + behaviorString);
	    }
	    if (addition) {
	        // add

	        if (list.indexOf(responder) < 0) {
	            list.push(responder);

	            if (responder.__navigatorjs === undefined) {
	                // Create new hidden navigatorjs data
	                _responderIDCount++;
	                responder.__navigatorjs = { id: _responderIDCount };
	                _respondersByID[responder.__navigatorjs.id] = responder;
	            }

	            // If the responder has no status yet, initialize it to UNINITIALIZED:
	            _statusByResponderID[responder.__navigatorjs.id] = _statusByResponderID[responder.__navigatorjs.id] || TransitionStatus.UNINITIALIZED;
	        } else {
	            return;
	        }
	    } else {
	        // remove
	        var index = list.indexOf(responder);
	        if (index >= 0) {
	            list.splice(index, 1);

	            delete _statusByResponderID[responder.__navigatorjs.id];
	            delete _respondersByID[responder.__navigatorjs.id];
	        } else {
	            return;
	        }

	        if (matchingInterface === 'IHasStateSwap' && _responders.swappedBefore[responder]) {
	            // cleanup after the special swap case
	            delete _responders.swappedBefore[responder];
	        }
	    }

	    _$eventDispatcher.trigger(NavigatorEvent.TRANSITION_STATUS_UPDATED, { statusByResponderID: _statusByResponderID, respondersByID: _respondersByID });
	};

	var _relayModification = function _relayModification(addition, responder, pathsOrStates, behaviorString) {
	    if (!responder) {
	        throw new Error('add: responder is null');
	    }

	    var i = void 0;
	    var length = void 0;

	    if (pathsOrStates instanceof Array) {
	        length = pathsOrStates.length;
	        for (i = 0; i < length; i++) {
	            _modify(addition, responder, pathsOrStates[i], behaviorString);
	        }
	        return true;
	    }

	    behaviorString = behaviorString || NavigationBehaviors.AUTO;
	    if (behaviorString === NavigationBehaviors.AUTO) {
	        length = NavigationBehaviors.ALL_AUTO.length;
	        for (i = 0; i < length; i++) {
	            try {
	                _modify(addition, responder, pathsOrStates, NavigationBehaviors.ALL_AUTO[i]);
	            } catch (e) {
	                // console.warn(e);
	                // ignore 'should implement xyz' errors
	            }
	        }
	        return true;
	    }

	    return false;
	};

	/**
	* Check if there is a responder registered for a given state. Optionally check for implementation of a given
	* interface. This allows you to check if there was something mapped to a state which implements
	* "IHasStateValidationAsync" for example.
	*/
	var _hasRegisteredResponder = function _hasRegisteredResponder(state, optionalInterface) {
	    var i = void 0;
	    var length = _responders.all.length;
	    var j = void 0;
	    var respondersLength = void 0;
	    var responder = void 0;
	    var responders = void 0;
	    var respondersForPath = void 0;
	    var path = void 0;

	    for (i = 0; i < length; i++) {
	        responders = _responders.all[i];
	        for (path in responders) {
	            if (state.equals(path)) {
	                if (optionalInterface) {
	                    // Loop through all responders and check if it implements the given interface
	                    respondersForPath = responders[path];
	                    respondersLength = respondersForPath.length;
	                    for (j = 0; j < respondersLength; j++) {
	                        responder = respondersForPath[j];
	                        if (_NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, optionalInterface)) {
	                            return true;
	                        }
	                    }
	                } else {
	                    return true;
	                }

	                return true;
	            }
	        }
	    }

	    return false;
	};

	var _request = function _request(pathOrState) {
	    if (pathOrState === null) {
	        // logger.error("Requested a null state. Aborting request.");
	        return;
	    }
	    var requestedState = void 0;
	    var path = void 0;
	    var fromState = void 0;
	    var toState = void 0;

	    // Store and possibly mask the requested state
	    requestedState = _NavigationState2.default.make(pathOrState);
	    if (requestedState.hasWildcard()) {
	        requestedState = requestedState.mask(_currentState || _defaultState);
	    }

	    // Check for exact match of the requested and the current state
	    if (_currentState && _currentState.getPath() === requestedState.getPath()) {
	        // logger.info("Already at the requested state: " + requested);
	        return;
	    }

	    if (_redirects) {
	        for (path in _redirects) {
	            fromState = new _NavigationState2.default(path);
	            if (fromState.equals(requestedState)) {
	                toState = _NavigationState2.default.make(_redirects[path]);
	                // logger.info("Redirecting " + from + " to " + to);
	                _request(toState);
	                return;
	            }
	        }
	    }

	    // this event makes it possible to add responders just in time to participate in the validation process.
	    _$eventDispatcher.trigger(NavigatorEvent.STATE_REQUESTED, { state: requestedState });

	    // Inline redirection is reset with every request call.
	    // It can be changed by a responder implementing the IHasStateRedirection interface.
	    _inlineRedirectionState = null;

	    _performRequestCascade(requestedState);
	};

	var _performRequestCascade = function _performRequestCascade(requestedState, startAsyncValidation) {
	    if (!_defaultState) {
	        throw new Error('No default state set. Call start() before the first request!');
	    }
	    // Request cascade starts here.
	    //
	    //		console.groupEnd();
	    //		console.group('_performRequestCascade', requestedState.getPath(), startAsyncValidation);
	    if (requestedState.getPath() === _defaultState.getPath() && !_defaultState.hasWildcard()) {
	        //			console.log('exact match');
	        // Exact match on default state bypasses validation.
	        _grantRequest(_defaultState);
	    } else if (_asyncValidationOccurred && _asyncValidated && !_asyncInvalidated) {
	        //			console.log('Async operation completed');
	        // Async operation completed
	        _grantRequest(requestedState);
	    } else if (_validate(requestedState, true, startAsyncValidation)) {
	        //			console.log('Any other state needs to be validated.');
	        // Any other state needs to be validated.
	        _grantRequest(requestedState);
	    } else if (_validatingAsynchResponders && _validatingAsynchResponders.isBusy()) {
	        //			console.log('Waiting for async validation.');
	        // Waiting for async validation.
	        // FIXME: What do we do in the mean time, dispatch an event or sth?
	        // logger.notice("waiting for async validation to complete");
	    } else if (startAsyncValidation && _asyncValidationOccurred) {
	        //			console.log('any async prepration happened instantaneuously');
	        // any async prepration happened instantaneuously
	    } else if (_inlineRedirectionState) {
	        //			console.log('_inlineRedirectionState');
	        _request(_inlineRedirectionState);
	    } else if (_currentState) {
	        //			console.log('_inlineRedirectionState');
	        // If validation fails, the notifyStateChange() is called with the current state as a parameter,
	        // mainly for subclasses to respond to the blocked navigation (e.g. SWFAddress).
	        _notifyStateChange(_currentState);
	    } else if (requestedState.hasWildcard()) {
	        //			console.log('wildcard error');
	        // If we get here, after validateWithWildcards has failed, this means there are still
	        // wildcards in the requested state that didn't match the previous state. This,
	        // unfortunately means your application has a logic error. Go fix it!
	        throw new Error('Check wildcard masking: ' + requestedState.getPath());
	    } else if (_defaultState) {
	        //			console.log('everything failed, use default state');
	        // If all else fails, we'll put up the default state.
	        _grantRequest(_defaultState);
	    } else {
	        //			console.log('everything failed without default state');
	        // If you don't provide a default state, at least make sure your first request makes sense!
	        throw new Error('First request is invalid: ' + requestedState.getPath());
	    }
	};

	var _grantRequest = function _grantRequest(state) {
	    _asyncInvalidated = false;
	    _asyncValidated = false;
	    _previousState = _currentState;
	    _currentState = state;

	    _notifyStateChange(_currentState);

	    _flow.startTransition();
	};

	var _notifyStateChange = function _notifyStateChange(state) {
	    // logger.notice(state);

	    // Do call the super.notifyStateChange() when overriding.
	    if (state !== _previousState) {
	        _$eventDispatcher.trigger(NavigatorEvent.STATE_CHANGED, { statusByResponderID: _statusByResponderID, respondersByID: _respondersByID, state: _currentState });
	    }
	};

	// FLOW NAMESPACE START
	_flow.startTransition = function () {
	    _isTransitioning = true;
	    _$eventDispatcher.trigger(NavigatorEvent.TRANSITION_STARTED);

	    _disappearingAsynchResponders = new _AsynchResponders2.default();
	    _disappearingAsynchResponders.addResponders(_flow.transitionOut());

	    if (!_disappearingAsynchResponders.isBusy()) {
	        _flow.performUpdates();
	    }
	};

	_flow.transitionOut = function () {
	    var respondersToShow = _getRespondersToShow();
	    var responderID = void 0;
	    var responder = void 0;
	    var waitForResponders = [];
	    var i = void 0;

	    // This initialize call is to catch responders that were put on stage to show,
	    // yet still need to wait for async out transitions before they actually transition in.
	    _initializeIfNeccessary(respondersToShow);

	    for (responderID in _statusByResponderID) {
	        responder = _respondersByID[responderID];
	        if (respondersToShow.indexOf(responder) === -1) {
	            // if the responder is not already hidden or disappearing, trigger the transitionOut:
	            if (TransitionStatus.HIDDEN < _statusByResponderID[responderID] && _statusByResponderID[responderID] < TransitionStatus.DISAPPEARING &&
	            // We could also not be hidden or disappearing but performing a state swap.
	            _NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, 'IHasStateTransition')) {
	                _statusByResponderID[responderID] = TransitionStatus.DISAPPEARING;
	                waitForResponders.push(responder);

	                // use namespace transition;
	                // console.log('_flow -> transitionOut', responder);
	                responder.transitionOut(new _TransitionCompleteDelegate2.default(responder, TransitionStatus.HIDDEN, NavigationBehaviors.HIDE, this, _transition).call);
	            } else {
	                // already hidden or hiding
	            }
	        }
	    }

	    // loop backwards so we can splice elements off the array while in the loop.
	    for (i = waitForResponders.length; --i >= 0;) {
	        if (_statusByResponderID[waitForResponders[i].__navigatorjs.id] === TransitionStatus.HIDDEN) {
	            waitForResponders.splice(i, 1);
	        }
	    }

	    if (waitForResponders.length > 0) {
	        _$eventDispatcher.trigger(NavigatorEvent.TRANSITION_STATUS_UPDATED, { statusByResponderID: _statusByResponderID, respondersByID: _respondersByID });
	    }

	    return waitForResponders;
	};

	_flow.performUpdates = function () {
	    _disappearingAsynchResponders.reset();

	    var path = void 0;
	    var state = void 0;
	    var list = void 0;
	    var i = void 0;
	    var responder = void 0;

	    for (path in _responders.updateByPath) {
	        // create a state object for comparison:
	        state = new _NavigationState2.default(path);

	        if (_currentState.contains(state)) {
	            // the lookup path is contained by the new state.
	            list = _responders.updateByPath[path];

	            _initializeIfNeccessary(list);

	            // check for existing validators.
	            for (i = 0; i < list.length; i++) {
	                responder = list[i];
	                responder.updateState(_currentState.subtract(state), _currentState);
	            }
	        }
	    }

	    _flow.startTransitionIn();
	};

	_flow.startTransitionIn = function () {
	    _appearingAsynchResponders = new _AsynchResponders2.default();
	    _appearingAsynchResponders.addResponders(_flow.transitionIn());

	    if (!_appearingAsynchResponders.isBusy()) {
	        _flow.startSwapOut();
	    }
	};

	_flow.transitionIn = function () {
	    var respondersToShow = _getRespondersToShow();
	    var respondersToWaitFor = [];
	    var responder = void 0;
	    var status = void 0;
	    var i = void 0;

	    _initializeIfNeccessary(respondersToShow);

	    // for each (var responder : IHasStateTransition in respondersToShow) {

	    for (i = 0; i < respondersToShow.length; i++) {
	        responder = respondersToShow[i];
	        status = _statusByResponderID[responder.__navigatorjs.id];

	        if (status < TransitionStatus.APPEARING || TransitionStatus.SHOWN < status) {
	            // then continue with the transitionIn() call.
	            _statusByResponderID[responder.__navigatorjs.id] = TransitionStatus.APPEARING;
	            respondersToWaitFor.push(responder);

	            // use namespace transition;
	            responder.transitionIn(new _TransitionCompleteDelegate2.default(responder, TransitionStatus.SHOWN, NavigationBehaviors.SHOW, this, _transition).call);
	        }
	    }

	    // loop backwards so we can splice elements off the array while in the loop.
	    for (i = respondersToWaitFor.length; --i >= 0;) {
	        if (_statusByResponderID[respondersToWaitFor[i].__navigatorjs.id] === TransitionStatus.SHOWN) {
	            respondersToWaitFor.splice(i, 1);
	        }
	    }

	    if (respondersToWaitFor.length > 0) {
	        _$eventDispatcher.trigger(NavigatorEvent.TRANSITION_STATUS_UPDATED, { statusByResponderID: _statusByResponderID, respondersByID: _respondersByID });
	    }

	    return respondersToWaitFor;
	};

	_flow.startSwapOut = function () {
	    _swappingAsynchResponders = new _AsynchResponders2.default();
	    _swappingAsynchResponders.addResponders(_flow.swapOut());

	    if (!_swappingAsynchResponders.isBusy()) {
	        _flow.swapIn();
	    }
	};

	_flow.swapOut = function () {
	    _appearingAsynchResponders.reset();

	    var waitForResponders = [];
	    var path = void 0;
	    var state = void 0;
	    var swapByPathList = void 0;
	    var responder = void 0;
	    var i = void 0;
	    var truncatedState = void 0;

	    for (path in _responders.swapByPath) {
	        // create a state object for comparison:
	        state = new _NavigationState2.default(path);

	        if (_currentState.contains(state)) {
	            // the lookup path is contained by the new state.
	            swapByPathList = _responders.swapByPath[path];

	            _initializeIfNeccessary(swapByPathList);

	            // check for existing swaps.
	            for (i = 0; i < swapByPathList.length; i++) {
	                responder = swapByPathList[i];
	                if (!_responders.swappedBefore[responder]) {
	                    continue; // eslint-disable-line no-continue
	                }

	                truncatedState = _currentState.subtract(state);
	                if (responder.willSwapToState(truncatedState, _currentState)) {
	                    _statusByResponderID[responder.__navigatorjs.id] = TransitionStatus.SWAPPING;
	                    waitForResponders.push(responder);

	                    // use namespace transition;
	                    responder.swapOut(new _TransitionCompleteDelegate2.default(responder, TransitionStatus.SHOWN, NavigationBehaviors.SWAP, this, _transition).call);
	                }
	            }
	        }
	    }

	    // loop backwards so we can splice elements off the array while in the loop.
	    for (i = waitForResponders.length; --i >= 0;) {
	        if (_statusByResponderID[waitForResponders[i].__navigatorjs.id] === TransitionStatus.SHOWN) {
	            waitForResponders.splice(i, 1);
	        }
	    }

	    if (waitForResponders.length > 0) {
	        _$eventDispatcher.trigger(NavigatorEvent.TRANSITION_STATUS_UPDATED, { statusByResponderID: _statusByResponderID, respondersByID: _respondersByID });
	    }

	    return waitForResponders;
	};

	_flow.swapIn = function () {
	    _swappingAsynchResponders.reset();

	    var path = void 0;
	    var state = void 0;
	    var swapByPathList = void 0;
	    var responder = void 0;
	    var truncatedState = void 0;
	    var i = void 0;

	    for (path in _responders.swapByPath) {
	        // create a state object for comparison:
	        state = new _NavigationState2.default(path);

	        if (_currentState.contains(state)) {
	            // the lookup path is contained by the new state.
	            swapByPathList = _responders.swapByPath[path];

	            _initializeIfNeccessary(swapByPathList);

	            // check for existing swaps.
	            // for each (var responder : IHasStateSwap in swapByPathList) {
	            for (i = 0; i < swapByPathList.length; i++) {
	                responder = swapByPathList[i];
	                truncatedState = _currentState.subtract(state);
	                if (responder.willSwapToState(truncatedState, _currentState)) {
	                    _responders.swappedBefore[responder] = true;
	                    responder.swapIn(truncatedState, _currentState);
	                }
	            }
	        }
	    }

	    _flow.finishTransition();
	};

	_flow.finishTransition = function () {
	    _isTransitioning = false;
	    _$eventDispatcher.trigger(NavigatorEvent.TRANSITION_FINISHED);
	};
	// FLOW NAMESPACE END

	// TRANSITION NAMESPACE START
	_transition.notifyComplete = function (responder, status, behavior) {
	    if (_statusByResponderID[responder.__navigatorjs.id]) {
	        _statusByResponderID[responder.__navigatorjs.id] = status;
	        _$eventDispatcher.trigger(NavigatorEvent.TRANSITION_STATUS_UPDATED, { statusByResponderID: _statusByResponderID, respondersByID: _respondersByID });
	    }

	    var asynchResponders = void 0;
	    var callbackMethod = void 0;

	    switch (behavior) {
	        case NavigationBehaviors.HIDE:
	            asynchResponders = _disappearingAsynchResponders;
	            callbackMethod = _flow.performUpdates;
	            break;
	        case NavigationBehaviors.SHOW:
	            asynchResponders = _appearingAsynchResponders;
	            callbackMethod = _flow.startSwapOut;
	            break;
	        case NavigationBehaviors.SWAP:
	            asynchResponders = _swappingAsynchResponders;
	            callbackMethod = _flow.swapIn;
	            break;
	        default:
	            throw new Error('Don\'t know how to handle notification of behavior ' + behavior);
	    }

	    // If the notifyComplete is called instantly, the array of asynchronous responders is not yet assigned, and therefore not busy.
	    if (asynchResponders.isBusy()) {
	        asynchResponders.takeOutResponder(responder);

	        // isBusy counts the number of responders, so it might have changed after takeOutResponder().
	        if (!asynchResponders.isBusy()) {
	            callbackMethod();
	        } else {
	            // logger.notice("waiting for " + asynch.length + " responders to " + behavior);
	        }
	    }
	};
	// TRANSITION NAMESPACE END

	// HIDDEN NAMESPACE START
	_hidden.hasResponder = function (responder) {
	    if (_statusByResponderID[responder.__navigatorjs.id]) {
	        return true;
	    }

	    var respondersByPath = void 0;
	    var existingResponders = void 0;
	    var i = void 0;
	    var j = void 0;

	    for (i = 0; i < _responders.all.length; i++) {
	        respondersByPath = _responders.all[i];
	        for (j = 0; j < respondersByPath.length; j++) {
	            existingResponders = respondersByPath[j];
	            if (existingResponders.indexOf(responder) >= 0) {
	                return true;
	            }
	        }
	    }

	    return false;
	};

	_hidden.getStatusByResponderID = function () {
	    return _statusByResponderID;
	};

	_hidden.getRespondersByID = function () {
	    return _respondersByID;
	};

	_hidden.getStatus = function (responder) {
	    return _statusByResponderID[responder.__navigatorjs.id];
	};

	_hidden.getKnownPaths = function () {
	    var list = {};
	    var path = void 0;
	    var knownPaths = [];

	    list[_defaultState.getPath()] = true;

	    for (path in _responders.showByPath) {
	        list[new _NavigationState2.default(path).getPath()] = true;
	    }

	    for (path in list) {
	        knownPaths.push(path);
	    }

	    knownPaths.sort();
	    return knownPaths;
	};
	// HIDDEN NAMESPACE END

	// VALIDATION NAMESPACE START
	_validation.notifyValidationPrepared = function (validatorResponder, truncatedState, fullState) {
	    // If the takeOutResponder() method returns false, it was not in the responder list to begin with.
	    // This happens if a second navigation state is requested before the async validation preparation of the first completes.
	    if (_validatingAsynchResponders.takeOutResponder(validatorResponder)) {
	        if (validatorResponder.validate(truncatedState, fullState)) {
	            _asyncValidated = true;
	        } else {
	            // logger.warn("Asynchronously invalidated by " + validatorResponder);
	            _asyncInvalidated = true;

	            if (_NavigationResponderBehaviors2.default.implementsBehaviorInterface(validatorResponder, 'IHasStateRedirection')) {
	                _inlineRedirectionState = validatorResponder.redirect(truncatedState, fullState);
	            }
	        }

	        if (_asyncInvalidated || !_validatingAsynchResponders.isBusy()) {
	            _validatingAsynchResponders.reset();
	            _preparedValidatingAsynchRespondersStack = [];
	            _performRequestCascade(fullState, false);
	        } else {
	            _validateFirstValidatingAsynchResponderFromStack();
	            //				console.log("Waiting for " + _validatingAsynchResponders.getLength() + " validators to prepare");
	        }
	    } else {
	            // ignore async preparations of former requests.
	        }
	};
	// VALIDATION NAMESPACE END

	var _validateFirstValidatingAsynchResponderFromStack = function _validateFirstValidatingAsynchResponderFromStack() {
	    if (_preparedValidatingAsynchRespondersStack.length === 0) {
	        return false;
	    }

	    var preparedResponder = _preparedValidatingAsynchRespondersStack.shift();
	    preparedResponder.responder.prepareValidation(preparedResponder.remainderState, preparedResponder.unvalidatedState, preparedResponder.callOnPrepared);

	    return true;
	};

	var _validate = function _validate(stateToValidate, allowRedirection, allowAsyncValidation) {
	    allowRedirection = allowRedirection === undefined ? true : allowRedirection;

	    // check to see if there are still wildcards left

	    allowAsyncValidation = allowAsyncValidation === undefined ? true : allowAsyncValidation;
	    var unvalidatedState = stateToValidate;
	    var callOnPrepared = null;
	    var invalidated = false;
	    var validated = false;
	    var path = void 0;
	    var state = void 0;
	    var remainderState = void 0;
	    var validateByPathList = void 0;
	    var i = void 0;
	    var responder = void 0;
	    if (unvalidatedState.hasWildcard()) {
	        return false;
	    }

	    if (unvalidatedState.equals(_defaultState)) {
	        return true;
	    }

	    if (allowAsyncValidation) {
	        // This conditional is only true if we enter the validation the first (synchronous) time.
	        _asyncValidationOccurred = false;
	        _asyncInvalidated = false;
	        _asyncValidated = false;

	        // reset asynchronous validation for every new state.
	        _validatingAsynchResponders = new _AsynchResponders2.default();
	        _preparedValidatingAsynchRespondersStack = [];
	    }

	    var implicit = _validateImplicitly(unvalidatedState);
	    //		console.groupCollapsed('Responders');

	    // TODO should we order the states? As mapping a validating child state before a invalidating parent state will validate the state
	    for (path in _responders.validateByPath) {
	        //			console.log(path);
	        // create a state object for comparison:
	        state = new _NavigationState2.default(path);

	        if (unvalidatedState.contains(state)) {
	            remainderState = unvalidatedState.subtract(state);

	            // the lookup path is contained by the new state.
	            validateByPathList = _responders.validateByPath[path];

	            _initializeIfNeccessary(validateByPathList);

	            if (allowAsyncValidation && _hasRegisteredResponder(stateToValidate)) {
	                // check for async validators first. If this does not
	                for (i = 0; i < validateByPathList.length; i++) {
	                    responder = validateByPathList[i];

	                    // check for optional validation
	                    if (_NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, 'IHasStateValidationOptionalAsync') && !responder.willValidate(remainderState, unvalidatedState)) {
	                        continue; // eslint-disable-line no-continue
	                    }

	                    if (_NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, 'IHasStateValidationAsync')) {
	                        _asyncValidationOccurred = true;

	                        callOnPrepared = new _ValidationPreparedDelegate2.default(responder, remainderState, unvalidatedState, this, _validation).call;
	                        _validatingAsynchResponders.addResponder(responder);
	                        _preparedValidatingAsynchRespondersStack.push({ responder: responder, remainderState: remainderState, unvalidatedState: unvalidatedState, callOnPrepared: callOnPrepared });

	                        //							console.log("Preparing validation (total of " + _validatingAsynchResponders.getLength() + ")");
	                    }
	                }
	            }

	            // check regular validators
	            // for each (responder in list) {
	            for (i = 0; i < validateByPathList.length; i++) {
	                responder = validateByPathList[i];
	                // skip async validators, we handled them a few lines back.
	                if (_NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, 'IHasStateValidationAsync')) {
	                    continue; // eslint-disable-line no-continue
	                }

	                // check for optional validation
	                if (_NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, 'IHasStateValidationOptional') && !responder.willValidate(remainderState, unvalidatedState)) {
	                    continue; // eslint-disable-line no-continue
	                }

	                if (responder.validate(remainderState, unvalidatedState) && _hasRegisteredResponder(unvalidatedState)) {
	                    validated = true;
	                } else {
	                    // logger.warn("Invalidated by validator: " + responder);
	                    invalidated = true;

	                    if (allowRedirection && _NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, 'IHasStateRedirection')) {
	                        _inlineRedirectionState = responder.redirect(remainderState, unvalidatedState);
	                    }

	                    //						console.log("validate - a responder was mapped to the given state, but it did not validate");
	                    //						console.groupEnd();
	                    return false;
	                }
	            }
	        }
	    }

	    if (_asyncValidationOccurred && _validateFirstValidatingAsynchResponderFromStack()) {
	        // If there are active async validators, stop the validation chain and wait for the prepration to finish.
	        // if (_validating.isBusy()) return false;
	        // if (_asyncValidationOccurred && (_asyncValidated || _asyncInvalidated) {
	        // async validation was instantaneous, which means that the validation was approved or denied elsewhere
	        // in the stack. this method should return false any which way.
	        //			console.log("validate - _asyncValidationOccurred","return false");
	        //			console.groupEnd();
	        return false;
	    }

	    //		console.groupEnd();

	    if (_validatingAsynchResponders.isBusy()) {
	        //			console.log("validate - _validatingAsynchResponders.isBusy", "return false");
	        // the request cascade will double check the asynch validators and act accordingly.
	        return false;
	    }

	    // invalidation overrules any validation
	    if (invalidated || _asyncInvalidated) {
	        //			console.log("validate - invalidated || _asyncInvalidated", invalidated,  _asyncInvalidated, "return false");
	        return false;
	    }

	    if (validated || _asyncValidated) {
	        //			console.log("validate - validated || _asyncValidated", validated, _asyncValidated, "return true");
	        return true;
	    }

	    if (!implicit) {}
	    //			console.log("validate - Validation failed. No validators or transitions matched the requested ", unvalidatedState);
	    // logger.warn("Validation failed. No validators or transitions matched the requested " + unvalidatedState);


	    //		console.log("validate - return with the implicit return value", implicit);

	    return implicit;
	};

	var _validateImplicitly = function _validateImplicitly(state) {
	    var path = void 0;
	    for (path in _responders.showByPath) {
	        if (new _NavigationState2.default(path).equals(state)) {
	            // info("Validation passed based on transition responder.");
	            return true;
	        }
	    }

	    return false;
	};

	var _getRespondersToShow = function _getRespondersToShow() {
	    var respondersToShow = _getResponderList(_responders.showByPath, _currentState);

	    // remove elements from the toShow list, if they are in the toHide list.
	    //			for each (var hide : IHasStateTransition in toHide) {

	    var respondersToHide = _getResponderList(_responders.hideByPath, _currentState);
	    var i = void 0;
	    var hideResponder = void 0;
	    var hideIndex = void 0;
	    for (i = 0; i < respondersToHide.length; i++) {
	        hideResponder = respondersToHide[i];
	        hideIndex = respondersToShow.indexOf(hideResponder);
	        if (hideIndex >= 0) {
	            respondersToShow.splice(hideIndex, 1);
	        }
	    }

	    return respondersToShow;
	};

	var _initializeIfNeccessary = function _initializeIfNeccessary(responderList) {
	    var i = void 0;
	    //			for each (var responder : INavigationResponder in responderList) {

	    var responder = void 0;
	    for (i = 0; i < responderList.length; i++) {
	        responder = responderList[i];
	        if (_statusByResponderID[responder.__navigatorjs.id] === TransitionStatus.UNINITIALIZED && _NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, 'IHasStateInitialization')) {
	            // first initialize the responder.
	            responder.initializeByNavigator();
	            _statusByResponderID[responder.__navigatorjs.id] = TransitionStatus.INITIALIZED;
	        }
	    }
	};

	var _getResponderList = function _getResponderList(listObj, state) {
	    var responders = [];
	    var path = void 0;

	    for (path in listObj) {
	        if (state.contains(new _NavigationState2.default(path))) {
	            responders = responders.concat(listObj[path]);
	        }
	    }

	    return responders;
	};

	var Navigator = function () {
	    function Navigator() {
	        (0, _classCallCheck3.default)(this, Navigator);

	        (0, _AutoBind2.default)(this, this);

	        _$eventDispatcher = (0, _jquery2.default)({});
	        _currentState = null;
	        _responders = new _ResponderLists2.default();
	        _respondersByID = {};
	        _statusByResponderID = {};
	        _redirects = null;
	        _responderIDCount = 0;
	    }

	    (0, _createClass3.default)(Navigator, [{
	        key: 'add',
	        value: function add(responder, pathsOrStates, behaviorString) {
	            _modify(true, responder, pathsOrStates, behaviorString);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(responder, pathsOrStates, behaviorString) {
	            _modify(false, responder, pathsOrStates, behaviorString);
	        }
	    }, {
	        key: 'registerRedirect',
	        value: function registerRedirect(fromStateOrPath, toStateOrPath) {
	            _redirects = _redirects || {};
	            _redirects[_NavigationState2.default.make(fromStateOrPath).getPath()] = _NavigationState2.default.make(toStateOrPath);
	        }
	    }, {
	        key: 'start',
	        value: function start(defaultStateOrPath, startStateOrPath) {
	            _defaultState = _NavigationState2.default.make(defaultStateOrPath || '');

	            this.request(startStateOrPath || _defaultState);
	        }
	    }, {
	        key: 'request',
	        value: function request(pathOrState) {
	            _request(pathOrState);
	        }
	    }, {
	        key: 'getCurrentState',
	        value: function getCurrentState() {
	            if (!_currentState) {
	                if (_defaultState) {
	                    return _defaultState.clone();
	                }

	                return null;
	            }

	            return _currentState.clone();
	        }
	    }, {
	        key: 'isTransitioning',
	        value: function isTransitioning() {
	            return _isTransitioning;
	        }
	    }, {
	        key: 'on',
	        value: function on(event, handler) {
	            _$eventDispatcher.on(event, handler);
	            return this;
	        }
	    }, {
	        key: 'off',
	        value: function off(event, handler) {
	            _$eventDispatcher.off(event, handler);
	            return this;
	        }
	    }, {
	        key: 'logResponders',
	        value: function logResponders() {
	            try {
	                console.log(_responders.toString());
	            } catch (e) {
	                console.error(e);
	            }
	        }
	    }]);
	    return Navigator;
	}();

	// PUBLIC API

	exports.default = Navigator;

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toString = toString;
	//  weak
	var UNINITIALIZED = exports.UNINITIALIZED = -2;
	var INITIALIZED = exports.INITIALIZED = -1;
	var HIDDEN = exports.HIDDEN = 1;
	var APPEARING = exports.APPEARING = 2;
	var SHOWN = exports.SHOWN = 3;
	var SWAPPING = exports.SWAPPING = 4;
	var DISAPPEARING = exports.DISAPPEARING = 5;

	function toString(status) {
	    switch (status) {
	        case UNINITIALIZED:
	            return 'UNINITIALIZED';
	        case INITIALIZED:
	            return 'INITIALIZED';
	        case HIDDEN:
	            return 'HIDDEN';
	        case APPEARING:
	            return 'APPEARING';
	        case SHOWN:
	            return 'SHOWN';
	        case SWAPPING:
	            return 'SWAPPING';
	        case DISAPPEARING:
	            return 'DISAPPEARING';
	        default:
	            return 'UNKNOWN';
	    }
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _AutoBind = __webpack_require__(84);

	var _AutoBind2 = _interopRequireDefault(_AutoBind);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TransitionCompleteDelegate(responder, status, behavior, navigator, transitionNamespace) {
	    this._responder = responder;
	    this._status = status;
	    this._behavior = behavior;
	    this._navigator = navigator;
	    this._transitionNamespace = transitionNamespace;
	    this._called = false;
	    (0, _AutoBind2.default)(this, this);
	}

	// PUBLIC API
	//  weak
	TransitionCompleteDelegate.prototype = {
	    call: function call() {
	        if (this._called) {
	            throw new Error('Illegal second call to transition complete. This instance is already prepared for garbage collection!');
	        }

	        this._called = true;
	        this._transitionNamespace.notifyComplete(this._responder, this._status, this._behavior);
	        this._responder = null;
	        this._navigator = null;
	        this._transitionNamespace = null;
	    }
	};

	exports.default = TransitionCompleteDelegate;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _AutoBind = __webpack_require__(84);

	var _AutoBind2 = _interopRequireDefault(_AutoBind);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ValidationPreparedDelegate(validatorResponder, truncatedState, fullState, navigator, validationNamespace) {
	    this._validatorResponder = validatorResponder;
	    this._truncatedState = truncatedState;
	    this._fullState = fullState;
	    this._navigator = navigator;
	    this._validationNamespace = validationNamespace;
	    (0, _AutoBind2.default)(this, this);
	}

	// PUBLIC API
	//  weak
	ValidationPreparedDelegate.prototype = {
	    call: function call() {
	        this._validationNamespace.notifyValidationPrepared(this._validatorResponder, this._truncatedState, this._fullState);
	        this._validatorResponder = null;
	        this._truncatedState = null;
	        this._fullState = null;
	        this._navigator = null;
	        this._validationNamespace = null;
	    }
	};

	exports.default = ValidationPreparedDelegate;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Bind;

	var _jquery = __webpack_require__(85);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Bind(functionOrArray, context) {
	    function bind(method, _context) {
	        if (typeof method === 'function') {
	            _jquery2.default.proxy(method, _context);
	        }
	    }

	    if (Array.isArray(functionOrArray)) {
	        functionOrArray.forEach(function (item) {
	            bind(item, context);
	        });
	    } else {
	        bind(functionOrArray, context);
	    }
	} //  weak

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _jquery = __webpack_require__(85);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _NavigatorEvent = __webpack_require__(23);

	var NavigatorEvent = _interopRequireWildcard(_NavigatorEvent);

	var _NavigationResponderBehaviors = __webpack_require__(32);

	var _NavigationResponderBehaviors2 = _interopRequireDefault(_NavigationResponderBehaviors);

	var _TransitionStatus = __webpack_require__(88);

	var TransitionStatus = _interopRequireWildcard(_TransitionStatus);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//  weak
	/* eslint "no-use-before-define": 1 */
	var _navigator = null;
	var _template = '\n<div class="debugConsole">Path: <input type="text" class="path" />\n<div class="pathRenderer"></div><div class="responders">\n<div class="names"></div><div class="status"></div></div></div>\n';
	var _visible = true;
	var _inputRegex = new RegExp('[-_/A-Za-z0-9]');
	var _$el = null;
	var _$pathInput = null;
	var _$pathRenderer = null;
	var _$responders = null;
	var _$responderNames = null;
	var _$responderStatus = null;
	var _respondersByID = null;
	var _statusByResponderID = null;

	// Input keydown validation and requesting the entered path
	var _onKeyPress = function _onKeyPress(e) {
	    switch (e.which) {
	        case 13:
	            // Return
	            e.preventDefault(); // Prevent char from writing in textfield
	            _navigator.request(_$pathInput.val());
	            return;
	        case 8: // Backspace
	        case 0:
	            // Others such as arrows
	            return; // This can just be execute
	        default:
	            break;
	    }

	    var char = String.fromCharCode(e.which);
	    if (!_inputRegex.test(char)) {
	        e.preventDefault(); // Prevent char from writing in textfield
	    }

	    _autoSizeInput();
	};

	// Toggle showing debug console
	var _onWindowKeyPress = function _onWindowKeyPress(e) {
	    switch (String.fromCharCode(e.which)) {
	        case '~':
	        case '$':
	        case '`':
	            _visible = !_visible;
	            _$el.css({ display: _visible ? '' : 'none' });
	            break;
	        default:
	            break;
	    }
	};

	var _onResponderClick = function _onResponderClick(e) {
	    var responderID = (0, _jquery2.default)(e.target).data('responder-id');

	    console.log('Responder', _respondersByID[responderID]);
	};

	var _autoSizeInput = function _autoSizeInput() {
	    _$pathRenderer.text(_$pathInput.val());
	    _$pathInput.css({ width: _$pathRenderer.width() });
	};

	var _handleStatusUpdated = function _handleStatusUpdated(e, data) {
	    _respondersByID = data.respondersByID;
	    _statusByResponderID = data.statusByResponderID;
	    _updateDisplay();
	};

	var _updateDisplay = function _updateDisplay() {
	    var currentState = _navigator.getCurrentState();
	    var responderID = void 0;
	    var responder = void 0;
	    var status = void 0;
	    var color = void 0;
	    var responderNamesHTMLString = '';
	    var responderStatusHTMLString = '';
	    if (!currentState) {
	        return;
	    }

	    _$pathInput.val(currentState.getPath());
	    _autoSizeInput();

	    for (responderID in _respondersByID) {
	        responder = _respondersByID[responderID];
	        status = _statusByResponderID[responderID];

	        if (_NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, 'IHasStateTransition') || _NavigationResponderBehaviors2.default.implementsBehaviorInterface(responder, 'IHasStateInitialization')) {
	            responderNamesHTMLString += '<span data-responder-id="' + responderID + '">' + _getResponderString(responder) + '</span><br />';
	            color = _getColorByStatus(status);
	            responderStatusHTMLString += '<span style=" color:' + color + '; font-weight:bold;" data-responder-id="' + responderID + '">\n                ' + TransitionStatus.toString(status) + '</span><br />';
	        }
	    }

	    _$responderNames.html(responderNamesHTMLString);
	    _$responderStatus.html(responderStatusHTMLString);
	};

	var _getResponderString = function _getResponderString(responder) {
	    var responderString = responder.toString();

	    if (responderString === '[object Object]' && responder.$el) {
	        var tagName = responder.$el.prop('tagName').toLowerCase();
	        var classes = responder.$el.attr('class').split(' ').join('.');

	        responderString = tagName + '.' + classes;
	    }

	    return responderString;
	};

	var _getColorByStatus = function _getColorByStatus(status) {
	    var color = '';
	    switch (status) {
	        case TransitionStatus.UNINITIALIZED:
	            color = '#AAAAAA';
	            break;
	        case TransitionStatus.INITIALIZED:
	            color = '#FFFFFF';
	            break;
	        case TransitionStatus.HIDDEN:
	            color = '#FF0000';
	            break;
	        case TransitionStatus.APPEARING:
	        case TransitionStatus.DISAPPEARING:
	            color = '#FFFF00';
	            break;
	        case TransitionStatus.SHOWN:
	            color = '#00FF00';
	            break;
	        default:
	            break;
	    }

	    return color;
	};

	var DebugConsole = function DebugConsole(navigator) {
	    _navigator = navigator;

	    _$el = (0, _jquery2.default)(_template);
	    _$pathInput = _$el.find('.path');
	    _$pathRenderer = _$el.find('.pathRenderer');
	    _$responders = _$el.find('.responders');
	    _$responderNames = _$responders.find('.names');
	    _$responderStatus = _$responders.find('.status');

	    // STYLING
	    _$el.css({
	        backgroundColor: '#000000',
	        color: '#AAAAAA',
	        fontFamily: 'Arial',
	        fontSize: 12,
	        padding: 5
	    });

	    _$pathInput.css({
	        color: '#00FF00',
	        backgroundColor: 'transparent',
	        fontFamily: 'Arial',
	        fontSize: 12,
	        minWidth: 200,
	        border: 0
	    });

	    _$pathRenderer.attr('style', _$pathInput.attr('style'));
	    _$pathRenderer.css({
	        position: 'absolute',
	        height: 0,
	        overflowY: 'hidden'
	    });

	    _$responderNames.css({
	        display: 'inline-block',
	        color: '#FF9900',
	        marginRight: 15
	    });

	    _$responderStatus.css({
	        display: 'inline-block'
	    });

	    _$pathInput.on('keypress', _onKeyPress);
	    (0, _jquery2.default)(window).on('keypress', _onWindowKeyPress);

	    _$responderNames.on('click', _onResponderClick);
	    _$responderStatus.on('click', _onResponderClick);

	    _navigator.on(NavigatorEvent.STATE_CHANGED, _handleStatusUpdated);
	    _navigator.on(NavigatorEvent.TRANSITION_STATUS_UPDATED, _handleStatusUpdated);
	};

	// PUBLIC API
	DebugConsole.prototype = {
	    get$El: function get$El() {
	        return _$el;
	    }
	};

	exports.default = DebugConsole;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(26);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(27);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _NavigationState = __webpack_require__(31);

	var _NavigationState2 = _interopRequireDefault(_NavigationState);

	var _Navigator = __webpack_require__(87);

	var _Navigator2 = _interopRequireDefault(_Navigator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//  weak
	var StateCommandMap = function () {
	    function StateCommandMap(navigator, injector) {
	        (0, _classCallCheck3.default)(this, StateCommandMap);
	        this.navigatorBehaviors = ['IHasStateValidationOptional', 'IHasStateUpdate'];

	        this._navigator = navigator;
	        this._injector = injector;
	        this._commandsByState = {};
	        this._verifiedCommandClasses = {};
	    }

	    (0, _createClass3.default)(StateCommandMap, [{
	        key: 'mapCommand',
	        value: function mapCommand(stateOrPath, CommandClass, aExactMatch, aOneShot) {
	            var exactMatch = aExactMatch === undefined ? false : aExactMatch;
	            var oneShot = aOneShot === undefined ? false : aOneShot;
	            var state = _NavigationState2.default.make(stateOrPath);
	            var commands = this._commandsByState[state.getPath()] || [];

	            this._commandsByState[state.getPath()] = commands;
	            this._navigator.add(this, state);

	            if (this._hasCommand(commands, CommandClass)) {
	                throw new Error('Already mapped ' + CommandClass + ' to state ' + state.getPath());
	            }

	            this._verifyCommandClass(CommandClass);

	            commands.push({ CommandClass: CommandClass, state: state, exactMatch: exactMatch, oneShot: oneShot });
	        }
	    }, {
	        key: 'unmapCommand',
	        value: function unmapCommand(stateOrPath, CommandClass) {
	            var state = _NavigationState2.default.make(stateOrPath);
	            var commands = this._commandsByState[state.getPath()] || [];
	            var i = void 0;
	            var wrapper = void 0;
	            this._commandsByState[state.getPath()] = commands;
	            this._navigator.remove(this, state);
	            for (i = commands.length; --i >= 0;) {
	                wrapper = commands[i];
	                if (wrapper.CommandClass === CommandClass) {
	                    commands.splice(i, 1);
	                    return;
	                }
	            }
	        }
	    }, {
	        key: 'willValidate',
	        value: function willValidate(truncatedState, fullState) {
	            // will only validate if the state matches a command.
	            return this.validate(truncatedState, fullState);
	        }
	    }, {
	        key: 'validate',
	        value: function validate(truncatedState, fullState) {
	            var path = void 0;
	            var mappedState = void 0;
	            var commands = void 0;
	            var isExact = void 0;
	            var i = void 0;
	            var wrapper = void 0;

	            for (path in this._commandsByState) {
	                mappedState = _NavigationState2.default.make(path);

	                if (fullState.contains(mappedState)) {
	                    commands = this._commandsByState[path];
	                    isExact = fullState.equals(mappedState);

	                    // reverse loop to accomodate for oneshot removal
	                    i = commands.length;
	                    for (i; --i >= 0;) {
	                        wrapper = commands[i];
	                        if (!isExact && wrapper.exactMatch) {
	                            continue; // eslint-disable-line no-continue
	                        }
	                        return true;
	                    }
	                }
	            }

	            return false;
	        }
	    }, {
	        key: 'updateState',
	        value: function updateState(truncatedState, fullState) {
	            var path = void 0;
	            var mappedState = void 0;
	            var commands = void 0;
	            var isExact = void 0;
	            var i = void 0;
	            var wrapper = void 0;
	            var command = void 0;

	            for (path in this._commandsByState) {
	                mappedState = _NavigationState2.default.make(path);
	                if (fullState.contains(mappedState)) {
	                    commands = this._commandsByState[path];
	                    isExact = fullState.equals(mappedState);

	                    // reverse loop to accomodate for oneshot removal
	                    i = commands.length;
	                    for (i; --i >= 0;) {
	                        wrapper = commands[i];
	                        if (!isExact && wrapper.exactMatch) {
	                            continue; // eslint-disable-line no-continue
	                        }

	                        this._injector.map('fullState').toValue(fullState);
	                        this._injector.map('truncatedState').toValue(fullState.subtract(wrapper.state));

	                        command = new wrapper.CommandClass({ injector: this._injector });
	                        command.execute();

	                        this._injector.unmap('fullState');
	                        this._injector.unmap('truncatedState');

	                        if (wrapper.oneShot) {
	                            this.unmapCommand(wrapper.state, wrapper.CommandClass);
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_hasCommand',
	        value: function _hasCommand(wrappedCommandsList, testForCommandClass) {
	            var i = void 0;
	            var commandWrapper = void 0;
	            var length = wrappedCommandsList.length;
	            for (i = 0; i < length; i++) {
	                commandWrapper = wrappedCommandsList[i];
	                if (commandWrapper.CommandClass === testForCommandClass) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }, {
	        key: '_verifyCommandClass',
	        value: function _verifyCommandClass(CommandClass) {
	            if (this._verifiedCommandClasses[CommandClass]) {
	                return;
	            }
	            if (CommandClass.prototype.execute === undefined) {
	                throw new Error('Command doesn\'t implement an execute method - ' + CommandClass);
	            }
	            this._verifiedCommandClasses[CommandClass] = true;
	        }
	    }]);
	    return StateCommandMap;
	}();

	exports.default = StateCommandMap;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(26);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(27);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _underscore = __webpack_require__(95);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _ReactRecipe = __webpack_require__(96);

	var _ReactRecipe2 = _interopRequireDefault(_ReactRecipe);

	var _BackboneRecipe = __webpack_require__(99);

	var _BackboneRecipe2 = _interopRequireDefault(_BackboneRecipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ViewRecipe = function () {
	    function ViewRecipe() {
	        (0, _classCallCheck3.default)(this, ViewRecipe);

	        this._states = [];
	        this._viewClass = null;
	        this._viewArguments = [];
	        this._viewInstance = null;
	        this._insideSelector = null;
	        this._parentRecipe = null;
	        this._viewType = null;
	    }

	    (0, _createClass3.default)(ViewRecipe, [{
	        key: 'addState',

	        // PUBLIC API
	        value: function addState(navigationState) {
	            var length = this._states.length;

	            for (var i = 0; i < length; i++) {
	                var existingState = this._states[i];

	                if (existingState.getPath() === navigationState.getPath()) {
	                    return;
	                }
	            }

	            this._states.push(navigationState);

	            return this;
	        }
	    }, {
	        key: 'getStates',
	        value: function getStates() {
	            return this._states;
	        }
	    }, {
	        key: 'toView',
	        value: function toView(viewClass) {
	            this._viewClass = viewClass;

	            _underscore2.default.extend(this, _BackboneRecipe2.default);

	            return this;
	        }
	    }, {
	        key: 'toComponent',
	        value: function toComponent(viewClass) {
	            this._viewClass = viewClass;

	            _underscore2.default.extend(this, _ReactRecipe2.default);

	            return this;
	        }
	    }, {
	        key: 'getViewClass',
	        value: function getViewClass() {
	            return this._viewClass;
	        }
	    }, {
	        key: 'getViewInstance',
	        value: function getViewInstance() {
	            return this._viewInstance;
	        }
	    }, {
	        key: 'getRootEl',
	        value: function getRootEl() {
	            console.warn('Method getRootEl should be implemented by viewRecipe');
	        }
	    }, {
	        key: 'isMounted',
	        value: function isMounted() {
	            console.warn('Method isMounted should be implemented by viewRecipe');
	        }
	    }, {
	        key: 'isInstantiated',
	        value: function isInstantiated() {
	            return this._viewInstance !== null;
	        }
	    }, {
	        key: 'withArguments',
	        value: function withArguments() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            if (args.length > 5) {
	                throw new Error('Uncle Bob says you want to use too many arguments');
	            }
	            this._viewArguments = args;

	            return this;
	        }
	    }, {
	        key: 'inside',
	        value: function inside(selector) {
	            this._insideSelector = selector;

	            return this;
	        }
	    }, {
	        key: 'getInsideSelector',
	        value: function getInsideSelector() {
	            return this._insideSelector;
	        }
	    }, {
	        key: 'withParent',
	        value: function withParent(parentRecipe) {
	            this._parentRecipe = parentRecipe;
	            return this;
	        }
	    }, {
	        key: 'getParentRecipe',
	        value: function getParentRecipe() {
	            return this._parentRecipe;
	        }
	    }]);
	    return ViewRecipe;
	}(); //  weak


	exports.default = ViewRecipe;

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_95__;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(97);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(98);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _underscore = __webpack_require__(95);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(85);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//  weak
	var ReactRecipe = {
	    _type: 'REACT',

	    // Children array so react element can render with
	    // correct child elements.

	    _children: [],

	    // Returns a fake proxy element due to the fact that
	    // we do not use these transition functions within
	    // our react components

	    getViewInstance: function getViewInstance() {
	        if (!this._refProxy) {
	            // Create proxy object to call methods on the react
	            // component instance (ref).  This allows us to queue
	            // the transition callbacks if the ref is not immediately
	            // available.

	            this._refProxy = {
	                navigatorBehaviors: this._viewClass.navigatorBehaviors,

	                transitionIn: function transitionIn(cb) {
	                    if (this.isMounted()) {
	                        this._ref.transitionIn(cb);
	                    } else {
	                        this._queuedTransitionIn = cb;
	                    }
	                }.bind(this),

	                updateState: function updateState(truncated, full) {
	                    if (this.isMounted()) {
	                        if (this._ref.updateState) {
	                            this._ref.updateState(truncated, full);
	                        }
	                    } else {
	                        this._queuedStateUpdate = [truncated, full];
	                    }
	                }.bind(this),

	                transitionOut: function transitionOut(cb) {
	                    if (this.isMounted()) {
	                        this._ref.transitionOut(cb);
	                    } else {
	                        this._queuedTransitionOut = cb;
	                    }
	                }.bind(this)
	            };
	        }
	        return this._refProxy;
	    },

	    // Save reference to our react element instead of
	    // view instance like backbone recipe does

	    initialize: function initialize() {
	        var _this = this;

	        var params = this._viewArguments;

	        var props = _underscore2.default.extend({
	            ref: function ref(c) {
	                _this._ref = c;

	                if (_this._queuedTransitionIn && _this._ref.transitionIn) {
	                    _this._ref.transitionIn(_this._queuedTransitionIn);
	                    _this._queuedTransitionIn = null;
	                }
	                if (_this._queuedTransitionOut && _this._ref.transitionOut) {
	                    _this._ref.transitionOut(_this._queuedTransitionOut);
	                    _this._queuedTransitionOut = null;
	                }
	                if (_this._queuedStateUpdate && _this._ref.updateState) {
	                    if (_this._ref.updateState) {
	                        _this._ref.updateState(_this._queuedStateUpdate[0], _this._queuedStateUpdate[1]);
	                    }
	                    _this._queuedStateUpdate = null;
	                }
	            }
	        }, params[0]);

	        this._viewInstance = _react2.default.createElement(this._viewClass, props, this._children.map(function (child) {
	            return child._viewInstance;
	        }));
	    },

	    // Use ReactDOM's findDOMNode method to find associated
	    // DOM node of the component reference

	    getRootEl: function getRootEl() {
	        return (0, _jquery2.default)(_reactDom2.default.findDOMNode(this._ref));
	    },

	    // Component is mounted if is not 'null'

	    isMounted: function isMounted() {
	        if (!this.isInstantiated()) {
	            this.initialize();
	        }

	        return !!this._ref;
	    },


	    // This method only exists on React recipes.  Adds a
	    // recipe to a list of children who will be rendered
	    // in this element's props.children

	    _showChild: function _showChild(child) {
	        if (this._children.indexOf(child) !== -1) {
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

	    _removeChild: function _removeChild(child) {
	        var childIndex = this._children.indexOf(child);
	        if (childIndex !== -1) {
	            this._children.splice(childIndex, 1);
	        }
	        this.initialize();
	    }
	};

	module.exports = ReactRecipe;

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_97__;

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_98__;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(85);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BackboneRecipe = {
	    _type: 'BACKBONE',

	    initialize: function initialize() {
	        var params = this._viewArguments;

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
	    },
	    isMounted: function isMounted() {
	        return this.isInstantiated() && _jquery2.default.contains(document.documentElement, this.getViewInstance().$el[0]);
	    },
	    getRootEl: function getRootEl() {
	        return this._viewInstance.$el;
	    }
	}; //  weak


	module.exports = BackboneRecipe;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _jquery = __webpack_require__(85);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _AutoBind = __webpack_require__(84);

	var _AutoBind2 = _interopRequireDefault(_AutoBind);

	var _NavigationState = __webpack_require__(31);

	var _NavigationState2 = _interopRequireDefault(_NavigationState);

	var _NavigatorEvent = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//  weak
	var _usingPushState = void 0;
	var _rootUrl = void 0;
	var _navigator = void 0;
	var _started = void 0;

	function StateUrlSyncer(navigator) {
	    (0, _AutoBind2.default)(this, this);

	    _usingPushState = false;
	    _rootUrl = '/';
	    _navigator = navigator;
	    _started = false;
	}

	StateUrlSyncer.prototype = {
	    supportsPushState: !!(window && window.history && window.history.pushState),

	    usePushState: function usePushState(rootUrl) {
	        if (_started) {
	            throw new Error('Cannot switch to using push states after start was called');
	        }

	        _usingPushState = this.supportsPushState;
	        _rootUrl = rootUrl || _rootUrl;

	        this._redirectPushStateOrHashOnDeeplink();
	    },
	    isUsingPushState: function isUsingPushState() {
	        return _usingPushState;
	    },
	    _redirectPushStateOrHashOnDeeplink: function _redirectPushStateOrHashOnDeeplink() {
	        var pushUrl = this.parsePushStateUrl(window.location.pathname);
	        var hashUrl = this.parseHashUrl(window.location.hash);

	        if (this.supportsPushState && pushUrl === '' && hashUrl !== '') {
	            // There is a hash and no push state.
	            window.history.replaceState(null, '', new _NavigationState2.default(_rootUrl + hashUrl).getPath());
	        } else if (!this.supportsPushState && pushUrl !== '') {
	            // There is a push state deeplink, but we don't support it. Redirect back.
	            window.location.href = _rootUrl + '#/' + pushUrl;
	        }
	    },
	    start: function start() {
	        if (_started) {
	            throw new Error('Already started');
	        }

	        _started = true;
	        this._addListeners();
	    },
	    _addListeners: function _addListeners() {
	        if (_usingPushState) {
	            (0, _jquery2.default)(window).on('popstate', this._onUrlChange);
	        } else {
	            (0, _jquery2.default)(window).on('hashchange', this._onUrlChange);
	        }

	        _navigator.on(_NavigatorEvent.STATE_CHANGED, this._onStateChanged);
	    },
	    _removeListeners: function _removeListeners() {
	        (0, _jquery2.default)(window).off('popstate', this._onUrlChange);
	        (0, _jquery2.default)(window).off('hashchange', this._onUrlChange);
	    },
	    setUrl: function setUrl(url) {
	        var newState = void 0;
	        var urlState = this.getUrlState();
	        if (_usingPushState) {
	            newState = new _NavigationState2.default(_rootUrl + url);
	            if (newState.equals(urlState)) {
	                window.history.replaceState(null, '', newState.getPath());
	            } else {
	                window.history.pushState(null, '', newState.getPath());
	            }
	        } else {
	            newState = new _NavigationState2.default(url);
	            if (!newState.equals(urlState)) {
	                window.location.hash = newState.getPath();
	            }
	        }
	    },
	    getRawUrl: function getRawUrl() {
	        if (_usingPushState) {
	            return this.parsePushStateUrl(window.location.pathname);
	        } else {
	            return this.parseHashUrl(window.location.hash);
	        }
	    },
	    getUrlState: function getUrlState() {
	        return new _NavigationState2.default(this.getRawUrl());
	    },
	    _onStateChanged: function _onStateChanged() {
	        this.setUrl(_navigator.getCurrentState().getPath());
	    },
	    _onUrlChange: function _onUrlChange() {
	        _navigator.request(this.getUrlState());
	    },
	    resetUrl: function resetUrl() {
	        this.setUrl('');
	    },
	    parseHashUrl: function parseHashUrl(hashUrl) {
	        return hashUrl.replace(/^#|$/g, '');
	    },
	    parsePushStateUrl: function parsePushStateUrl(pushStateUrl) {
	        return pushStateUrl.replace(_rootUrl, '');
	    },
	    dispose: function dispose() {
	        this._removeListeners();
	    }
	};

	exports.default = StateUrlSyncer;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactDom = __webpack_require__(98);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(85);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _NavigatorEvent = __webpack_require__(23);

	var _ViewRecipe = __webpack_require__(94);

	var _ViewRecipe2 = _interopRequireDefault(_ViewRecipe);

	var _NavigationState = __webpack_require__(31);

	var _NavigationState2 = _interopRequireDefault(_NavigationState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function StateViewMap(navigator, $root) {
	    this._navigator = navigator;
	    this._orderedRecipes = [];
	    this._$root = $root || (0, _jquery2.default)('body');

	    this._navigator.on(_NavigatorEvent.STATE_REQUESTED, this._handleStateRequested.bind(this));
	}

	// PUBLIC API
	//  weak
	/* eslint no-case-declarations: 1 */
	StateViewMap.prototype = {
	    mapState: function mapState() {
	        var allArgumentsAsOneFlatArray = [];
	        allArgumentsAsOneFlatArray = allArgumentsAsOneFlatArray.concat.apply(allArgumentsAsOneFlatArray, arguments); // eslint-disable-line
	        return this._addRecipe(allArgumentsAsOneFlatArray);
	    },


	    get$Root: function get$Root() {
	        return this._$root;
	    },

	    _addRecipe: function _addRecipe(statesOrPaths) {
	        var recipe = new _ViewRecipe2.default();

	        var i = void 0;
	        var length = statesOrPaths.length;
	        for (i = 0; i < length; i++) {
	            recipe.addState(_NavigationState2.default.make(statesOrPaths[i]));
	        }

	        this._orderedRecipes.push(recipe);

	        return recipe;
	    },

	    _handleStateRequested: function _handleStateRequested(e, eventData) {
	        var requestedState = eventData.state;
	        var index = void 0;
	        var recipe = void 0;
	        var recipeStates = void 0;
	        var recipesLength = this._orderedRecipes.length;
	        var j = void 0;
	        var state = void 0;
	        var statesLength = void 0;

	        for (index = 0; index < recipesLength; index++) {
	            recipe = this._orderedRecipes[index];
	            recipeStates = recipe.getStates();
	            statesLength = recipeStates.length;

	            for (j = 0; j < statesLength; j++) {
	                state = recipeStates[j];

	                if (requestedState.contains(state)) {
	                    this._addViewElementToDOM(recipe);
	                    var viewInstance = recipe.getViewInstance();
	                    if (Array.isArray(viewInstance.navigatorBehaviors)) {
	                        this._navigator.add(viewInstance, state);
	                    }
	                }
	            }
	        }
	    },

	    _addRecipeToParent: function _addRecipeToParent(parentRecipe, recipe) {
	        var $container = this._$root;
	        var $inside = void 0;
	        var $reactRoot = void 0;
	        var insideSelector = recipe.getInsideSelector();
	        if (parentRecipe) {
	            $container = parentRecipe.getRootEl();
	        }

	        if (insideSelector !== null) {
	            $inside = $container.find(insideSelector);
	            $container = $inside.length > 0 ? $inside.first() : $container;
	        }

	        var additionType = (parentRecipe ? parentRecipe._type : 'BACKBONE') + ' > ' + recipe._type;

	        switch (additionType) {
	            case 'BACKBONE > BACKBONE':
	                var i = this._orderedRecipes.indexOf(recipe) + 1;
	                var length = this._orderedRecipes.length;
	                var testRecipe = void 0;

	                for (i; i < length; i++) {
	                    testRecipe = this._orderedRecipes[i];

	                    // If any other views have the same parent, add this element before
	                    // those elements in the container element

	                    if (testRecipe.isInstantiated() && testRecipe.isMounted() && testRecipe.getRootEl().parent()[0] === $container[0]) {
	                        testRecipe.getRootEl().before(recipe.getRootEl());
	                        return;
	                    }
	                }
	                $container.append(recipe.getRootEl());
	                break;

	            case 'BACKBONE > REACT':
	                $reactRoot = (0, _jquery2.default)(document.createElement('div'));
	                $reactRoot.addClass('react-root');
	                $container.append($reactRoot);
	                _reactDom2.default.render(recipe._viewInstance, $reactRoot[0]);

	                break;

	            case 'REACT > REACT':
	                parentRecipe._showChild(recipe);

	                // Find root react element
	                while (parentRecipe.getParentRecipe() && parentRecipe.getParentRecipe()._type === 'REACT') {
	                    parentRecipe = parentRecipe.getParentRecipe();
	                }
	                // TODO: Batch this render call on state change
	                _reactDom2.default.render(parentRecipe._viewInstance, parentRecipe.getRootEl().parent()[0]);
	                break;
	            default:
	                console.error('Invalid recipe type combination: ' + additionType);
	                break;

	        }
	    },

	    _addViewElementToDOM: function _addViewElementToDOM(recipe) {
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
	                this._addViewElementToDOM(parentRecipe);
	            }
	        }

	        this._addRecipeToParent(parentRecipe, recipe);
	    }
	};

	exports.default = StateViewMap;

/***/ }
/******/ ])
});
;