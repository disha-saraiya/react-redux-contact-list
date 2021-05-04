import initialState from './initialState'; 

const contactList = [
    {
        "firstName": "Alice", 
        "lastName": "Smith",
        "phone": "1234567890", 
        "email": "alicesmith@gmail.com"
    }, 
    {
        "firstName": "Bob", 
        "lastName": "Smith",
        "phone": "3214565686", 
        "email": "bobsmith@gmail.com"
    }, 
]

//Initial state of the contact list. 
 
export default function contactListReducer(state = {contacts : [
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
]}, action){
    if(action.type === 'ADD_CONTACT'){
        return{
            ...state, //Spread the original state
            contacts: [...state.contacts, action.contact] //new contacts array
        }
    }else if(action.type === 'UPDATE_CONTACT'){
        console.log(action.contact); 
        const index = state.contacts.findIndex(contact => contact.id === action.contact.id); 
        console.log(index); 

        const updatedContacts = [...state.contacts]; 

        updatedContacts[index].id = action.contact.id
        if(action.contact.firstName !== "") { updatedContacts[index].firstName = action.contact.firstName}
        if(action.contact.lastName  !== "") { updatedContacts[index].lastName = action.contact.lastName}
        if(action.contact.email !== "") { updatedContacts[index].email = action.contact.email}
        if(action.contact.phone !== "") { updatedContacts[index].phone = action.contact.phone}

        console.log(updatedContacts);

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

// export default function contactListReducer(state = initialState.contacts, action){
//     //Add contact to the state.
//     if(action.type === 'ADD_CONTACT'){
//         return{
//             ...state, 
//             contactList: [...state.contactList, state.newContact]
//         }
//     }else if(action.type === 'UPDATE_CONTACT'){
//         return{
//             contacts: [...state.contacts]
//         }
//     //Handle the change of state for the contact form 
//     }else if(action.type === 'FETCH_LIST'){
//         console.log(state.contacts); 
//         return {
//             ...state, 
//             newContact: {...state.newContact, ...action.payload}
//         }
//     }
//     return state; 
// }