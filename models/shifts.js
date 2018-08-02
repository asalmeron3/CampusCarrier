// ------------- Dependencies --------//
var mongoose = require("mongoose");
// ----------------------------------//

// --- A reference to the schema constructor ---- //
    var Schema = mongoose.Schema;
// -----------------------------------------------//

// ----------Create the Shifts Schema -----//
    var WeekShifts = new Schema ({
        date: {
            type: String,
            required: true
        },
        shift: {
            type: String,
            required: true
        },
        employees: [{
			type: Schema.Types.ObjectId,
			ref: "Employee"
		}]

    });

// ---------- Create Model with Schema ------//
    module.exports = mongoose.model("AllShifts",WeekShifts);
// ----------------------------------------//
