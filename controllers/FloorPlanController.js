const FloorPlanModel = require('../models/FloorPlan');

let FloorPlanController = {
    find: async (req, res) => {
        let floorPlan = await FloorPlanModel.find({floorPlanId: req.params.floorPlanId}).populate("images");
        res.json(floorPlan);
    },
    all: async (req, res) => {
        let allFloorPlans = await FloorPlanModel.find();
        res.json(allFloorPlans);
    },
    create: async ( req, res) => {

        let newFloorPlan = FloorPlanModel(req.body);
        console.log(newFloorPlan);
        try{
            let savedFloorPlan = await newFloorPlan.save();
            res.json(savedFloorPlan);
        }
        catch(err)
        {
            res.json(err)
        }


    },
    delete: async (req, res) => {
        try{
            const floorPlan = await FloorPlanModel.remove({floorPlanId: req.params.id});
            res.json(floorPlan);
        }
        catch(err)
        {
            res.json(err);
        }

        
    }

}

module.exports = FloorPlanController;