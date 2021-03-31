const express = require('express');
const router = express.Router();
const BioControls = require('../../../controllers/BioController');


// Get All bios
router.get('/', BioControls.all);

// Get Single Bio
router.get('/:id', async (req, res) => {
    try{
        const bio = await Bio.findById(req.params.id);
        res.json(bio);
    }
    catch(err)
    {
        res.json({ message: err });
    }
    });


// Send Bios
router.post('/', BioControls.create)

//Delete Bios

router.delete('/:id', BioControls.delete)

// Update Bio 
router.patch('/:id', async (req, res) => {
    try {
        const update = await Bio.updateOne(
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
