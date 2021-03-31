const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    contactId:{
        type:Number, 
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    potentialCity:{
        type:String,
        required:true
    },
    priceRange:{
        type:String,
        required:true
    },
    squareFootage:{
        type:String,
        required:true
    },
    appointmentTime:{
        type:String,
        required:true
    },
    title:{
        type:Schema,
        required:true
    }
})


