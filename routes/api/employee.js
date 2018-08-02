"use strict";
const router = require("express").Router();
const employeeController = require("../../controllers/employees.js");

router.route("/create").post(employeeController.create);
router.route("/showShifts/:id").get(employeeController.showTheirShifts);
router.route("/addnote/:id").post(employeeController.addNote);
router.route("/associate/:id").post(employeeController.associateEmpToShift);

module.exports = router;
