import React, {useState} from 'react';
import {Alert, Button} from 'react-bootstrap'; 
import {connect} from 'react-redux'; 
import {deleteContact} from '../actions'; 
import { Redirect } from "react-router-dom";

function DeleteAlert(props){

    const[redirectToHome, setRedirectToHome] = useState(false); 

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
          <Alert variant="danger">
            <Alert.Heading>Are you sure you want to delete {props.location.state.contact.firstName}?</Alert.Heading>
            <hr />
            <div className="justify-content-center">
              <Button variant="outline-danger" onClick = {e => handleDelete(e)}>
                Confirm delete
              </Button>
            </div>
          </Alert>
          )
}

let mapStateToProps = function(state, props){
    return{
      contacts: state.contactList.contacts
    }
  }

let mapDispatchToProps = (dispatch, props) =>{
    return{
        deleteContact : contactId => dispatch(deleteContact(contactId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAlert); 