// @flow weak
import $ from 'jquery';

export default function AutoBind(object: Object, context: Object) {
    throw new Error('Fuck');
    for (const key in object) {
        const method = object[key];
        if (typeof method === 'function') {
            object[key] = $.proxy(object[key], context);
        }
    }
}
