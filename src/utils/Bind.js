window.navigatorjs = window.navigatorjs || {};
window.navigatorjs.utils = window.navigatorjs.utils || {};

window.navigatorjs.utils.Bind = function (functionOrArray, context) {
	                                const bind = function (method, context) {
		                                        if (typeof method === 'function') {
			                                        $.proxy(method, context);
		}
	};

	                                        if (typeof functionOrArray === 'array') {
		                                    let i, length = functionOrArray.length;
		                                        for (i = 0; i < length; i++) {
			                                        bind(functionOrArray[i], context);
		}
	} else {
		                                        bind(functionOrArray, context);
	}
};
