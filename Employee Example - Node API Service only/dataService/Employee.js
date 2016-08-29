var Employee = require('../models/Employee');

var create = function (value, callback) {
    'use strict'

    console.log(value);
    var newEmployee = new Employee();
    newEmployee.firstName = value.firstName;
    newEmployee.lastName = value.lastName;
    newEmployee.gender = value.gender;
    newEmployee.dateOfBirth = value.dateOfBirth;
    newEmployee.save(function (err, data) {
        callback(err, data._id);
    });
};

var getAll = function (callback) {
    'use strict'
    var query = Employee.find();

    //    query.select({
    //        _id: 0,
    //        firstName: 1
    //    });

    query.exec(function (err, employees) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, employees);
        }
    });
};

var update = function (id, newEmployee, callback) {
    'use strict'
    var query = Employee.findOne({
        _id: id
    });

    query.exec(function (err, employee) {
        if (err) {
            callback(err, null);
        } else {
            if (employee) {
                employee.firstName = newEmployee.firstName;
                employee.lastName = newEmployee.lastName;
                employee.gender = newEmployee.gender;
                employee.dateOfBirth = newEmployee.dateOfBirth;
                employee.save(function (saveErr, data) {
                    callback(saveErr, data._id);
                });
            } else {
                callback("no employee found", null);
            }
        }
    });
};

var remove = function (id, callback) {
    'use strict'
    Employee.findByIdAndRemove(id, function (err) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, "done");
        }
    });
};

module.exports = {
    create: create,
    getAll: getAll,
    update: update,
    remove: remove
};