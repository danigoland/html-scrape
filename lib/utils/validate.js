'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validates that config is present, and has data.
 * @param  {object}   elements Object that holds element data.
 * @param  {Function} callback Returns error
 */
var validate = function validate(elements, callback) {

  // If no object is present.
  if (!elements) {
    callback('No elements to scrape.');

    // If there is not a child object.
  } else if (_lodash2.default.size(elements) < 1) {
    callback('Elements object was found, but no elements were specified.');
  }

  // If all is well, send error as false.
  callback(false);
};

exports.default = validate;