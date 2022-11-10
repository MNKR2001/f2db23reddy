const mongoose = require("mongoose") 
const motorcycleSchema = mongoose.Schema({ 
 model: String, 
 cylindercapacity: Number, 
 colour: String 
}) 
 
module.exports = mongoose.model("motorcycle", 
motorcycleSchema)