const mongoose= require("mongoose")
//SCHEMA 
const sch={
    name:String,
    email:String,
    id:Number
}

const monmodel=mongoose.model("students",sch)
module.exports=monmodel