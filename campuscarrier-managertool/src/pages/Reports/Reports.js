import React, { Component } from "react";
import { Container, Segment, Grid, Button, Card, Table, Header} from "semantic-ui-react";
import API from "../../utils/API";
import "./Reports.css"
class Report extends Component {
//     constructor() {
//     super();
//     this.validateEmail = this.validateEmail.bind(this);
//   }
    state = {
        allEmployees:[],
        cardData:[]
        
    };
    componentDidMount(){
        API.getAllEmp()
            .then(res => this.setState({allEmployees : res.data}))
            .catch(err => console.log(err))
        
    }
    getAllEmpData = (empName,e) => {
        API.getEmpData(empName.name)
        .then(res => {
            this.setState({cardData : res.data})
            console.log(res.data.Shifts[0].date)
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <Container style={{"margin":"50px"}}>
            <Segment.Group>

                    <Segment style={{"background-color":"#114C75", "color":"white"}} textAlign='center'>
                        <h2>Run a Report</h2>
                    </Segment>

                    <Segment > 
                        <Grid>
                        <Grid.Row>
                        <Grid.Column width = {4}>
                            {this.state.allEmployees.map( oneEmp =>
                                {
                                    let clickForReport = this.getAllEmpData.bind(this,oneEmp)
                                    return (
                                        <Grid.Row>
                                            <Button  onClick = {clickForReport} style={{"margin":"5px", "width":"100%"}}> {oneEmp.name} </Button>
                                        </Grid.Row>
                                    )
                                }
                            )}
                        </Grid.Column>

                        <Grid.Column width = {12}>
                            {   
                                this.state.cardData.length !==0 
                                ? <Card fluid>
                                    <Card.Content header={this.state.cardData.Employee[0].name} />
                                    
                                    <Card.Content >
                                        <Table basic celled padded unstackable>
                                            <Table.Header>
                                                <Table.Row active>
                                                    <Table.HeaderCell>Date</Table.HeaderCell>
                                                    <Table.HeaderCell>Shift</Table.HeaderCell>
                                                    <Table.HeaderCell>Description </Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                {
                                                    this.state.cardData.Shifts.map(eachShift =>
                                                        
                                                            
                                                        <Table.Row>

                                                            
                                                            <Table.Cell>{eachShift.date}</Table.Cell>
                                                            <Table.Cell>{eachShift.shift}</Table.Cell>
                                                            
                                                            <Table.Cell>
                                                                {eachShift.shiftConfirmed ? "This shift was confirmed prior to shift date." : null}
                                                                <br/> {eachShift.cancelled ? "This shift was missed/cancelled."  : null}
                                                                <br/> {eachShift.clockedIn ? "Clocked In: " + eachShift.clockedIn : null}
                                                                <br/> {eachShift.clockedOut ? "Clocked Out: " + eachShift.clockedOut : null}
                                                            </Table.Cell>

                                                        </Table.Row>
                                                            
                                                        
                                                    
                                                    )   
                                                }
                                            </Table.Body>
                                            <Table.Footer fullWidth>
                                                <Table.Row active>
                                                    <Table.HeaderCell > <h4>Notes About Employee</h4></Table.HeaderCell>

                                                    <Table.HeaderCell colSpan='2'>
                                                    {
                                                        this.state.cardData.Employee[0].notes.map(eachNote =>
                                                            {
                                                                return (<p> {eachNote}</p>) 
                                                            }
                                                            
                                                        )
                                                    }

                                                    </Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Footer>
                                        </Table>
                                    </Card.Content>
                                </Card>
                                :null                            
                            }
                        </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Segment>
                </Segment.Group>
            </Container>

        );
    }
}
export default Report;