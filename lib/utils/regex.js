'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _needler = require('needler');

/**
 * Use needler to look for value in between start and end.
 * @param  {string}   html     body of host
 * @param  {object}   element  Holds data for how to extract value.
 * @param  {Function} callback Returns error and result.
 */
var regex = function regex(html, element, callback) {

  // Set options for needler
  var options = {
    haystack: html,
    header: element.start,
    footer: element.end

    /**
     * Needler.find() takes options, and looks through the body
     * to find the value between header and footer.
     */
  };(0, _needler.find)(options, function (error, result) {

    if (error) {
      callback(false, null);
    }

    if (result) {
      callback(false, result);
    } else {
      callback(false, null);
    }
  });
};

exports.default = regex;