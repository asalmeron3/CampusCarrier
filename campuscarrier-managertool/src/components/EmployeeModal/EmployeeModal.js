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
        label='Notes'
        placeholder='Notes'
        style = {{"width":"90%"}}
        onChange = {props.handleNoteChange}
        name = "notes"
    />
    <Button onClick = {props.addNote} > Add Note For Employee </Button>
    <br/><br/>
    <Form style = {{"float":"left"}} as ="a" href= {"tel:" + props.phone}><Icon circular link size="large" name = "phone"/></Form>                         
        <Icon.Group size='large' >
            <Icon link circular name='user' 
                style = {{"background-color":"lightgrey"}} 
                onClick={props.handleUserConfirm}
            />
            <Icon corner name='check' /> 
        </Icon.Group>

        <Icon.Group size='large' >
            <Icon link circular name='clock' 
                style = {{"background-color":"lightgrey"}} 
                onClick={props.handleUserClockIn}  
            />
            <Icon corner name='check' />
        </Icon.Group>

        <Icon.Group size='large' >
            <Icon link circular name='clock' 
                style = {{"background-color":"lightgrey"}} 
                onClick={props.handleUserClockOut}  
            />
            <Icon corner name='close' />
        </Icon.Group>

        <Icon.Group size='large' >
            <Icon link circular name='user' 
                style = {{"background-color":"lightgrey"}} 
                onClick={props.handleUserCancel}  
            />
            <Icon corner name='dont' />
        </Icon.Group>
    </Modal.Description>

  </Modal.Content>
        
 </Modal> 

export default EmployeeModal;