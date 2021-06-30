/**
 * @file sectionsDAO.js
 * @author Harry Htet
 * @version 1.0
 * @createdDate 03/29/2021
 * @copyright Team Galone
 */

// Logger
const LOGGER = require('../logger/logger');
const FILE_NAME = 'sectionsDAO.js';

// Model
const sectionsModel = require('../models/sectionsModel');

/**
 * @description Get all documents
 * @memberof sectionsDAO
 * @function findAll
 * @param {Object} query
 * @param {Object} projection
 * @returns array of mongoDB documents
 */
async function findAll(query, projection) {
  try {
    LOGGER.info(`Entering into findAll() of :: ${FILE_NAME}`);
    const result = await sectionsModel.find(query, projection);
    LOGGER.info(`Success in findAll() of :: ${FILE_NAME}`);
    return result;
  } catch (error) {
    LOGGER.error(`Error in findAll() of :: ${FILE_NAME} :: ${error}`);
    throw new Error(error);
  }
}

/**
 * @description Update/Upsert document for the specified query
 * @memberof sectionsDAO
 * @function findAll
 * @param {Object} query
 * @param {Object} updateQuery
 * @param {Object} projection
 * @param {Object} upsertFlag
 * @param {Object} arrayFilters
 * @returns updated document
 */
async function update(query, updateQuery, projection, upsertFlag, arrayFilters) {
  try {
    LOGGER.info(`Entering into update() of :: ${FILE_NAME}`);
    const result = await sectionsModel.findOneAndUpdate(query, updateQuery, {
      projection: projection,
      new: true,
      upsert: upsertFlag,
      arrayFilters: arrayFilters,
      setDefaultsOnInsert: true,
    });
    LOGGER.info(`Success in update() of :: ${FILE_NAME}`);
    return result;
  } catch (error) {
    LOGGER.error(`Error in update() of :: ${FILE_NAME} :: ${error}`);
    throw new Error(error);
  }
}

module.exports = {
  findAll,
  update,
};
