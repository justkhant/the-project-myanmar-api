/**
 * @file envConfiguration.js
 * @author Harry Htet
 * @version 1.0
 * @createdDate 03/28/2021
 * @copyright Team Galone
 */

const envalid = require('envalid');
const ENV_CHOICES = ['development', 'production', 'qa'];
const { str, port } = envalid;

// Sanitizing env values
const env = envalid.cleanEnv(process.env, {
  NODE_ENV: str({ choices: ENV_CHOICES }),
  WEBSITES_PORT: port(),
  WEBSITES_CONTEXT_PATH: str(),
  WEBSITES_MONGODB_URL: str(),
  WEBSITES_API_SECRET: str(),
});

module.exports = {
  VAR_PORT: env.WEBSITES_PORT || env.PORT,
  VAR_CONTEXT_PATH: env.WEBSITES_CONTEXT_PATH,
  VAR_MONGODB_URL: env.WEBSITES_MONGODB_URL,
  VAR_API_SECRET: env.WEBSITES_API_SECRET,
};
