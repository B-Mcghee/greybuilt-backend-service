const BioModel = require('../models/Bio');

let BioController = {
    find: async (req, res) => {
        let bio = await BioModel.find({bioId: req.params.bioId});
        res.json(bio);
    },
    all: async (req, res) => {
        let allBios = await BioModel.find();
        res.json(allBios);
    },
    create: async ( req, res) => {

        let newBio = new BioModel(req.body);
        try{
            let savedBio = newBio.save();
            res.json(savedBio);
        }
        catch(err){
            res.json(err);
        }

    },
    delete: async (req, res) => {
        try{
            await BioModel.remove({_id: req.params.id});
            res.status(200);
        }
        catch(err){
            res.json(err);
        }
    }

}

module.exports = BioController;