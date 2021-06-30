/**
 * @file constants.js
 * @author Harry Htet
 * @version 1.0
 * @createdDate 04/06/2021
 * @copyright Team Galone
 */

/**
 * @memberof constants
 * @name HTTP_DESC holds the HTTP descriptions
 * @enum {Number}
 */
const HTTP_DESC = {
  SUCCESS: 'success',
  BAD_REQUEST: 'bad request',
  UNATHORIZED: 'unathorized',
};

/**
 * @memberof constants
 * @name HTTP_CODE holds the HTTP codes
 * @enum {String}
 */
const HTTP_CODE = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNATHORIZED: 401,
};

module.exports = {
  HTTP_DESC,
  HTTP_CODE,
};
