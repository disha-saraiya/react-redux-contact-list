import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'; 
import ContactCard from './ContactCard'; 
import Button from 'react-bootstrap/Button'; 
import {addContact} from '../actions'; 

function Home(props){
    const [showNewForm, setShowNewForm] = useState(false); 
    const [showEditForm, setShowEditForm] = useState(false); 
    const [showDeleteError, setShowDeleteError] = useState(false); 
    const [selectedContactToEdit, setSelectedContactToEdit] = useState({}); 
    const [selectedContactToDelete, setSelectedContactToDelete] = useState({}); 

    const toggleNewContactForm = e => {
      e.preventDefault(); 
      setShowNewForm(true); 
    }

    const toggleEditContactForm = (e, contact) => {
      e.preventDefault(); 
      setSelectedContactToEdit(contact);
      console.log(selectedContactToEdit);  
      setShowEditForm(true); 
    }

    const toggleDeleteContact = (e, contact) => {
      e.preventDefault(); 
      setSelectedContactToDelete(contact); 
      setShowDeleteError(true); 
    }


    if(showNewForm){
      return(
        <Redirect to = "/new"></Redirect>
      )
    }

    if(showEditForm){
      return(
        <Redirect to = {{pathname : "/edit", state: {contact: selectedContactToEdit}}}></Redirect>
      )
    }

    if(showDeleteError) {
      return(
        <Redirect to = {{pathname : "/delete", state: {contact: selectedContactToDelete}}}></Redirect>
      )
    }

    return(
        <div>
        <Button variant = "light" type = "submit" onClick = {e => toggleNewContactForm(e)}> Create a new contact</Button>
        {
          props.contacts.map(contact => {
            return(
            <div key = {contact.email}>
            <ContactCard contact = {contact} />
            <Button onClick = {e => toggleEditContactForm(e, contact)}> Edit contact </Button>
            <Button onClick = {e => toggleDeleteContact(e, contact)}> Delete contact </Button>
            </div>
            ); 
          })
        }
        </div>)
}

let mapStateToProps = function(state, props){
  return{
    contacts: state.contactList.contacts
  }
}

let mapDispatchToProps = (dispatch, props) =>{
  return{
      createContact: contact => dispatch(addContact(contact)), 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home); 