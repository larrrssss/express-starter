const express = require('express');

/** @typedef {import('express').Router} */
const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		message: 'My first Router!'
	});
});

module.exports = router;