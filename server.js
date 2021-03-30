/**
 * @file server.js
 * @author Harry Htet
 * @version 1.0
 * @createdDate 03/28/2021
 * @copyright Team Galone
 */

// Express
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // object relational mapping to MongoDB
// Middlewares
const xss = require('xss-clean'); // sanitize user input coming from POST body, GET queries & url params
const cors = require('cors'); // allow cross origins requests
const mongoSanitize = require('express-mongo-sanitize'); // sanitizes user-supplied data to prevent MongoDB Operator Injection
const compression = require('compression'); // compress requests
const helmet = require('helmet'); // secure HTTP Headers returned by your Express app

// Environment Configurations
const envConfiguration = require('./src/modules/envConfiguration');
const appPort = envConfiguration.VAR_PORT;
// const appContextPath = envConfiguration.VAR_CONTEXT_PATH;
const mongoPath = envConfiguration.VAR_MONGODB_URL;

// Logger
const LOGGER = require('./src/logger/logger');

// Middlewares Set-up
app.use(cors({ origin: '*' }));
app.set('view engine', 'html');

// parse json body & urlencoded request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// sanitize request data
app.use(xss());
app.use(mongoSanitize());
app.use(compression());

// Routes

// MongoDB Set-up
mongoose.Promise = global.Promise;
mongoose.connect(mongoPath);
mongoose.set('debug', true);

// Listening for requests
const server = app.listen(appPort, () => {
  const { port } = server.address();
  LOGGER.debug(`Express server listening on port ${port}`);
});

module.exports = app;
