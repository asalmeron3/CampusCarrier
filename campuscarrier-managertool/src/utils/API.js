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
    postNote: (empID,noteObj) =>{
        return axios.post("/api/empAndShifts/addnote/" + empID, noteObj)
    },
    recordTime: (endRoute, empID, time) => {
        return axios.post("/api/empAndShifts/" + endRoute + "/" + empID, time)
    },
}