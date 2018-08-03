//-----   Using Axios for getting/posting to routes ---//
    import axios from "axios";
//----------------------------------------------------//

export default {

    createTheShift:(shiftInfo) => {
        return axios.post("/api/allshifts/create", shiftInfo);
    },
    associateShiftToEmp: (theID, employeeData) =>{
        return axios.post("/api/allshifts/associate/" + theID, employeeData);
    },
    makeEmpAndShift: (empAndShift) => {
        return axios.post("/api/empAndShifts/create",empAndShift);
    },
    queryForDate: (dateObj) => {
        return axios.post("/api/empAndShifts/employeesShifts", dateObj)
    },
    inOutCancelConfirm: (endRoute, empID) => {
        return axios.post("/api/empAndShifts/" + endRoute + "/" + empID)
    },
    postNote: (empName,noteObj) =>{
        return axios.post("/api/employee/addnote/" + empName, noteObj)
    },
    recordTime: (endRoute, empID, time) => {
        return axios.post("/api/empAndShifts/" + endRoute + "/" + empID, time)
    },
    searchEmpDB: (empObj) => {
        return axios.post("/api/employee/find", empObj)
    },
    addEmpToDB: (empObj) => {
        return axios.post("/api/employee/create", empObj)
    }
}