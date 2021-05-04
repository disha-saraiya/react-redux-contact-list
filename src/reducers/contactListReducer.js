/* The initial hard coded contact list.
   Each contact consists of  a firstName, lastName, phone, and email. A random ID is assigned to every contact
   to maintain uniqueness across records and also for faster access. In actuality this could have been a database
   ObjectId such as _id. */ 

   const contactList = [
    {
        "id" : Math.random(), 
        "firstName": "Rohit", 
        "lastName": "Sharma",
        "phone": "1234567890", 
        "email": "rohitsharma@gmail.com"
    }, 
    {
        "id" : Math.random(), 
        "firstName": "Steve", 
        "lastName": "Smith",
        "phone": "3214565686", 
        "email": "stevesmith@gmail.com"
    }, 
]


export default function contactListReducer(state = {contacts : contactList}, action){
    if(action.type === 'ADD_CONTACT'){
        //Add contact simply appends the new contact received from the action to the contact list. 
        return{
            ...state,
            contacts: [...state.contacts, action.contact] 
        }
    }else if(action.type === 'UPDATE_CONTACT'){
        /* Update contact first finds the index of the contact to update, clones the existing contact list, 
        replaces the existing contact with its new values but keeps the ID constant, and finally returns the 
        updated contact list. */
        const index = state.contacts.findIndex(contact => contact.id === action.contact.id); 
        const updatedContacts = [...state.contacts]; 

        updatedContacts[index].id = action.contact.id
        if(action.contact.firstName !== "") { updatedContacts[index].firstName = action.contact.firstName}
        if(action.contact.lastName  !== "") { updatedContacts[index].lastName = action.contact.lastName}
        if(action.contact.email !== "") { updatedContacts[index].email = action.contact.email}
        if(action.contact.phone !== "") { updatedContacts[index].phone = action.contact.phone}

        return{
            ...state, 
            contacts: updatedContacts
        }
    }else if(action.type === 'DELETE_CONTACT'){
        //Delete contact deletes the contact by filtering all the contacts except the one to delete 
        //from the contact list, and returns the filtered list. 
        const newContactList = state.contacts.filter(contact => contact.id !== action.contactId); 
        return{
            ...state, 
            contacts: newContactList
        }
    }
    return state; 
}
