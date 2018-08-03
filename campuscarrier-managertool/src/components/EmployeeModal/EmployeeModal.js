import React from 'react'
import {Modal, Image, Header, Button, Icon, Form} from 'semantic-ui-react'

var EmployeeModal =(props) => 
  <Modal 
    open={props.modalOpen}
    onClose={props.handleClose}
    closeIcon={{ name: 'close', color: 'grey' }}
    size = "large"
  >

  <Modal.Content >

    <Modal.Description>
      <Header>{props.modalName} </Header>
    <Form.TextArea
        id='EmpNotes'
        placeholder='Add any notes about employee/shift'
        style = {{"width":"100%"}}
        onChange = {props.handleNoteChange}
        name = "notes"
    />
    
    <br/><br/>

    <Button onClick = {props.addNote} > Add Note For Employee </Button>
    </Modal.Description>

  </Modal.Content>
        
  </Modal> 

export default EmployeeModal;