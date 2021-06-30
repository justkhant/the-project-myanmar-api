/**
 * @file validations.js
 * @author Harry Htet
 * @version 1.0
 * @createdDate 04/06/2021
 * @copyright Team Galone
 */

// Logger
const LOGGER = require('../logger/logger');
const FILE_NAME = 'validations.js';

// Environemnt Config
const envConfiguration = require('../modules/envConfiguration');
const CONSTANTS = require('../constants/constants');

/**
 * @description Validates the API secret
 * @memberof validations.js
 * @function validateHeaders
 */
function validateHeaders(req, res, next) {
  try {
    const { apisecret } = req.headers;
    if (apisecret !== envConfiguration.VAR_API_SECRET) {
      LOGGER.error(`apiSecret does not match in :: ${FILE_NAME}`);
      res
        .status(CONSTANTS.HTTP_CODE.UNATHORIZED)
        .json({
          code: CONSTANTS.HTTP_CODE.UNATHORIZED,
          message: CONSTANTS.HTTP_DESC.UNATHORIZED,
        })
        .end();
    }
    LOGGER.info(`Success in validateHeaders() in :: ${FILE_NAME}`);
    next();
  } catch (error) {
    LOGGER.error(`Error in validateHeaders() in :: ${FILE_NAME} :: ${error}`);
    res
      .status(CONSTANTS.HTTP_CODE.BAD_REQUEST)
      .json({
        code: CONSTANTS.HTTP_CODE.BAD_REQUEST,
        message: CONSTANTS.HTTP_DESC.BAD_REQUEST,
      })
      .end();
  }
}

module.exports = {
  validateHeaders,
};
