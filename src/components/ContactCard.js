import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';


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