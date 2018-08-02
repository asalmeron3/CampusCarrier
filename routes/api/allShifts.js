"use strict";
const router  = require("express").Router();
const shiftController = require("../../controllers/shifts.js");

router.route("/create").post(shiftController.addShift);
router.route("/associate/:id").post(shiftController.associateEmpToShift);
router.route("/todaysEmployees").get(shiftController.showEmployees);

module.exports = router;