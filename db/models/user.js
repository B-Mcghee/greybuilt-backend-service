let mongoose = require('../connection');

let Schema = mongoose.Schema

let UserSchema = new Schema({
    userId:{
        type: Number,
        required:true,
    }, 
    name:String,
    email:{
        type:String,
        required:true,
    },
    phoneNumber:String,
    roleId: {
        type:Schema.Types.ObjectId,
        ref:"Role"
    }
});

let User = mongoose.model('User', UserSchema);

module.exports = User;