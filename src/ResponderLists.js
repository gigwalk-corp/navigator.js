// @flow weak
export default class ResponderLists {
    constructor() {
        this.validateByPath = {};
        this.updateByPath = {};
        this.swapByPath = {};
        this.showByPath = {};
        this.hideByPath = {};
        this.swappedBefore = {};

        this.all = [
            this.validateByPath,
            this.updateByPath,
            this.swapByPath,
            this.showByPath,
            this.hideByPath,
            this.swappedBefore
        ];
    }
    validateByPath: Object;
    updateByPath: Object;
    swapByPath: Object;
    showByPath: Object;
    hideByPath: Object;
    swappedBefore: Object;
    all: Object[];
    toString(): string {
        let s: string = 'ResponderLists [';

        for (const variable in this) {
            // $FlowFixMe
            const list = this[variable];

            if (this.all.indexOf(list) > -1) {
                const contents = [];
                for (const key in list) {
                    contents.push('[' + key + ' = ' + list[key] + ']'); // eslint-disable-line prefer-template
                }
                s += '\n\t[' + variable + ': ' + contents.join(', ') + '], '; // eslint-disable-line prefer-template
            }
        }

        s += ']';
        return s;
    }
}
