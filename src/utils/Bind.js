// @flow weak
import $ from 'jquery';

export default function Bind(functionOrArray: Function | Function[], context: Object) {
    function bind(method: Object, _context: Object) {
        if (typeof method === 'function') {
            $.proxy(method, _context);
        }
    }

    if (Array.isArray(functionOrArray)) {
        functionOrArray.forEach((item) => { bind(item, context); });
    } else {
        bind(functionOrArray, context);
    }
}
