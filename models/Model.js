const mongoose=require("mongoose")
const Schema = new mongoose.Schema({
    about:{
        type:String,
        required:true
    }
})

module.exports =mongoose.model("data",Schema)