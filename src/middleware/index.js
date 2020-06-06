const config = require('../config');

// eslint-disable-next-line
function errorHandler(error, req, res, next) {
	const status = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(status);
	res.json({
		message: error.message,
		status,
		stack: config.NODE_ENV === 'production' ? '🎂' : error.stack
	});
}

module.exports = {
	errorHandler
};