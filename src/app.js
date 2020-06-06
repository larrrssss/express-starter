const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const api = require('./api');
const { errorHandler } = require('./middleware');

/** @typedef {import('express').Application} */
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.json({
		message: 'Hello World!'
	});
});

app.use('/api', api);

// Middlewares
app.use(errorHandler);

module.exports = app;