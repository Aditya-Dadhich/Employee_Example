var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	dateOfBirth: {
		type: String,
		required: true
	}
}, {
	strict: true
});

var employee = mongoose.model('employee', EmployeeSchema);

module.exports = employee;