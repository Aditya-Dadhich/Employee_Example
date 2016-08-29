module.exports = function (app) {

	'use strict'
	var express = require('express');
	var router = express.Router();
	var employeeRouter = require('./Employee');

	app.get('*', function (req, res, next) {
		res.set('Access-Control-Allow-Origin', 'http://localhost');
		res.set('Access-Control-Allow-Credentials', true);
		res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
		res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
		if ('OPTIONS' == req.method)
			return res.send(200);
		next();
	});

	router.post('/login', function (req, res) {
		var name = req.body.user.name;
		req.session.user = {
			'name': name
		};
		res.json(name);
	});

	router.post('/dostuff', function (req, res) {
		var dataset;
		if (req.session && req.session.user && req.session.user.name) {
			dataset = new Dataset({
				userName: req.session.user.name
			}, null);
		} else {
			dataset = new Dataset(null,
				new DataError.ErrorMessage('user not found.')
			);
		}
		res.json(dataset);
	});

	app.use('/api/employee', employeeRouter);

};