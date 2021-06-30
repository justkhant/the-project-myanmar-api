/**
 * @file sectionsRoute.js
 * @author Harry Htet
 * @version 1.0
 * @createdDate 04/03/2021
 * @copyright Team Galone
 */

// Express
const express = require('express');
const router = express.Router();

// Logger
const LOGGER = require('../logger/logger');
const FILE_NAME = 'sectionsService.js';

// Service
const sectionsService = require('../services/sectionsService');

// Validator
const { validateHeaders } = require('../utils/validations');

// Constants
const CONSTANTS = require('../constants/constants');

/**
 * @description get all sections of the website
 * @memberof sectionsRoute
 * @route /sections
 * @param {Object} req Request
 * @param {Object} res Response
 * @returns response with all the sections
 */
router.get('/sections', validateHeaders, async (req, res) => {
  try {
    LOGGER.info(`Entering into /sections route in :: ${FILE_NAME}`);
    const result = await sectionsService.getAllSections();
    LOGGER.info(`Success in /sections route in :: ${FILE_NAME}`);
    res.send(result);
  } catch (error) {
    LOGGER.error(`Error in /sections route in :: ${FILE_NAME} :: ${error}`);
    res.status(CONSTANTS.HTTP_CODE.BAD_REQUEST);
    res.json({ message: error.message }).send();
  }
});

/**
 * @description get all sections of the website
 * @memberof sectionsRoute
 * @route /sections
 * @param {Object} req Request
 * @param {Object} res Response
 * @returns response with all the sections
 */
router.post('/sections', validateHeaders, async (req, res) => {
  try {
    LOGGER.info(`Entering into /sections route in :: ${FILE_NAME}`);
    const result = await sectionsService.updateSection(req);
    LOGGER.info(`Success in /sections route in :: ${FILE_NAME}`);
    res.send(result);
  } catch (error) {
    LOGGER.error(`Error in /sections route in :: ${FILE_NAME} :: ${error}`);
    res.status(CONSTANTS.HTTP_CODE.BAD_REQUEST);
    res.json({ message: error.message }).send();
  }
});

module.exports = router;
