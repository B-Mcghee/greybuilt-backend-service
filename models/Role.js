const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    type:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Role', RoleSchema);