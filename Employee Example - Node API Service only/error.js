var errorHadler = function (err, req, res, next) {
	'use strict'
	if (err) {
		console.error(err.stack);
		res.status(500).send('Something broke!');
	} else {
		next();
	}
};

module.exports = errorHadler;