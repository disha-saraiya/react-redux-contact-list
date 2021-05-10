import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap'; 
import {connect} from 'react-redux'; 
import {addContact} from '../actions/'; 
import { Redirect } from "react-router-dom";

/* The CreateContact form creates a new contact, updates the existing contact list, and redirects to the home
   page to display the updated contact list. */ 

function CreateContact(props){
            //The form with filled up values to create a new contact
            const [form, setForm] = useState({});
            //For error handling 
            const [errors, setErrors] = useState({}); 
            //To toggle redirecting to home after the contact has been created successfully. 
            const [redirectToHome, setRedirectToHome] = useState(false); 

            //This function sets the fields in the Form component such as first name and last name to the corresponding fields in the form to submit. 
            const setField = (field, value) => {
                setForm({
                    ...form, 
                    [field]: value
                })
                if (!!errors[field]) 
                setErrors({
                        ...errors,
                        [field]: null
                })
        
            }
        
            //Will find the errors in the form and invalidate any inputs that are erroneous, so that the form can only be submitted once all the information is correct. 
            const findFormErrors = () => {
                    const {first, email, phone} = form
                    const newErrors = {} 
                    // Email regex reference - https://ui.dev/validate-email-address-javascript/
                    const re = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); 

                    if((re.test(email)) === false) newErrors.email = "Please enter a valid email address."

                    if(!first || first === '') newErrors.first = "Please input a first name for your contact."                    

                    if(!phone || phone.length !== 10) newErrors.phone = "Please provide a valid phone number."
                    return newErrors
            }
            
            /* Checks the input error form for any errors and invalidates till correct. 
            Once correct, the new contact is set, and action for creating a new contact is dispatched.
            Once the new contact has been created the app is redirected to the home page to display the updated
            list of contacts. */
            const handleSubmit = (e) => {
                e.preventDefault(); 

                const newErrors = findFormErrors(); 
                if(Object.keys(newErrors).length > 0){
                    setErrors(newErrors); 
                }else{
                    const newContact = {
                        "id" : Math.random(), 
                        "firstName" : form.first, 
                        "lastName" : form.last, 
                        "phone" : form.phone, 
                        "email" : form.email
                    }
                    props.createContact(newContact); 
                    setRedirectToHome(true);    
                }
            }

            if(redirectToHome){
                return(
                    <Redirect to="/"></Redirect>
                )
            }

    return(
    <div className = "home_container">
    <h4 className = "heading"> Create a new contact </h4>
    <div className = "form_container">
            <br /> 
            <Form.Row>
            <Col>
            <Form.Group >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name"
            onChange = {e => setField('first', e.target.value)} isInvalid = {!!errors.first} />
            <Form.Control.Feedback type = "invalid" > {errors.first} </Form.Control.Feedback>
            </Form.Group>
            </Col>

            <Col>
            <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" 
            onChange = {e => setField('last', e.target.value)} />
            </Form.Group>
            </Col>
            </Form.Row>

            <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="example@example.com"
            onChange = {e=> setField('email', e.target.value)} isInvalid = {!!errors.email} />
            <Form.Control.Feedback type = "invalid" > {errors.email} </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number"
            onChange = {e => setField('phone', e.target.value)} isInvalid = {!!errors.phone} />
            <Form.Control.Feedback type = "invalid" > {errors.phone} </Form.Control.Feedback>
            </Form.Group>

            <Button variant="light" type="submit" onClick = {e => handleSubmit(e)}>
                Create contact
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
        createContact: contact => dispatch(addContact(contact))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact); 