const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FloorPlanImageSchema = new Schema({
   fileName:String,
   FloorPlanId:Number
   
});

module.exports =  mongoose.model('FloorPlanImage', FloorPlanImageSchema);