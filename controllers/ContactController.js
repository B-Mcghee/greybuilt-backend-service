const ContactModel = require('../models/Contact');

let ContactController = {
    find: async (req, res) => {
        try{
            let contact = await ContactModel.find({contactId: req.params.contactId});
            res.json(contact);
        }
        catch(err){
            res.json(err);
    }

    },
    all: async (req, res) => {
        let allContacts = await ContactModel.find();
        res.json(allContacts);
    },
    create: async ( req, res) => {

        let newContact = ContactModel(req.body);
        try{
            let savedContact = await newContact.save();
            res.json(savedContact);
        }
        catch(err)
        {
            res.json(err);
        }


    },
    delete: async (req, res) => {
        try{
            const contact = await ContactModel.remove({contactId: req.params.id});
            res.json(contact);
        }
        catch(err)
        {
            res.json(err);
        }

        
    }

}

module.exports = ContactController;