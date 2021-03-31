const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    coverImage:{
        type:String,
        required:true
    },
    images:[],
    squareFeet:{
        type:String,
        required:true
    },
    beds:Number,
    baths:Number
});

module.exports = mongoose.model('Project', ProjectSchema);