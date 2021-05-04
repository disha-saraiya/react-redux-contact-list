const initialState = {
    contacts: {
        contactList: [],
        newContact: {
                firstName : '',
                lastName : '',
                email: '',
                phone: ''
            },
        ui: {
            //All the UI related state here. eg: hide/show modals,
            //toggle checkbox etc.
        }
    }
}

export default initialState; 