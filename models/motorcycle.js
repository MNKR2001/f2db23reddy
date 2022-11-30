const mongoose = require("mongoose") 
const motorcycleSchema = mongoose.Schema({ 
 model: {type: String,required: [true, 'Name of the motorcycle cannot be empty']}, 
 cylindercapacity: {type: Number,required: [true, 'cylindercapacity cannot be empty']}, 
 colour: {type: String,required: [true, 'colour of the motorcycle cannot be empty']} 
}) 
 
module.exports = mongoose.model("motorcycle", 
motorcycleSchema)