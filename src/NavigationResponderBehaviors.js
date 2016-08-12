window.navigatorjs = window.navigatorjs || {};

window.navigatorjs.NavigationResponderBehaviors = {};
window.navigatorjs.NavigationResponderBehaviors.IHasStateInitialization = {name: "IHasStateInitialization", methods: ["initializeByNavigator"]};
window.navigatorjs.NavigationResponderBehaviors.IHasStateValidation = {name: "IHasStateValidation", methods: ["validate"]};
window.navigatorjs.NavigationResponderBehaviors.IHasStateValidationAsync = {name: "IHasStateValidationAsync", "extends": ["IHasStateValidation"], methods: ["prepareValidation"]};
window.navigatorjs.NavigationResponderBehaviors.IHasStateValidationOptional = {name: "IHasStateValidationOptional", "extends": ["IHasStateValidation"], methods: ["willValidate"]};
window.navigatorjs.NavigationResponderBehaviors.IHasStateValidationOptionalAsync = {name: "IHasStateValidationOptionalAsync", "extends": ["IHasStateValidationAsync", "IHasStateValidationOptional"], methods: []};
window.navigatorjs.NavigationResponderBehaviors.IHasStateRedirection = {name: "IHasStateRedirection", "extends": ["IHasStateValidation"], methods: ["redirect"]};
window.navigatorjs.NavigationResponderBehaviors.IHasStateSwap = {name: "IHasStateSwap", methods: ["willSwapToState", "swapOut", "swapIn"]};
window.navigatorjs.NavigationResponderBehaviors.IHasStateTransition = {name: "IHasStateTransition", methods: ["transitionIn", "transitionOut"]};
window.navigatorjs.NavigationResponderBehaviors.IHasStateUpdate = {name: "IHasStateUpdate", methods: ["updateState"]};

window.navigatorjs.NavigationResponderBehaviors.implementsBehaviorInterface = function(object, _interface) {
	if (object.navigatorBehaviors == undefined || !object.navigatorBehaviors instanceof Array) {
		//The input interface is not set on object's navigatorBehaviors.
		return false;
	}

	var inheritanceChain = navigatorjs.NavigationResponderBehaviors.getInterfaceInheritanceChain(_interface),
		methodsToBeImplemented = navigatorjs.NavigationResponderBehaviors.getInterfaceMethods(inheritanceChain),
		i, method,
		length = methodsToBeImplemented.length;

	for (i = 0; i < length; i++) {
		method = methodsToBeImplemented[i];

		if (object[method] == undefined || typeof object[method] !== 'function') {
			return false;
		}
	}

	return true;
};

window.navigatorjs.NavigationResponderBehaviors.getInterfaceInheritanceChain = function(_interface, existingChain) {
	var chain = existingChain || [],
		extendsArray,
		extendingInterface,
		i, length,
		interfaceObject = navigatorjs.NavigationResponderBehaviors[_interface];

	if (interfaceObject == undefined || typeof interfaceObject !== 'object') {
//		console.log('behaviorObject for interface is undefined ', interface );
		return chain;
	}

	chain.push(_interface);
	extendsArray = interfaceObject["extends"];
	if (extendsArray == undefined) {
//		console.log('extendsArray for interface is undefined, the chain ends here ', interface, chain);
		return chain;
	}

	length = extendsArray.length;

	for (i = 0; i < length; i++) {
		extendingInterface = extendsArray[i];
		if (chain.indexOf(extendingInterface) == -1) {
			//We did not yet extend this interface, so continue to follow the chain
			navigatorjs.NavigationResponderBehaviors.getInterfaceInheritanceChain(extendingInterface, chain);
		}
	}

	return chain;
};

window.navigatorjs.NavigationResponderBehaviors.getInterfaceMethods = function(interfaces) {
	if (interfaces == undefined || !interfaces instanceof Array) {
		//No valid input
		return [];
	}

	var combinedInterfacesChain = [],
		_interface, i,
		length = interfaces.length,
		interfaceObject,
		interfaceMethods,
		j, methodsLength, method,
		methods = [];

	for (i = 0; i < length; i++) {
		_interface = interfaces[i];
		navigatorjs.NavigationResponderBehaviors.getInterfaceInheritanceChain(_interface, combinedInterfacesChain);
	}

	length = combinedInterfacesChain.length;
	for (i = 0; i < length; i++) {
		_interface = combinedInterfacesChain[i];
		interfaceObject = navigatorjs.NavigationResponderBehaviors[_interface];
		interfaceMethods = interfaceObject.methods;
		if (interfaceObject != undefined && typeof interfaceObject === 'object' && interfaceMethods != undefined && interfaceMethods instanceof Array) {
			methodsLength = interfaceMethods.length;
			for (j = 0; j < methodsLength; j++) {
				method = interfaceMethods[j];
				if (methods.indexOf(method) == -1) {
					methods.push(method);
				}
			}
		}
	}

	return methods;
};
