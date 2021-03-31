const mongoose = require('mongoose');
const User = require('./user/User').UserSchema;
const Schema = mongoose.Schema;

const BioSchema =  new Schema({
    position:{
        type: String,
        required: String
    },
    user: User,
    avatar:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Bio', BioSchema);