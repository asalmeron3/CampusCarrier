import React, { Component } from "react";
import { Container, Segment, Grid, Button, Card, Table, Form} from "semantic-ui-react";
// import API from "../../utils/API";
import getTime from "moment";
class WorkOrder extends Component {
//     constructor() {
//     super();
//     this.validateEmail = this.validateEmail.bind(this);
//   }
    state = {
        allEmployees:[],
        cardData:[],
        date: ''
        
    };
    // componentDidMount(){
    //     API.getAllEmp()
    //         .then(res => this.setState({allEmployees : res.data}))
    //         .catch(err => console.log(err))
        
    // }
    // getAllEmpData = (empName,e) => {
    //     API.getEmpData(empName.name)
    //     .then(res => {
    //         this.setState({cardData : res.data})
    //         console.log(res.data.Shifts[0].date)
    //     })
    //     .catch(err => console.log(err))
    // }
    componentDidMount() {
        this.setState({ date: getTime().format('LL')})
    }

    render() {
        return(
            <Container style={{"margin":"50px"}}>
            <Segment.Group>

                    <Segment style={{"background-color":"#114C75", "color":"white"}} textAlign='center'>
                        <h2>Order # 22222 : Arturo Salmeron</h2>
                    </Segment>

                    <Segment > 
                        <Grid stackable>
                        <Grid.Row divided>
                        <Grid.Column width = {4}>
                            
                            <Grid.Row>
                                <Card centered>
                                    <div style = {{"text-align": "center", "vertical-align": "middle" ,"line-height":"140px", "font-size":"140px"}}> <b>93</b> </div>
                                    <Card.Content>
                                        <Card.Header>Move-Out Address</Card.Header>
                                        <Card.Description>North Ave - SOUTH - 223C <br/> </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Card.Header>Primary Contact</Card.Header>
                                        <Card.Description>Arturo Salmeron <br/>(555) 365 - 5555 <br/> </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Card.Header>Parent Contact Info</Card.Header>
                                        <Card.Description>Samantha Baker <br/> (555) 365 - 5555 </Card.Description>
                                    </Card.Content>
                                    
                                </Card>
                            </Grid.Row>

                        </Grid.Column>

                        <Grid.Column width = {12}>
                            <Card fluid>
                                    <Card.Content style = {{"font-size":"20px", "font-weight":"1000"}} >
                                        <Grid stackable>
                                            <Grid.Column width = {8} className = "header" style = {{"text-align": "left"}}>Truck #5  -  Team #4  -  Delivery #2</Grid.Column>
                                            <Grid.Column width = {8} className = "header" style = {{"text-align": "right"}}>9:30 am - 12:00 pm</Grid.Column>
                                        </Grid>
                                         </Card.Content>
                                    <Card.Content >
                                        <Table basic celled padded >
                                            <Table.Header>
                                                <Table.Row active>
                                                    <Table.HeaderCell collapsing>Item Changes</Table.HeaderCell>
                                                    <Table.HeaderCell collapsing>Item Amount</Table.HeaderCell>
                                                    <Table.HeaderCell>Item Description(s) </Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                
                                                <Table.Row>
                                                    <Table.Cell>      </Table.Cell>
                                                    <Table.Cell>5 </Table.Cell>
                                                    <Table.Cell> Boxes </Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.Cell>      </Table.Cell>
                                                    <Table.Cell>2 </Table.Cell>
                                                    <Table.Cell> Plastic Bins </Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.Cell>      </Table.Cell>
                                                    <Table.Cell>1 </Table.Cell>
                                                    <Table.Cell> Mattress Topper </Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.Cell>      </Table.Cell>
                                                    <Table.Cell>1 </Table.Cell>
                                                    <Table.Cell> Sofa </Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.Cell>      </Table.Cell>
                                                    <Table.Cell>1 </Table.Cell>
                                                    <Table.Cell> Mini Fridge </Table.Cell>
                                                </Table.Row>

                                            </Table.Body>
                                            {/* <Table.Footer fullWidth>
                                                <Table.Row active>
                                                    <Table.HeaderCell > <h4>Notes About This Order</h4></Table.HeaderCell>

                                                    <Table.HeaderCell colSpan='2'>
                                                        <h5> Order Completed by Arturo Salmeron</h5>
                                                        <p> Customer did not have a mini fridge and no mattress pad. One extra box collected. </p>
                                                    </Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Footer> */}
                                        </Table>
                                    </Card.Content>

                                    <Card.Content>

                                         <Table basic celled padded size = "large" >
                                            <Table.Header>
                                                <Table.Row  active>
                                                    <Table.HeaderCell colSpan = "3" collapsing>Terms & Conditions </Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                <Table.Row> 
                                                    <Table.Cell colSpan = "3">
                                                        The customer confirms receipt of all of the above items in their entirety on date 
                                                        and at the delivery location indicated on this record.  Customer further declares that he/she warrants 
                                                        all items to have been delivered in satisfactory condition and hereby releases Campus Carriers, LLC 
                                                        from all liability, including any claims of harm or wrongdoing as set out in the Terms and Conditions.
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell> <Form.Input label='Print Name : ' type='text' placeholder = "First & Last Name" /> </Table.Cell>
                                                    <Table.Cell> <Form.Input label='Signature : ' type='text' placeholder = "Sign Here" /></Table.Cell>
                                                    <Table.Cell> Today's Date : {this.state.date} </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Card.Content>

                                    <Card.Content>
                                    
                                        <Table fullWidth basic padded >
                                            <Table.Header>
                                                <Table.Row  active>
                                                    <Table.HeaderCell colSpan = "3" collapsing>Notes About This Order </Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                <Table.Row >
                                                    <Table.Cell><h5>Order Completed by Arturo Salmeron</h5></Table.Cell>
                                                
                                                    <Table.Cell> Customer did not have a mini fridge and no mattress pad. One extra box collected.
                                                        <br/> Fridge was not drained and dried first
                                                        <br/> Boxes are TOO heavy
                                                        <br/> No tips were received
                                                        <br/> So many stairs 
                                                    </Table.Cell>
                                                
                                                
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>  
                                    </Card.Content>

                                </Card>
                        </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Segment>
                </Segment.Group>
            </Container>

        );
    }
}
export default WorkOrder;