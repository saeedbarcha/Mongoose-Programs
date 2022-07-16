// saeed barcha 14/7/21

//code1=>
// creating connecting withdatabase
const mongoose = require("mongoose");

// creating connection with mongodb
mongoose.connect("mongodb://localhost:27017/college" , {  useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{
    console.log("connected successfully... port 27017")
}).catch((error)=>{
    console.log(error)
    console.log("erroe...........")
});