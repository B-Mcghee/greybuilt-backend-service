const express = require('express');
const router = express.Router();
const FloorPlanControls = require('../controllers/FloorPlanController');


// Get All floorPlans
router.get('/', FloorPlanControls.all);

// Get Single FloorPlan
router.get('/:id', async (req, res) => {
    try{
        const floorPlan = await FloorPlan.findById(req.params.id);
        res.json(floorPlan);
    }
    catch(err)
    {
        res.json({ message: err });
    }
    });


// Send FloorPlans
router.post('/', FloorPlanControls.create)

//Delete FloorPlans

router.delete('/:id', FloorPlanControls.delete)

// Update FloorPlan 
router.patch('/:id', async (req, res) => {
    try {
        const update = await FloorPlan.updateOne(
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
