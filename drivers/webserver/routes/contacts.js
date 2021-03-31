const express = require('express');
const router = express.Router();
const ContactControls = require('../controllers/ContactController');


// Get All contacts
router.get('/', ContactControls.all);

// Get Single Contact
router.get('/:id', async (req, res) => {
    try{
        const contact = await Contact.findById(req.params.id);
        res.json(contact);
    }
    catch(err)
    {
        res.json({ message: err });
    }
    });


// Send Contacts
router.post('/', ContactControls.create)

//Delete Contacts

router.delete('/:id', ContactControls.delete)

// Update Contact 
router.patch('/:id', async (req, res) => {
    try {
        const update = await Contact.updateOne(
            {_id : req.params.id}, 
            {$set: {title: req.body.title}}
            );
        res.json(update);
    }
    catch(err)
    {
        res.json( { message: err});
    }
});



module.exports = router;
