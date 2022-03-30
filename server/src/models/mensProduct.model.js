const mongoose = require('mongoose');

const mensProductSchema = new mongoose.Schema({
    

    id: {type:Number , required: true,unique:true},
    title: {type:String , required: true},
    subtitle: {type:String , required: false},
    image1: {type:String , required: false},
    image2: {type:String , required: false},
    image3: {type:String , required: false},
    image4: {type:String , required: false},
    image5: {type:String , required: false},
    image6: {type:String , required: false},
    color: {type:String , required: false},
    price: {type:String , required: false},
    description_title: {type:String , required: false},
    description_para: {type:String , required: false},
    description_points1: {type:String , required: false},
    description_points2: {type:String , required: false},
    description_points3: {type:String , required: false},
    description_points4: {type:String , required: false},
    description_points5: {type:String , required: false},
    description_points6: {type:String , required: false},
    description_points7: {type:String , required: false},
    description_points8: {type:String , required: false},
    description_points9: {type:String , required: false},
    description_points10:{type:String , required: false},
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: false
      }

})

module.exports = mongoose.model("mensProduct",mensProductSchema);