const mongoose  = require("mongoose")



const AddressSchema = new mongoose.Schema({
    fname :{type: String , require:true},
     lname :{type: String , require:true},
     address : {type: String , require:true},
     phone :{type: Number , require:true},
     city : {type: String , require:true},
     country : {type: String , require:true},
},
{
    versionKey:false,
    timestamps:true
})


const Address = mongoose.model("address" , AddressSchema)

module.exports = Address;