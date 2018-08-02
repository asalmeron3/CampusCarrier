const db = require("../models");

// Defining methods for the employeesController
module.exports = {
  findAllForToday: function(req, res) {
    db.EmpAndShifts
      .find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
  },

  makeEmpWithShift: function(req, res) {
    db.EmpAndShifts
      .create(req.body)
      .then((Employee) => res.json(Employee))
      .catch(err => res.status(422).json(err));
  },

  confirmShift: (req, res) =>{
    db.EmpAndShifts
      .findOneAndUpdate({_id: req.params.id},{shiftConfirmed:true}, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  checkIn: (req, res) => {
    db.EmpAndShifts
      .findOneAndUpdate({_id: req.params.id},{clockedIn:req.body.time}, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  checkOut: (req, res) => {
    db.EmpAndShifts
      .findOneAndUpdate({_id: req.params.id},{clockedOut:req.body.time}, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  cancelled: (req, res) => {
    db.EmpAndShifts
      .findOneAndUpdate({_id: req.params.id},{cancelled: true}, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  addNote: (req, res) =>{
    db.EmpAndShifts
      .findOneAndUpdate({_id: req.params.id},{$push: {notes:req.body.note}}, { new: true })
      .then(employeeWithNotes => res.json(employeeWithNotes))
      .catch(err => res.status(422).json(err))
  }
  
};
