const db = require("../models");

// Defining methods for the employeesController
module.exports = {
  create: function(req, res) {
    db.Employee 
      .create(req.body)
      .then(entry => res.json(entry))
      .catch(err => res.status(422).json(err));
  },

  showTheirShifts: (req,res) => {
    db.Employee
      .findById({_id: req.params.id})
      .populate("shifts")
      .then( theEmployeeShifts => {res.json(theEmployeeShifts)})
      .catch( err => {res.status(422).json(err)})
  },

  associateEmpToShift: (req, res) => {
    db.Employee
    .findOneAndUpdate({ _id: req.params.id },{$push: { shifts:  req.body.name }}, { new: true })
    .then( theEmployeeShifts => {res.json(theEmployeeShifts)})
    .catch( err => {res.status(422).json(err)})
  
  },

  addNote: (req, res) =>{
    db.Employee
      .findOneAndUpdate({_id: req.params.id},{$push: {notes:req.body.note}}, { new: true })
      .then(employeeWithNotes => res.json(employeeWithNotes))
      .catch(err => res.status(422).json(err))
  }
};
