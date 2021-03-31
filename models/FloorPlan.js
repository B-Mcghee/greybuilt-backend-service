const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FloorPlanSchema = new Schema({
    floorPlanId: {
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    coverImage:{
        type:String,
        required:true
    },
    images:[{
        type: Schema.Types.ObjectId,
        ref: "Image"
    }],
    squareFeet:{
        type:String,
        required:true
    },
    beds:Number,
    baths:Number
});

module.exports = mongoose.model('FloorPlan', FloorPlanSchema);