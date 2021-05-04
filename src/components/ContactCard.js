import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

/* The ContactCard function houses the layout for how a contact must look in the list. Each card consists of a 
   title holding the name, and body holding the phone number of the contact. The Accordion component toggles more
   information about the contact, such as the emailID. The information to the card is passed on via props from the 
   Home component. 
   Reference - https://react-bootstrap.github.io/components/accordion/ */ 

function ContactCard(props){
    return(
        <Accordion>
        <Card>
            <Card.Title> {props.contact.firstName} {props.contact.lastName} </Card.Title>
            <Card.Body> {props.contact.phone} </Card.Body>
            <Accordion.Toggle as = {Button} variant = "link" eventKey = "0"> View more information </Accordion.Toggle>
            <Accordion.Collapse eventKey = "0"> 
                <Card.Body> {props.contact.email} </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
        )
}

export default ContactCard; 