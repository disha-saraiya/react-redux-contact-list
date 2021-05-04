import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'; 
import ContactCard from './ContactCard'; 
import Button from 'react-bootstrap/Button'; 
import {addContact} from '../actions'; 

/* The home page of the application. Since the requirement states no persistance to backend, it has been
   created as a single page application, where each additional component (editing, deleting, or creating a contact)
   has been redirected to using a trigger. This is to ensure that the changes in the redux state tree
  reflect through all the components smoothly. */ 

function Home(props){
    //Various toggles to show different components without refreshing the state.
    const [showNewForm, setShowNewForm] = useState(false); 
    const [showEditForm, setShowEditForm] = useState(false); 
    const [showDeleteError, setShowDeleteError] = useState(false); 
    //State to select which contact to edit and delete based on the contact currently mapped. 
    const [selectedContactToEdit, setSelectedContactToEdit] = useState({}); 
    const [selectedContactToDelete, setSelectedContactToDelete] = useState({}); 

    const toggleNewContactForm = e => {
      e.preventDefault(); 
      setShowNewForm(true); 
    }

    const toggleEditContactForm = (e, contact) => {
      e.preventDefault(); 
      setSelectedContactToEdit(contact);
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
       //The contact list is received from props, which comes from the redux state tree from mapStateToProps 
       //The edit and delete buttons are being sent the current contact 
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

// This component uses mapStateToProps to update the contact list dynamically.
let mapStateToProps = function(state, props){
  return{
    contacts: state.contacts
  }
}

export default connect(mapStateToProps, null)(Home); 