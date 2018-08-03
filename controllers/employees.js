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
    let name = req.params.name.replace(/%20/g," ")
    db.Employee
      .findOneAndUpdate({name: name},{$push: {notes:req.body.note}}, { new: true })
      .then(employeeWithNotes => res.json(employeeWithNotes))
      .catch(err => res.status(422).json(err))
  },

  find: function(req, res) {
    db.Employee
      .find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
  },

  report: (req, res) => {
    let EmployeeData = {}
    let nospaces = req.params.name.replace(/%20/g," ")
    let name = nospaces.replace(/&#39;/g,"'")
    db.Employee
      .find({name: name})
      .then(response => {
        EmployeeData.Employee = response

        db.EmpAndShifts
          .find({employeeName : name})
          .then( response => {
            EmployeeData.Shifts = response
            res.json(EmployeeData)
          })
          .catch(err => res.status(422).json(err))
      } )
      .catch(err => res.status(422).json(err))


    
  }
};
