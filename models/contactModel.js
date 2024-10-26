const mongoose = require("mongoose");
const { emit } = require("nodemon");


const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please add the name"],
    },
    email:{
        type:String,
        required: [true,"Please add the contact email eddress"],
    },
    phone:{
        type:String,
        required: [true,"Please add the contact email eddress"],
    },
    
},
{
    timestamps:true,
}
);

module.exports = mongoose.model("Contact", contactSchema);