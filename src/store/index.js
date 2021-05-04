const store = createStore( reducer, {
    contacts: {
        contactlist: [],
        newContact: { }
    },
    ui: {
        isContactFormHidden: true
 
        }
})