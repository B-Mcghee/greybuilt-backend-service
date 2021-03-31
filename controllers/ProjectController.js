const ProjectModel = require('../models/Project');

let ProjectController = {
    find: async (req, res) => {
        try{
            let project = await ProjectModel.find({projectId: req.params.projectId}).populate("images");
            res.json(project);
        }
        catch(err){
            res.json(err);
    }

    },
    all: async (req, res) => {
        let allProjects = await ProjectModel.find();
        res.json(allProjects);
    },
    create: async ( req, res) => {

        let newProject = ProjectModel(req.body);
        try{
            let savedProject = await newProject.save();
            res.json(savedProject);
        }
        catch(err)
        {
            res.json(err);
        }


    },
    delete: async (req, res) => {
        try{
            const project = await ProjectModel.remove({projectId: req.params.id});
            res.json(project);
        }
        catch(err)
        {
            res.json(err);
        }

        
    }

}

module.exports = ProjectController;