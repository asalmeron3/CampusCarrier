import React, { Component } from "react";
import { Container, Segment, Form, Dropdown, Button, Card, Icon} from "semantic-ui-react";
import API from "../../utils/API";
import CustomName  from "react-file-reader";
import EmpModal from "../../components/EmployeeModal"
import AddEmpFormModal from "../../components/AddEmp"

import moment from "moment";
class UploadEmployees extends Component {
//     constructor() {
//     super();
//     this.validateEmail = this.validateEmail.bind(this);
//   }
    state = {

        currentShift: "",
        currentShiftID: "",
        currentEmployee: "",
        dateToQuery: "",
        employeesForToday: [],
        modalOpen: false,
        name: "",
        phone: "",
        notes:"",
        empID:"",
        shiftTime:"",
        isFormModalOpen: false
        
    };
    handleFiles = files => {
        var reader = new FileReader();
        var myFile
        reader.onload = function(e) {
            // Use reader.result
            // alert(reader.result)
            // myFile = reader.result;
        }
        reader.onloadend = () => {
            myFile = reader.result.split(/\r\n|\n/) ;

            myFile.map(eachLine =>  this.addShiftToDB(eachLine) )
        }   
            
        reader.readAsText(files[0]);
        
        
    }
    
    addShiftToDB = (eachLine) => {

        let EmpAndShift
        let employee
        eachLine.search(":00") >=0 || eachLine.search(":30") >=0
            ? this.setState({currentShift : eachLine.split(",")[0].split(" - ")[0] + " - " + eachLine.split(",")[0].split(" - ")[1] }) 
            : eachLine.search("@") >=0
            ? EmpAndShift = {
                date: this.state.dateToQuery,
                employeeName: eachLine.split(",")[0],
                phone: eachLine.split(",")[1],
                email: eachLine.split(",")[2],
                shift: this.state.currentShift
            }
            : null

        EmpAndShift !== undefined
        ? API.makeEmpAndShift(EmpAndShift)
            .then()
            .catch(err => console.log(err))
        : null
        EmpAndShift != undefined
        ? API.searchEmpDB({name:EmpAndShift.employeeName})
            .then(res => {
                console.log(res)
                res.data.length === 0
                ? API.addEmpToDB({
                        name:EmpAndShift.employeeName,
                        phone: EmpAndShift.phone,
                        email: EmpAndShift.email
                    })
                    .then()
                    .catch(err => console.log(err))
                :null
                }
            )
            .catch(err => console.log(err))
        : null
    }
    dateSelection = (e, { value }) => {
        this.setState({ dateToQuery: value })
    }
    shiftSelection = (e, { value }) => {
        this.setState({ shiftTime: value })
    }
    showEmployeeModal =  (employeeClicked, e) => {
        this.setState({
            modalOpen:true,
            name:employeeClicked.employeeName,
            phone: employeeClicked.phone,
            notes:employeeClicked.notes,
            empID: employeeClicked._id

        })
        
      };
    handleUserConfirm = (employeeClicked, e)=> {

        !employeeClicked.shiftConfirmed 
        ? API.inOutCancelConfirm("confirmShift", employeeClicked._id)
            .then()
            .catch(err => console.log(err))

        : !employeeClicked.cancelled
        ? API.inOutCancelConfirm("cancelled", employeeClicked._id)
            .then()
            .catch(err => console.log(err))
        : null
        this.runquery()
    }
    handleUserClockIn = (employeeClicked, e)=> {
        let time = moment().format('llll')

        employeeClicked.clockedIn === undefined
        ? API.recordTime("checkin", employeeClicked._id, {time: time})
            .then()
            .catch(err => console.log(err))
        : employeeClicked.clockedOut === undefined
        ? API.recordTime("checkout", employeeClicked._id, {time: time})
            .then()
            .catch(err => console.log(err))
        : null
        this.runquery()
    }
   
