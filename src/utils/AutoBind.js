window.navigatorjs = window.navigatorjs || {};
window.navigatorjs.utils = window.navigatorjs.utils || {};

window.navigatorjs.utils.AutoBind = function (object, context) {
	                                                                            let key, method;
	                                                                                for (key in object) {
		                                                                                method = object[key];
		                                                                                if (typeof method === 'function') {
			                                                                                object[key] = $.proxy(object[key], context);
		}
	}
};
