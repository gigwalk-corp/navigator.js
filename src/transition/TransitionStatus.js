window.navigatorjs = window.navigatorjs || {};
window.navigatorjs.transition = window.navigatorjs.transition || {};

window.navigatorjs.transition.TransitionStatus = {};
window.navigatorjs.transition.TransitionStatus.UNINITIALIZED = -2;
window.navigatorjs.transition.TransitionStatus.INITIALIZED = -1;
window.navigatorjs.transition.TransitionStatus.HIDDEN = 1;
window.navigatorjs.transition.TransitionStatus.APPEARING = 2;
window.navigatorjs.transition.TransitionStatus.SHOWN = 3;
window.navigatorjs.transition.TransitionStatus.SWAPPING = 4;
window.navigatorjs.transition.TransitionStatus.DISAPPEARING = 5;

window.navigatorjs.transition.TransitionStatus.toString = function (status) {
	                                        switch (status) {
		                                        case navigatorjs.transition.TransitionStatus.UNINITIALIZED:
			                                                                                return 'UNINITIALIZED';
		                                        case navigatorjs.transition.TransitionStatus.INITIALIZED:
			                                                                                return 'INITIALIZED';
		                                        case navigatorjs.transition.TransitionStatus.HIDDEN:
			                                                                                return 'HIDDEN';
		                                        case navigatorjs.transition.TransitionStatus.APPEARING:
			                                                                                return 'APPEARING';
		                                        case navigatorjs.transition.TransitionStatus.SHOWN:
			                                                                                return 'SHOWN';
		                                        case navigatorjs.transition.TransitionStatus.SWAPPING:
			                                                                                return 'SWAPPING';
		                                        case navigatorjs.transition.TransitionStatus.DISAPPEARING:
			                                                                                return 'DISAPPEARING';
	}

	                                        return 'UNKNOWN';
};
