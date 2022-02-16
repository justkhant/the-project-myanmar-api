/**
 * @file 
 * @author 
 * @version 1.0
 * @createdDate 02/15/2022
 * @copyright Team Galone
 */

// Logger
const LOGGER = require('../logger/logger');
const FILE_NAME = 'analyticsDAO.js';

// Model
const analyticsModel = require('../models/analyticsModel');

/**
 * @description Get all documents
 * @memberof 
 * @function findAll
 * @param {Object} query
 * @param {Object} projection
 * @returns array of mongoDB documents
 */
 async function findAll(query) {
  try {
    LOGGER.info(`Entering into findAll() of :: ${FILE_NAME}`);
    const result = await analyticsModel.find(query);
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
async function update(query, data) {
  try {
    const result = await analyticsModel.save(query, {
      timestamps: true,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}


module.exports = {
  findAll,
  update,
};
