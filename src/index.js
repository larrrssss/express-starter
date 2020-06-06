const colors = require('colors');

const app = require('./app');
const config = require('./config');

const server = app.listen(config.PORT, () => {
	console.log(colors.yellow(`Server listening on http://localhost:${server.address().port}`));
});