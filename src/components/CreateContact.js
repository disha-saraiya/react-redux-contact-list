import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap'; 
import {connect} from 'react-redux'; 
import {useDispatch, useSelector} from 'react-redux'; 
import {addContact} from '../actions/'; 
import { Redirect } from "react-router-dom";
import Navigation from './Navigation';



function CreateContact(props){

            const contacts = useSelector(state => state.contactList);
            const dispatch = useDispatch(); 

            const [form, setForm] = useState({});
            const [errors, setErrors] = useState({}); 
            const [redirectToHome, setRedirectToHome] = useState(false); 

            //Function to update state of the form
            // Email regex - https://ui.dev/validate-email-address-javascript/
            const setField = (field, value) => {
                setForm({
                    ...form, 
                    [field]: value
                })
                // Check and see if errors exist, and remove them from the error object:
                if ( !!errors[field] ) setErrors({
                        ...errors,
                        [field]: null
                })
        
            }
        
            const findFormErrors = () => {
                    const {first, email, phone} = form
                    const newErrors = {} 
                    const re = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); 

                    if((re.test(email)) === false ) newErrors.email = "Please enter a valid email address."

                    if(!first || first === '') newErrors.first = "Please input a first name for your contact."                    

                    if(!phone || phone.length !== 10) newErrors.phone = "Please provide a valid phone number."
                    return newErrors
            }
            
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
    <div>
    <Navigation />
    <div className = "form_container">

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

            <Button variant="primary" type="submit" onClick = {e => handleSubmit(e)}>
                Create contact
            </Button>
    </div>
    </div>
    )
}

let mapStateToProps = function(state, props){
    console.log(state); 
    return{
      contacts: state.contactList.contacts
    }
  }

let mapDispatchToProps = (dispatch, props) =>{
    return{
        createContact: contact => dispatch(addContact(contact))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact); 