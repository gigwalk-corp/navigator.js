describe('StateCommandMap', () => {
    let navigator;
    let injectorjs;
    let stateCommandMap;

    beforeEach(() => {
        navigator = new navigatorjs.Navigator();
        injectorjs = new injector.Injector();
        stateCommandMap = new navigatorjs.integration.StateCommandMap(navigator, injectorjs);
    });

    describe('mapping and unmapping', () => {
        it('can map a state to a command', () => {
            stateCommandMap.mapCommand('/command', Backbone.Command);
        });

        it('can not map a state to the same command twice', () => {
            stateCommandMap.mapCommand('/command', Backbone.Command);
            expect(() => {
                stateCommandMap.mapCommand('/command', Backbone.Command);
            }).toThrow();
        });

        it('can map a different state to the same command twice', () => {
            stateCommandMap.mapCommand('/command', Backbone.Command);
            expect(() => {
                stateCommandMap.mapCommand('/command2', Backbone.Command);
            }).not.toThrow();
        });

        it('can map two different commands to the same state', () => {
            const OtherCommand = Backbone.Command.extend({});
            stateCommandMap.mapCommand('/command', Backbone.Command);
            expect(() => {
                stateCommandMap.mapCommand('/command', OtherCommand);
            }).not.toThrow();
        });

        it('can unmap a command and map it again', () => {
            stateCommandMap.mapCommand('/command', Backbone.Command);
            stateCommandMap.unmapCommand('/command', Backbone.Command);
            expect(() => {
                stateCommandMap.mapCommand('/command', Backbone.Command);
            }).not.toThrow();
        });
    });

    describe('execution', () => {
        let executeCount;
        let Command;

        beforeEach(() => {
            executeCount = 0;

            Command = Backbone.Command.extend({
                execute() {
                    executeCount++;
                }
            });

            navigator.start();
        });

        it('executes the command when the mapped state is requested', () => {
            stateCommandMap.mapCommand('/command', Command);
            navigator.request('/command');

            expect(executeCount).toBe(1);
        });

        it("doesn't execute the command when a different state is requested", () => {
            navigator.add({}, '/test');
            stateCommandMap.mapCommand('/command', Command);
            navigator.request('/test');

            expect(executeCount).toBe(0);
        });

        it('executes the command that is mapped with a wildcard state', () => {
            stateCommandMap.mapCommand('*/command', Command);
            navigator.request('/test/command');

            expect(executeCount).toBe(1);
        });

        it('executes the command every time the new state contains the mapped state', () => {
            navigator.add({}, '/*/command/*');
            stateCommandMap.mapCommand('*/command', Command);
            navigator.request('/test/command');
            navigator.request('/test/command/test1');
            navigator.request('/test/command/test2');

            expect(executeCount).toBe(3);
        });

        it('executes the command every time the new state contains the mapped state', () => {
            stateCommandMap.mapCommand('**/command', Command);
            navigator.request('/test/command');
            navigator.request('/test/bla/command');
            navigator.request('/test/bla/bla/command');

            expect(executeCount).toBe(3);
        });

        it("doesn't execute the command when we leave the mapped state", () => {
            navigator.add({}, '/');
            stateCommandMap.mapCommand('/command', Command);
            navigator.request('/command');
            navigator.request('/test');

            expect(executeCount).toBe(1);
        });

        it("can be mapped to exact states and doesn't execute when the current state only contains the mapped state", () => {
            navigator.add({}, '/*/command/*');
            stateCommandMap.mapCommand('*/command', Command, true);
            navigator.request('/test/command');
            navigator.request('/test/command/test1');
            navigator.request('/test/command/test2');

            expect(executeCount).toBe(1);
        });

        it("doesn't execute the command multiple times when the onShot parameter is set to true", () => {
            navigator.add({}, '/*/command/*');
            stateCommandMap.mapCommand('*/command', Command, false, true);
            navigator.request('/test/command');
            navigator.request('/test/command/test1');
            navigator.request('/test/command/test2');

            expect(executeCount).toBe(1);
        });

        describe('injection', () => {
            let fullState,
                truncatedState;

            beforeEach(() => {
                fullState = truncatedState = undefined;

                Command = Backbone.Command.extend({

                    fullState: 'inject',
                    truncatedState: 'inject',

                    execute() {
                        fullState = this.fullState;
                        truncatedState = this.truncatedState;
                    }
                });
            });

            it('temporarily injects the full state', () => {
                expect(injectorjs.hasMapping('fullState')).toBe(false);
                expect(fullState).toBeUndefined();

                stateCommandMap.mapCommand('/command', Command);
                navigator.request('/command');

                expect(fullState).not.toBe('inject');
                expect(fullState).not.toBeUndefined();
                expect(injectorjs.hasMapping('fullState')).toBe(false);
            });

            it('temporarily injects the truncated state', () => {
                expect(injectorjs.hasMapping('truncatedState')).toBe(false);
                expect(truncatedState).toBeUndefined();

                stateCommandMap.mapCommand('/command', Command);
                navigator.request('/command');

                expect(fullState).not.toBe('inject');
                expect(truncatedState).not.toBeUndefined();
                expect(injectorjs.hasMapping('truncatedState')).toBe(false);
            });
        });
    });
});
