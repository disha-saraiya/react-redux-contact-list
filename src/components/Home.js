import React from 'react';
import contactList from '../contactList'; 
import ContactCard from './ContactCard'; 
import Button from 'react-bootstrap/Button'; 



function Home(){
    return(
        <div>
        
        <Button type = "submit"><a href = "/new"> Create a new contact </a></Button>
        {
          contactList.map(contact => {
            return(
            <div key = {contact.email}>
            <ContactCard contact = {contact} />
            </div>
            ); 
          })
        }
        </div>)
}

export default Home; 