    handleClose = () => {
        this.runquery()
        this.setState({
            modalOpen:false,
            name:"",
            phone: "",
            notes:"",
            empID:""
        })
        

    }
    handleNoteChange = (e) =>{
        const {target:{name,value}} = e;
        this.setState({[name]:value}); 
    };
    addNote = () =>{
        this.setState({notes:""})
        API.postNote(this.state.name, {note:this.state.notes})
            .then()
            .catch(err => console.log(err))
    }
    runquery = () => {
        let query
        let date = this.state.dateToQuery 
        let time = this.state.shiftTime
        date.length > 1 && time.length > 1 
        ? query = {date:date,shift:time}
        : query = {date:date}
        API.queryForDate(query)
            .then (res => this.setState({employeesForToday: res.data}))
            .catch(err => console.log(err))
        
    }
    addEmpToDB = () => {
        this.state.dateToQuery !== "" && this.state.shiftTime !== ""
        ? API.makeEmpAndShift({
            date: this.state.dateToQuery,
            employeeName: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            shift: this.state.shiftTime
            })
            .then()
            .catch(err => console.log(err))
        : null

        this.state.name !== ""
        ? API.searchEmpDB({name:this.state.name})
            .then(res => 
                res.data.length === 0
                ? API.addEmpToDB({
                        name:this.state.name,
                        phone: this.state.phone,
                        email: this.state.email
                    })
                    .then()
                    .catch(err => console.log(err))
                    :null
            )
            .catch(err => console.log(err))
        : null
        
    }
    handleFormModalClose = () => {
         this.setState({
            name: "",
            phone: "",
            email: "",
            isFormModalOpen: false 
        })
       
    }
    openFormModal = () => {
        this.setState({isFormModalOpen: true})
    }
    render() {
        const dates = [
        {text: "None", key: "none", value: ""},
        {text: 'Tuesday August 14, 2018', key:  'Tuesday August 14, 2018', value:'Tuesday August 14, 2018'},
        {text: 'Wednesday August 15, 2018',key:  'Wednesday August 15, 2018', value:'Wednesday August 15, 2018'}, 
        {text: 'Thursday August 16, 2018',key:  'Thursday August 16, 2018', value:'Thursday August 16, 2018'}, 
        {text: 'Friday August 17, 2018',key:  'Friday August 17, 2018', value:'Friday August 17, 2018'}, 
        {text: 'Saturday August 18, 2018',key:  'Saturday August 18, 2018', value:'Saturday August 18, 2018'}, 
        {text: 'Sunday August 19, 2018',key:  'Sunday August 19, 2018', value:'Sunday August 19, 2018'}, 
        {text: 'Monday August 20, 2018',key:  'Monday August 20, 2018', value:'Monday August 20, 2018'},
        {text: '** Friday August 3, 2018',key:  'Friday August 3, 2018', value:'Friday August 3, 2018'},
        {text: '** Saturday August 4, 2018',key:  'Saturday August 4, 2018', value:'Saturday August 4, 2018'},
        {text: '** Saturday August 11, 2018',key:  'Saturday August 11, 2018', value:'Saturday August 11, 2018'},
        {text: '** Monday August 11, 2018',key:  'Monday August 11, 2018', value:'Monday August 11, 2018'}
        ];
        const shiftTimes  = [
            { text: "None", key: "none", value: ""},
            {text: '8:30AM - 12:00PM', key:  '8:30AM - 12:00PM', value:'8:30AM - 12:00PM'},
            {text: '12:00PM - 3:30PM', key:  '12:00PM - 3:30PM', value:'12:00PM - 3:30PM'},
            {text: '3:30PM - 7:00PM', key:  '3:30PM - 7:00PM', value:'3:30PM - 7:00PM'},
            {text: '* 10:00AM - 6:00PM', key:  '10:00AM - 6:00PM', value:'10:00AM - 6:00PM'},
            {text: '* 10:00AM - 8:00PM', key:  '10:00AM - 8:00PM', value:'10:00AM - 8:00PM'}
        ];
        return (
            <Container style={{"margin":"50px"}}>
                <Segment.Group>
                <Segment style={{"background-color":"#114C75"}} textAlign='center'>
                    
                    <Button style={{"margin":"10px"}} inverted>
                        <Dropdown  placeholder = "Select a Date" options = {dates} floating onChange = {this.dateSelection}/>
                    </Button>
                    <Button style={{"margin":"10px"}} inverted>
                        <Dropdown  placeholder = "Select a Shift" options = {shiftTimes} floating onChange = {this.shiftSelection}/>
                    </Button>
                    <Button inverted style={{"margin":"10px"}} onClick = {this.runquery}> Find Employees For This Date</Button>
                    <Button inverted style={{"margin":"10px"}} onClick = {this.openFormModal}> Add Impromptu Employee/ Shift</Button>
                    <Button inverted style={{"margin":"10px"}}>
                        <CustomName handleFiles={this.handleFiles} fileTypes={'.csv'}/>
                        Upload Shifts CSV
                    </Button>

                </Segment>

                <Segment >
                <Card.Group className = "centered">

                    {this.state.employeesForToday.map( oneEmp => {
                        let cardClicked = this.showEmployeeModal.bind(this,oneEmp)
                        let userIconClicked = this.handleUserConfirm.bind(this,oneEmp)
                        let timeIconClicked = this.handleUserClockIn.bind(this,oneEmp)
                        return (
                            <Card color = {oneEmp.cancelled ? "red" : oneEmp.shiftConfirmed ? "green": null}
                                key = {oneEmp._id}
                            >
                            <Card.Content>
                                
                                <Card.Header>{oneEmp.employeeName}</Card.Header>
                                <Card.Meta>{oneEmp.shift}</Card.Meta>
                                <Card.Description>
                                Shift {oneEmp.shiftConfirmed ? " CONFIRMED" : " NOT CONFIRMED"}
                                <br/> {oneEmp.cancelled ? oneEmp.employeeName.split(" ")[0] + " CANCELLED this shift" : null}
                                <br/> {oneEmp.clockedIn ? "Clocked In: " + oneEmp.clockedIn : null}
                                <br/> {oneEmp.clockedOut ? "Clocked Out: " + oneEmp.clockedOut : null}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <Form style = {{"float":"left"}} as ="a" href= {"tel:" + oneEmp.phone}>
                                <Icon circular link size="large" name = "phone"/>
                            </Form>
                                <Icon.Group size='large' >
                                    <Icon link circular name='user' 
                                        style = {{"background-color":"lightgrey"}} 
                                        onClick={userIconClicked}
                                    />

                                    <Icon corner name=
                                        {oneEmp.shiftConfirmed && !oneEmp.cancelled
                                            ? 'check'
                                            : oneEmp.cancelled ? 'dont'
                                            :''
                                        }
                                    />
                                </Icon.Group>

                                <Icon.Group size='large' >
                                    <Icon link circular name='clock' 
                                        style = {{"background-color":"lightgrey"}} 
                                        onClick={timeIconClicked}  
                                    />
                                    <Icon corner name= 
                                        {oneEmp.clockedIn !== undefined && !oneEmp.clockedOut ===undefined
                                            ? 'hourglass start'
                                            : oneEmp.clockedOut !== undefined ? 'check' 
                                            : ''
                                        }
                                    />

                                </Icon.Group>

                                <Icon.Group size='large' >
                                    <Icon link circular name='book'
                                        style = {{"background-color":"lightgrey"}} 
                                        onClick={cardClicked}  
                                    />
                                    <Icon corner name='pencil' />
                                </Icon.Group>
                                
                            </Card.Content>

                            </Card>
                        )
                    })}
                </Card.Group>
                </Segment>
                <EmpModal
                    modalOpen = {this.state.modalOpen}
                    handleClose = {this.handleClose}
                    modalName = {this.state.name}
                    modalNotes  = {this.state.notes}
                    handleNoteChange = {this.handleNoteChange} 
                    addNote = {this.addNote}
                    phone = {this.state.phone}
                    handleUserConfirm = {this.handleUserConfirm}
                    handleUserClockIn = {this.handleUserClockIn}
                    handleUserClockOut = {this.handleUserClockOut}
                    handleUserCancel = {this.handleUserCancel}
                />
                <AddEmpFormModal
                    isFormModalOpen = {this.state.isFormModalOpen}
                    handleFormModalClose = {this.handleFormModalClose}
                    handleChanges = {this.handleNoteChange}
                    addEmpToDB = {this.addEmpToDB}
                    
                />
                </Segment.Group>
                
            </Container>
        );
    }
}

export default UploadEmployees;
