// ------------- Dependencies --------//
var mongoose = require("mongoose");
// ----------------------------------//

// --- A reference to the schema constructor ---- //
    var Schema = mongoose.Schema;
// -----------------------------------------------//

// ----------Create the Shifts Schema -----//
    var EmpWithShifts = new Schema ({
        employeeName: {
            type: String,
            required:true
        },
        date: {
            type: String,
            required: true
        },
        shift: {
            type: String,
            required: true
        },
        phone: {
            type:String,
            required:true
        },
        email: {
            type: String,
            required: true
        },
        shiftConfirmed:{
            type: Boolean,
            default: false
        },
        cancelled: {
            type: Boolean,
            default: false
        },
        clockedIn: {
            type: String,
        },
        clockedOut: {
            type: String
        }

    });

// ---------- Create Model with Schema ------//
    module.exports = mongoose.model("EmpAndShifts",EmpWithShifts);
// ----------------------------------------//
