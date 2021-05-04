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

export const fetchList = (name, value) => {
    return{
        type: 'FETCH_LIST', 
        payload: {[name] : value}
    }
}