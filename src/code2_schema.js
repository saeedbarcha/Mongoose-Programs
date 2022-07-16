// saeed barcha 14/7/21

//  code2=> schema
//  creating connecting withdatabase
const mongoose = require("mongoose");

// creating connection with mongodb
mongoose.connect("mongodb://localhost:27017/college" , {  useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{
    console.log("connected successfully... port 27017")
}).catch((error)=>{
    console.log(error);  
    console.log("erroe...........");
});

// schema
// a mongoose schena defines the structure of the document , default values , validators , etc,

const studentschema = new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sId:{
        type:Number,
        required:true
    },
    Fname:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

// A mongoose model is a wrapper on the mongoose schema.
// A mongoose schema defines the structure of the document,default values,validators ,etc.
// where a mongoose model provides an interface to the database for creating , querying updating ,deleting records ,etc.

// creating document
const Student = new mongoose.model("Student", studentschema);

// inserting data into document / collection