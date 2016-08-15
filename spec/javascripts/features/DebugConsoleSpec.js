describe('DebugConsole', () => {
    let navigator,
        debugConsole,
        $debugConsole,
        responder;

    beforeEach(() => {
        navigator = new navigatorjs.Navigator(),
        debugConsole = new navigatorjs.features.DebugConsole(navigator),
        $debugConsole = debugConsole.get$El();
        $debugConsole.css({
            position: 'fixed',
            left: 10,
            bottom: 10
        });
        $('body').append($debugConsole);

        responder = {
            navigatorBehaviors: ['IHasStateInitialization', 'IHasStateTransition'],
            initializeByNavigator() {
                console.log('responder -> initializeByNavigator');
            },

            transitionIn(callOnComplete) {
                console.log('responder -> transitionIn');
                callOnComplete();
            },

            transitionOut(callOnComplete) {
                console.log('responder -> transitionOut');
                callOnComplete();
            },

            toString() {
                return '[object responder]';
            }
        };
    });

    afterEach(() => {
        $debugConsole.remove();
    });

    it('Automatically adjusts the width based on its content', () => {
        const wideStatePath = '/this/is/a/relatively/long/state/causing/the/console/to/be/very/wide/';

        navigator.add(responder, wideStatePath);
        let $input = $debugConsole.find('input'),
            startInputWidth = $input.width();

        navigator.start('');
        navigator.request(wideStatePath);

        expect($input.width()).toBeGreaterThan(startInputWidth);
    });

    describe('Responder names', () => {
        it('uses the toString method as a reference to the responder in the list', () => {
            navigator.add(responder, '/');
            navigator.start('');

            expect($debugConsole.find('.names span:first').text()).toEqual(responder.toString());
        });

        it('uses the $el tagName and classes when the toString method is not implemented', () => {
            const responder = {
                navigatorBehaviors: ['IHasStateInitialization', 'IHasStateTransition'],
                $el: $('<div class="a b"></div>'),
                initializeByNavigator() {},
                transitionIn(callOnComplete) {},
                transitionOut(callOnComplete) {}
            };
            navigator.add(responder, '/');
            navigator.start('');

            expect($debugConsole.find('.names span:first').text()).toEqual('div.a.b');
        });

        it('uses the toString over a generated $el name', () => {
            const responder = {
                navigatorBehaviors: ['IHasStateInitialization', 'IHasStateTransition'],
                $el: $('<div class="a b"></div>'),
                initializeByNavigator() {},
                transitionIn(callOnComplete) {},
                transitionOut(callOnComplete) {},
                toString() {
                    return 'myResponder';
                }
            };
            navigator.add(responder, '/');
            navigator.start('');

            expect($debugConsole.find('.names span:first').text()).toEqual(responder.toString());
        });
    });
});
