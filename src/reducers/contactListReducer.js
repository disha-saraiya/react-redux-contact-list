const contactList = [
    {
        "id" : Math.random(), 
        "firstName": "Alice", 
        "lastName": "Smith",
        "phone": "1234567890", 
        "email": "alicesmith@gmail.com"
    }, 
    {
        "id" : Math.random(), 
        "firstName": "Bob", 
        "lastName": "Smith",
        "phone": "3214565686", 
        "email": "bobsmith@gmail.com"
    }, 
]

export default function contactListReducer(state = {contacts : contactList}, action){
    if(action.type === 'ADD_CONTACT'){
        return{
            ...state,
            contacts: [...state.contacts, action.contact] 
        }
    }else if(action.type === 'UPDATE_CONTACT'){
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
        const newContactList = state.contacts.filter(contact => contact.id !== action.contactId); 
        return{
            ...state, 
            contacts: newContactList
        }
    }
    return state; 
}
