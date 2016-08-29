var express = require('express');
var config = require('config');
var router = express.Router();
var employeeService = require("../dataService/Employee");

router.post('/create', function (req, res) {
    var employee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth
    }

    if (employee.firstName == '' || employee.lastName == '' || employee.gender == '' || employee.dateOfBirth == '') { 
        res.sendStatus(401);
    }

    employeeService.create(employee, function (error, id) {
        if (error) {
            res.sendStatus(401);
        } else {
            res.json({
                id: id
            });
        }
    });
});

router.post('/getAll', function (req, res) {
    employeeService.getAll(function (err, employees) {
        if (err) {
            res.sendStatus(401);
        } else {
            res.json(employees);
        }
    });
});

router.post('/update', function (req, res) {

    var employeeId = req.body.id;
    var employee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth
    }

    if (employee.firstName == '' || employee.lastName == '' || employee.gender == '' || employee.dateOfBirth == '') { 
        res.sendStatus(401);
    }

    employeeService.update(employeeId, employee, function (err, id) {
        if (err) {
            res.sendStatus(401);
        } else {
            res.json({
                id: id
            });
        }
    });
});

router.post('/remove', function (req, res) {

    var employeeId = req.body.id;

    employeeService.remove(employeeId, function (err, id) {
        if (err) {
            res.sendStatus(401);
        } else {

            res.sendStatus(201);
        }
    });
});

module.exports = router;