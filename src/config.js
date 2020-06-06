const dotenv = require('dotenv');

dotenv.config();

/**
 * @typedef EnvironmentConfiguration
 * @prop {string} PORT The port to listen on
 * @prop {string} NODE_ENV Describes if the project is in production mode
 */

/**
 * @type EnvironmentConfiguration
 */
const config = {
	...process.env
};

module.exports = config;