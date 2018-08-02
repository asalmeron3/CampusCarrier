import React from 'react'
import {Modal, Image, Header, Button, Icon, Form} from 'semantic-ui-react'

var AddEmp =(props) =>

<Modal
open={props.isFormModalOpen}
onClose={props.handleFormModalClose}
closeIcon={{ name: 'close', color: 'grey' }}
size = "small"
>

<Modal.Header floated="left"> 
    Add Impromptu Employee
</Modal.Header>

<Modal.Content>
    <Form>
        <Form.Group>
            <Form.Input 
                required
                width = {10}
                label = "Name:"
                placeholder = "First and Last Name"
                id = "name"
                type = "text"
                onChange = {props.handleChanges}
                name = "name"
            />
            <Form.Input
                width = {6}
                required
                label = "Email Address:"
                placeholder = "Your Email Adress"
                id = "email"
                type = "text"
                onChange = {props.handleChanges}
                name = "email"
            />
        
            <Form.Input
                width = {6}
                required
                label = "Phone #"
                placeholder = "888-888-8888"
                id = "phone"
                type = "text"
                onChange = {props.handleChanges}
                name = "phone"
            />
        </Form.Group> 
        <Button type = "submit" onClick = {props.addEmpToDB} style={{"background-color":"#114C75","color":"white"}}>
            Add Employee/Shift To Database
        </Button>
    </Form>
</Modal.Content>
</Modal> 

export default AddEmp;