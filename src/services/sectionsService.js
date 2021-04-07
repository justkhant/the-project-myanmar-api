/**
 * @file sectionsService.js
 * @author Harry Htet
 * @version 1.0
 * @createdDate 04/03/2021
 * @copyright Team Galone
 */

// Logger
const LOGGER = require('../logger/logger');
const FILE_NAME = 'sectionsService.js';

// DAO
const sectionsDAO = require('../dao/sectionsDAO');

/**
 * @description Get all sections of the website
 * @memberof sectionsService
 * @function getAllSections
 * @returns array of mongoDB documents
 */
async function getAllSections() {
  try {
    LOGGER.info(`Entering into getAllSections() of :: ${FILE_NAME}`);
    const query = {};
    const projection = null;
    const result = await sectionsDAO.findAll(query, projection);
    LOGGER.info(`Success in getAllSections() of :: ${FILE_NAME}`);
    return result;
  } catch (error) {
    LOGGER.error(`Error in getAllSections() of :: ${FILE_NAME} :: ${error}`);
    throw new Error(error);
  }
}

/**
 * @description Update/upsert section document
 * @memberof sectionsService
 * @function updateSection
 * @returns updated mongo document
 */
async function updateSection(req) {
  try {
    LOGGER.info(`Entering into updateSection() of :: ${FILE_NAME}`);
    const { body } = req;
    const query = {
      title: body.title,
    };
    const updateQuery = body;
    const projection = null;
    const upsertFlag = true;
    const arrayFilters = null;
    const result = await sectionsDAO.update(query, updateQuery, projection, upsertFlag, arrayFilters);
    LOGGER.info(`Success in updateSection() of :: ${FILE_NAME}`);
    return result;
  } catch (error) {
    LOGGER.error(`Error in updateSection() of :: ${FILE_NAME} :: ${error}`);
    throw new Error(error);
  }
}

module.exports = {
  getAllSections,
  updateSection,
};
