// saeed barcha 14/7/21

//  code2=> inserting multiple data
//  creating connection withdatabase / inserting multiple documents 
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
const myStudent = new mongoose.model("myStudent", studentschema);

// inserting data into document / collection


const createDocuments = async ()=>{
    try{
      
            const saeed= new myStudent({
                name:"saeed",
                sId:001,
                Fname:"I Khan",
                active:true
            });
          
            const noor= new myStudent({
                name:"noor",
                sId:002,
                Fname:"ali noor",
                active:false
            });
            const waheed= new myStudent({
                name:"waheed",
                sId:003,
                Fname:"badakshah",
                active:true
            });
            const karam= new myStudent({
                name:"karam ali",
                sId:003,
                Fname:"saif ali",
                active:false
            });

        const result =await myStudent.insertMany([saeed,noor,waheed,karam]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
   }

createDocuments();