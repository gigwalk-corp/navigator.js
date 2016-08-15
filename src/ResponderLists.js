// @flow weak
function ResponderLists() {
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

// PUBLIC API
ResponderLists.prototype = {
    validateByPath: null, // []
    updateByPath: null, // []
    swapByPath: null, // []
    showByPath: null, // []
    hideByPath: null, // []
    swappedBefore: null, // []
    all: null, // []

    toString(): string {
        let s: string = 'ResponderLists [';

        for (const variable in this) {
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
};

export default ResponderLists;
