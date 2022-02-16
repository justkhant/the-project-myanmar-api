/**
 * @file analyticsRoute.js
 * @author 
 * @version 1.0
 * @createdDate 02/15/2022
 * @copyright Team Galone
 */

// Express
const express = require('express');
const router = express.Router();

// Logger
const LOGGER = require('../logger/logger');
const FILE_NAME = 'analyticsRoute.js';

// Service
const analyticsService = require('../services/analyticsService');

// Validator
const { validateHeaders } = require('../utils/validations');

// Constants
const CONSTANTS = require('../constants/constants');

/**
 * @description get all sections of the website
 * @memberof analyticsRoute
 * @route /sections
 * @param {Object} req Request
 * @param {Object} res Response
 * @returns response with all the sections
 */
router.get('/analytics', validateHeaders, async (req, res) => {
  try {
    LOGGER.info(`Entering into /analytics route in :: ${FILE_NAME}`);
    const result = await analyticsService.getAllAnalyticsRecords();
    LOGGER.info(`Success in /analytics route in :: ${FILE_NAME}`);
    res.send(result);
  } catch (error) {
    LOGGER.error(`Error in /analytics route in :: ${FILE_NAME} :: ${error}`);
    res.status(CONSTANTS.HTTP_CODE.BAD_REQUEST);
    res.json({ message: error.message }).send();
  }
});

/**
 * @description get all sections of the website
 * @memberof analyticsRoute
 * @route /sections
 * @param {Object} req Request
 * @param {Object} res Response
 * @returns response with all the sections
 */
router.post('/analytics', validateHeaders, async (req, res) => {
  try {
    LOGGER.info(`Entering into /analytics route in :: ${FILE_NAME}`);
    const result = await analyticsService.updateAnalyticsRecord(req);
    LOGGER.info(`Success in /analytics route in :: ${FILE_NAME}`);
    res.send(result);
  } catch (error) {
    LOGGER.error(`Error in /analytics route in :: ${FILE_NAME} :: ${error}`);
    res.status(CONSTANTS.HTTP_CODE.BAD_REQUEST);
    res.json({ message: error.message }).send();
  }
});

module.exports = router;
