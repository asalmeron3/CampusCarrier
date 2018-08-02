"use strict";
const router = require("express").Router();
const EmpShiftController = require("../../controllers/employeeAndShifts");

router.route("/create").post(EmpShiftController.makeEmpWithShift);
router.route("/checkin/:id").post(EmpShiftController.checkIn);
router.route("/checkout/:id").post(EmpShiftController.checkOut);
router.route("/confirmShift/:id").post(EmpShiftController.confirmShift);
router.route("/cancelled/:id").post(EmpShiftController.cancelled)
router.route("/employeesShifts").post(EmpShiftController.findAllForToday);
router.route("/addnote/:id").post(EmpShiftController.addNote)
module.exports = router;