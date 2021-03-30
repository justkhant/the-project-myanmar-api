/**
 * @file logger.js
 * @author Harry Htet
 * @version 1.0
 * @createdDate 03/28/2021
 * @copyright Team Galone
 */

const log4js = require('log4js');
const logger = log4js.logger();
const debugLevel = 'DEBUG';

log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
    },
    app: {
      type: 'file',
      filename: './src/logs/server.log',
      maxLogSize: 10485760,
      backups: 1,
      compress: true,
    },
  },
  categories: {
    default: {
      appenders: ['out', 'app'],
      level: debugLevel,
    },
  },
});

logger.debug('Logger level on: ', debugLevel);
module.exports = logger;
