'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _validate = require('./utils/validate');

var _validate2 = _interopRequireDefault(_validate);

var _url = require('./utils/url');

var _url2 = _interopRequireDefault(_url);

var _elements = require('./utils/elements');

var _elements2 = _interopRequireDefault(_elements);

var _regex = require('./utils/regex');

var _regex2 = _interopRequireDefault(_regex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validates host and elements, then sends body
 * to a utility depending on the config provided.
 * @param  {string}   host     website url
 * @param  {object}   elems    tags to scrape
 * @param  {Function} callback sends back error and results.
 */
var scrape = function scrape(host, elems, callback) {

  /**
   * Takes the elements passed through and Validates
   * that the object is actually there, and has data.
   */
  (0, _validate2.default)(elems, function (error) {

    if (error) {
      return callback(error);
    }

    /**
     * Grabs the body from the host specified. returns
     * an error, and the html body.
     */
    (0, _url2.default)(host, function (error, html) {

      if (error) {
        return callback(error);
      }

      var count = 0;
      var numOfElements = _lodash2.default.size(elems);
      var data = {};

      /**
       * Iterate through the elements, and send them
       * to the correct utilities for scraping.
       */
      _lodash2.default.forEach(elems, function (element, key) {

        count++;

        // If start and end exist, use the needle method.
        if (element.start && element.end) {

          // Send it off to the regex utility:
          (0, _regex2.default)(html, element, function (error, result) {
            data[key] = result;
          });

          // If el exists, use the elements method.
        } else if (element.el) {

          (0, _elements2.default)(html, element, function (error, result) {

            /**
             * If error occurs, return null rather than
             * an error. This way, it will be skipped and no
             * fatal errors will be encountered.
             */
            if (error) {
              data[key] = null;
            }

            data[key] = result;
          });
        } else {

          // If something was missing in the config.
          callback('Please check your configuration.');
          return;
        }

        /**
         * Keep track of the current count. If it matches
         * the length of the elements object length, then
         * we are done, and we need to send our callback.
         */
        if (count === numOfElements) {
          callback(false, data);
        }
      });
    });
  });
};

module.exports = scrape;