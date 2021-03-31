const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let buildUser = function(userValidator){
    return ({
        name,
        email,
        phoneNumber,
        role
    } = {}) =>{
        let {error} = userValidator({name,email,phoneNumber,role})
        if(error) throw new Error(error)

        return{
            getName: () => name,
            getEmail: () => email,
            getPhoneNumber: () => phoneNumber,
            getRole: () => role
        }
    }
}


module.exports = buildUser

// module.exports = mongoose.model('User', UserSchema);