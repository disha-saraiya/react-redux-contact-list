import React, {useState} from 'react';
import {Alert, Button} from 'react-bootstrap'; 
import {connect} from 'react-redux'; 
import {deleteContact} from '../actions'; 
import { Redirect } from "react-router-dom";
import './components.css'; 

/* The DeleteAlert is an alert that prompts the user to delete a contact and deletes the contact 
   if the user agrees, updates the existing contact list, and redirects to the home
   page to display the updated contact list. */ 

function DeleteAlert(props){
    //To toggle redirecting to home after the contact has been deleted successfully. 
    const[redirectToHome, setRedirectToHome] = useState(false); 

    /* Dispatches the action to delete a contact, using the contactID that has been passed on via props
       while rendering the component. Once the contact has been successfully deleted, application is
       redirected to the home page. */
    const handleDelete = e => {
        e.preventDefault(); 
        props.deleteContact(props.location.state.contact.id); 
        setRedirectToHome(true); 
    }

    if(redirectToHome){
        return(
            <Redirect to="/"></Redirect>
        )
    }
    return (
          <div className = "home_container">
          <div className = "delete_alert">
          <Alert variant="danger">
            <Alert.Heading> Are you sure you want to delete {props.location.state.contact.firstName}?</Alert.Heading>
            <hr />
            <div className="justify-content-center">
              <Button variant="outline-danger" onClick = {e => handleDelete(e)}>
                Confirm delete
              </Button>
            </div>
          </Alert>
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
        deleteContact : contactId => dispatch(deleteContact(contactId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAlert); 