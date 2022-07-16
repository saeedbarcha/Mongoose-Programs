// saeed barcha 14/7/21

//  code3=> inserting single data
//  creating connection withdatabase / inserting single data
const mongoose = require("mongoose");

// creating connection with mongodb
mongoose.connect("mongodb://localhost:27017/school" , {  useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{
    console.log("connected successfully... port 27017");
}).catch((error)=>{
    console.log(error);  
    console.log("error ...........");
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

// inserting data / create document  into collection

// ***** simple method
// const docSaeed = new Student({
//     name:"saeed",
//     sId:001,
//     Fname:"I Khan",
//     active:true
// });

// docSaeed.save();

//****
const createDocument = async ()=>{
     try{
        const docSaeed= new Student({
            name:"saeed",
            sId:001,
            Fname:"I Khan",
            active:true
        }); 
        //****   calling reg docSaeed function
         const result =await docSaeed.save();
         console.log(result);
     }catch(err){
         console.log(err);
     }
    }

createDocument();