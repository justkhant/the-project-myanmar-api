/**
 * @file analyticsService.js
 * @author 
 * @version 1.0
 * @createdDate 02/15/2022
 * @copyright Team Galone
 */

// Logger
const LOGGER = require('../logger/logger');
const FILE_NAME = 'analyticsService.js';

// DAO
const analyticsDAO = require('../dao/analyticsDAO');

/**
 * @description Get all sections of the website
 * @memberof sectionsService
 * @function getAllSections
 * @returns array of mongoDB documents
 */
async function getAllAnalyticsRecords() {
  try {
    LOGGER.info(`Entering into getAllAnalyticsRecords() of :: ${FILE_NAME}`);
    const query = {};
    const result = await analyticsDAO.findAll(query);
    LOGGER.info(`Success in getAllAnalyticsRecords() of :: ${FILE_NAME}`);
    return result;
  } catch (error) {
    LOGGER.error(`Error in getAllAnalyticsRecords() of :: ${FILE_NAME} :: ${error}`);
    throw new Error(error);
  }
}

/**
 * @description Update/upsert analytics document
 * @memberof 
 * @function updateSection
 * @returns updated mongo document
 */
async function updateAnalyticsRecord(req) {
  try {
    LOGGER.info(`Entering into updateAnalyticsRecord() of :: ${FILE_NAME}`);
    const { body } = req;
    const currentTime = new Date();
    const query = {
      browserName: body.browserName,
      browserLanguage: body.browserLanguage,
      browserPlatform: body.browserPlatform,
      country: body.country,
      region: body.region,
      sessionDuration: 0,
      createdTime: currentTime,
    };
    const upsertFlag = true;
    const result = await analyticsDAO.update(query, upsertFlag);
    LOGGER.info(`Success in updateAnalyticsRecord() of :: ${FILE_NAME}`);
    return result;
  } catch (error) {
    LOGGER.error(`Error in updateAnalyticsRecord() of :: ${FILE_NAME} :: ${error}`);
    throw new Error(error);
  }
}

module.exports = {
  getAllAnalyticsRecords,
  updateAnalyticsRecord,
};
