import React from 'react';
import { Card } from 'react-bootstrap';


function ContactCard(props){
    return(
        <Card>
            <Card.Title> {props.contact.firstName} {props.contact.lastName} </Card.Title>
            <Card.Body> {props.contact.phone} </Card.Body>
            <Card.Link href = "#"> View more information </Card.Link>
            <Card.Link href = "/edit"> Edit </Card.Link>
            <Card.Link href = "#"> Delete contact </Card.Link>
        </Card>)
}

export default ContactCard; 