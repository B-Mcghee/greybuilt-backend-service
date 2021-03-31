const UserModel = require('../models/user/User');
const BioModel = require('../models/Bio');

let UserController = {
    find: async (req, res) => {
        let user = await UserModel.find({userId: req.params.userId}).populate("images");
        res.json(user);
    },
    all: async (req, res) => {
        let allUsers = await UserModel.find().populate("images");
        res.json(allUsers);
    },
    create: async ( req, res) => {

        let newUser = new UserModel(req.body);

        let savedUser = newUser.save();
        let newBio = new BioModel()
        res.json(savedUser);
    },
    delete: async (req, res) => {

        try{
            await UserModel.remove({userId: req.params.id})
            res.status(200);
        }
        catch(err){
            res.json(err);
        }
    }

}

module.exports = UserController;