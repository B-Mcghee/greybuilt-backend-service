const BioModel = require('../models/Bio');

let BioController = {
    find: async (req, res) => {
        try{
            let bio = await BioModel.find({bioId: req.params.bioId}).populate("user");
            res.json(bio);
        }
        catch(err){
            res.json(err);
    }

    },
    all: async (req, res) => {
        let allBios = await BioModel.find();
        res.json(allBios);
    },
    create: async ( req, res) => {

        let newBio = BioModel(req.body);
        try{
            let savedBio = await newBio.save();
            res.json(savedBio);
        }
        catch(err)
        {
            res.json(err);
        }


    },
    delete: async (req, res) => {
        try{
            const bio = await BioModel.remove({bioId: req.params.id});
            res.json(bio);
        }
        catch(err)
        {
            res.json(err);
        }

        
    }

}

module.exports = BioController;