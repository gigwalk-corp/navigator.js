// @flow weak

const NavigationResponderBehaviors = {};
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
    if (object.navigatorBehaviors === undefined || !object.navigatorBehaviors instanceof Array) {
        // The input interface is not set on object's navigatorBehaviors.
        return false;
    }

    const inheritanceChain = NavigationResponderBehaviors.getInterfaceInheritanceChain(_interface);
    const methodsToBeImplemented = NavigationResponderBehaviors.getInterfaceMethods(inheritanceChain);
    let i;
    let method;
    const length = methodsToBeImplemented.length;

    for (i = 0; i < length; i++) {
        method = methodsToBeImplemented[i];

        if (object[method] === undefined || typeof object[method] !== 'function') {
            return false;
        }
    }

    return true;
};

NavigationResponderBehaviors.getInterfaceInheritanceChain = (_interface, existingChain) => {
    const chain = existingChain || [];
    let extendingInterface;
    let i;
    const interfaceObject = NavigationResponderBehaviors[_interface];

    if (interfaceObject === undefined || typeof interfaceObject !== 'object') {
        //		console.log('behaviorObject for interface is undefined ', interface );
        return chain;
    }

    chain.push(_interface);
    const extendsArray = interfaceObject.extends;
    if (extendsArray === undefined) {
        //		console.log('extendsArray for interface is undefined, the chain ends here ', interface, chain);
        return chain;
    }

    const length = extendsArray.length;

    for (i = 0; i < length; i++) {
        extendingInterface = extendsArray[i];
        if (chain.indexOf(extendingInterface) === -1) {
            // We did not yet extend this interface, so continue to follow the chain
            NavigationResponderBehaviors.getInterfaceInheritanceChain(extendingInterface, chain);
        }
    }

    return chain;
};

NavigationResponderBehaviors.getInterfaceMethods = interfaces => {
    if (interfaces === undefined || !interfaces instanceof Array) {
        // No valid input
        return [];
    }

    const combinedInterfacesChain = [];
    let _interface;
    let i;
    let length = interfaces.length;
    let interfaceObject;
    let interfaceMethods;
    let j;
    let methodsLength;
    let method;
    const methods = [];

    for (i = 0; i < length; i++) {
        _interface = interfaces[i];
        NavigationResponderBehaviors.getInterfaceInheritanceChain(_interface, combinedInterfacesChain);
    }

    length = combinedInterfacesChain.length;
    for (i = 0; i < length; i++) {
        _interface = combinedInterfacesChain[i];
        interfaceObject = NavigationResponderBehaviors[_interface];
        interfaceMethods = interfaceObject.methods;
        if (
            interfaceObject !== undefined &&
            typeof interfaceObject === 'object' &&
            interfaceMethods !== undefined &&
            interfaceMethods instanceof Array
        ) {
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


export default NavigationResponderBehaviors;
