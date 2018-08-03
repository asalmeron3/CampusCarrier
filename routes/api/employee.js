"use strict";
const router = require("express").Router();
const employeeController = require("../../controllers/employees");

router.route("/create").post(employeeController.create);
router.route("/find").post(employeeController.find);
router.route("/addnote/:name").post(employeeController.addNote)
router.route("/report/:name").get(employeeController.report)
router.route("/all").get(employeeController.all);

module.exports = router;
