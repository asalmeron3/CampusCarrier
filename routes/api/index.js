const router = require("express").Router();
const employeeRoutes = require("./employee");
const AllShifts = require("./allShifts");
const EmpAndShifts = require("./empAndShifts");

// -------------- Routes ---------------------//
    router.use("/employee", employeeRoutes);
    router.use("/allshifts",AllShifts);
    router.use("/empAndShifts",EmpAndShifts);
// -----------------------------------------//

module.exports = router;