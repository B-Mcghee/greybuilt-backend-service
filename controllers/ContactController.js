const ContactModel = require('../models/Contact');

let ContactController = {
    find: async (req, res) => {
        let contact = await ContactModel.find({contactId: req.params.contactId}).populate("images");
        res.json(contact);
    },
    all: async (req, res) => {
        let allContacts = await ContactModel.find();
        res.json(allContacts);
    },
    create: async ( req, res) => {

        let newContact = new ContactModel(req.body);
        try{
            let savedContact = newContact.save();
            res.json(savedContact);
        }
        catch(err){
            res.json(err);
        }
    },
    delete: async (req, res) => {
        try{
            await ContactModel.remove({contactId: req.params.id});
            res.status(200);
        }
        catch(err){
            res.json(err);
        }
    }
}

module.exports = ContactController;