'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsdom = require('jsdom');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Grabs value by element id/class name
 * @param  {string}   html     Body of host
 * @param  {object}   element  Object with info on extraction of value.
 * @param  {Function} callback Returns error and results.
 */
var elements = function elements(html, element, callback) {

    // Set body as a document
    var document = (0, _jsdom.jsdom)(html, {});
    var window = document.defaultView;

    // Instantiate JQuery
    var $ = (0, _jquery2.default)(window);

    // If element exists
    if ($('' + element.el).length) {

        // Return the text of that element.
        callback(false, $('' + element.el).prop(element.prop));

        // If it wasn't found
    } else {
        callback(element.el + ' does not exist in DOM.', null);
    }
};

exports.default = elements;