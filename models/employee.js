//----------------Dependencies-----------------//
var mongoose = require("mongoose");
//---------------------------------------------//

// ---- A reference to the Schema constructor ---//
	var Schema  = mongoose.Schema;
	var Shifts = require("./shifts");
//-----------------------------------------------//

//-------------Create the User Schema---------------//

	var EmployeeSchema = new Schema ({
		name: {
			type: String,
			required: true
		},
		phone: {
		 	type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		notes:{
            type:[String]
        }
		
	});
//-----------------------------------------------//

//-----------Create Model with Schema-------------//
	var Employee = mongoose.model("Employee",EmployeeSchema);
//-----------------------------------------------//

module.exports = Employee;