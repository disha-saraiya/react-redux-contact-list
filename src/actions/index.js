/* This is where all the different redux actions are. There are three actions for this application - adding, updating and 
   deleting a contact. For each corresponding action, there is either a contact or contactID taken as the payload, 
   to recognize which contact to perform the operation on. */ 
   
export const addContact = (contact) => {
    return{
        type: 'ADD_CONTACT',
        contact: contact
    }
}

export const updateContact = (contact) => {
    return{
        type: 'UPDATE_CONTACT', 
        contact: contact
    }
}

export const deleteContact = (contactId) => {
    return{
        type: 'DELETE_CONTACT', 
        contactId: contactId
    }
}

