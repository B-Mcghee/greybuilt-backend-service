const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectImageSchema = new Schema({
   fileName:String,
   project:{
      type:Schema.Types.ObjectId,
      ref: "Project"
   }
   
});

module.exports =  mongoose.model('ProjectImage', ProjectImageSchema);