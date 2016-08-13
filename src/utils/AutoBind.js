// @flow
import $ from 'jquery';
export default function AutoBind(object: Object, context: Object) {
    let key, method;
    for (key in object) {
        method = object[key];
        if (typeof method === 'function') {
            object[key] = $.proxy(object[key], context);
        }
    }
}
