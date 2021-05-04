import React, {useState} from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux'; 
import {updateContact} from '../actions'; 
import { Redirect } from "react-router-dom";

/* The EditContact form creates an existing contact, updates the contact list, and redirects to the home
   page to display the updated contact list. */ 

function EditContact(props){

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({}); 
    const [redirectToHome, setRedirectToHome] = useState(false); 

    //This function sets the fields in the Form component such as first name and last name to the corresponding fields in the form to submit. 
    const setField = (field, value) => {
        setForm({
            ...form, 
            [field]: value
        })
        if ( !!errors[field] ) setErrors({
                ...errors,
                [field]: null
        })

    }

    /* Creates an updatedContact object using the ID passed down via props while rendering the component. The rest of the 
       fields are populated using the input form the user submits. If the field is left empty (undefined), it replaced with
       a blank string to indicate no change to the original. */ 

    const handleSubmit = (e) => {
        e.preventDefault(); 

            const updatedContact = {
                "id" : props.location.state.contact.id, 
                "firstName" : ((form.first === undefined) ? "" : form.first), 
                "lastName" : ((form.last === undefined) ? "" : form.last), 
                "phone" : ((form.phone === undefined) ? "" : form.phone), 
                "email" : ((form.email === undefined) ? "" : form.email)
            }
            props.updateContact(updatedContact); 
            setRedirectToHome(true);      
    }

    if(redirectToHome){
        return(
            <Redirect to="/"></Redirect>
        )
    }

    return(
    <div className = "home_container">
        <div className = "form_container">
            <h4> Update an existing contact </h4>
            <br /> 
            <Form.Row>

            <Col>
            <Form.Group >
            <Form.Label>Edit First Name</Form.Label>
            <Form.Control type="text" placeholder={props.location.state.contact.firstName}
            onChange = {e => setField('first', e.target.value)} />
            </Form.Group>
            </Col>

            <Col>
            <Form.Group as={Col}>
            <Form.Label>Edit Last Name</Form.Label>
            <Form.Control type="text" placeholder={props.location.state.contact.lastName} 
            onChange = {e => setField('last', e.target.value)} />
            </Form.Group>
            </Col>

            </Form.Row>

            <Form.Group>
            <Form.Label>Edit Email</Form.Label>
            <Form.Control type="email" placeholder={props.location.state.contact.email} 
            onChange = {e => setField('email', e.target.value)} isInvalid = {!!errors.email} />
            <Form.Control.Feedback type = "invalid" > {errors.email} </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
            <Form.Label>Edit Phone number</Form.Label>
            <Form.Control type="text" placeholder={props.location.state.contact.phone}
            onChange = {e => setField('phone', e.target.value)} isInvalid = {!!errors.phone}/>
            <Form.Control.Feedback type = "invalid" > {errors.phone} </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" onClick = {e => handleSubmit(e)}>
                Edit contact information
            </Button>
            </div>
    </div>
    )
}

// This component uses mapStateToProps and mapDispatchToProps to update the contact list dynamically.
let mapStateToProps = function(state, props){
    return{
      contacts: state.contacts
    }
  }

let mapDispatchToProps = (dispatch, props) =>{
    return{
        updateContact: contact => dispatch(updateContact(contact))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContact); 