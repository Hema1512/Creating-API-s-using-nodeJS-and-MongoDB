const mongoose= require("mongoose")
// DB CONNECT
mongoose.connect("mongodb://localhost:27017/EDUCATION",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>
{
    if(!err)
    {
        console.log("connected")
    }
    else{
        console.log("error");
    }
})