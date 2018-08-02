const db = require("../models");

// Defining methods for the employeesController
module.exports = {
    showEmployees: (req,res) => {
        db.Shifts
            .findById({_id: req.params.id})
            .populate("employees")
            .then( theEmployees => {res.json(theEmployees)})
            .catch( err => {res.status(422).json(err)})
        },

        addShift: function(req, res) {
            db.Shifts
            .create(req.body)
            .then((TheShift) => res.json(TheShift))
            .catch(err => res.status(422).json(err));
        },

        associateEmpToShift: (req, res) => {
            db.Shifts
            .findOneAndUpdate({ _id: req.params.id },{$push: { employees:  req.body.employee }}, { new: true })
            .then( theEmployeeShifts => {res.json(theEmployeeShifts)})
            .catch( err => {res.status(422).json(err)})
          
          },

        // .then((dbShifts) =>{
        //     return db.Employee.findOneAndUpdate({ _id: req.params.id },{$push: { shifts:  dbShifts._id }}, { new: true })
        //   })
};
