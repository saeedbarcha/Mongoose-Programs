// saeed barcha 30/7/21

//  code2=> read data
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


// const createDocuments = async ()=>{
//     try{
      
//             const saeed= new myStudent({
//                 name:"saeed",
//                 sId:001,
//                 Fname:"I Khan",
//                 active:true
//             });
          
//             const noor= new myStudent({
//                 name:"noor",
//                 sId:002,
//                 Fname:"ali noor",
//                 active:false
//             });
//             const waheed= new myStudent({
//                 name:"waheed",
//                 sId:003,
//                 Fname:"badakshah",
//                 active:true
//             });
//             const karam= new myStudent({
//                 name:"karam ali",
//                 sId:003,
//                 Fname:"saif ali",
//                 active:false
//             });

//        //****   calling reg docSaeed function
//         const result =await myStudent.insertMany([saeed,noor,waheed,karam]);
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
//    }

// createDocuments();

//*****  to show all the documents present in collection myStudent
        // const getDocuments = async ()=>{
        //     try{
        //         const result =await myStudent.find();
        //             console.log(result);
        //     }catch(err){
        //         console.log(err);
        //     }
        // }
        //      getDocuments();

//*****  to show all the documents name= "saeed" present in collection myStudent
        // const getDocuments = async ()=>{
        //     try{
        //         const result =await myStudent.find({name:"saeed"});
        //             console.log(result);
        //     }catch(err){
        //         console.log(err);
        //     }
        // }
        // getDocuments();

//*****  to show all the document which contains name= "saeed" value present in collection myStudent and only show (Name and Id) fields
        // const getDocuments = async ()=>{
        //     try{
        //         const result =await myStudent.find({name:"saeed"},{ name:1} );
        //             console.log(result);
        //     }catch(err){
        //         console.log(err);
        //     }
        // }
        // getDocuments();

//*****  to show all the document which contains name= "saeed" and sId=1 value present in collection myStudent and only show (Name and Id) fields
        // const getDocuments = async ()=>{
        //     try{
        //         const result =await myStudent.find({name:"saeed" , sId:1},{ name:1} );
        //             console.log(result);
        //     }catch(err){
        //         console.log(err);
        //     }
        // }
        // getDocuments();

//***** using select() method
// to show all the document which contains active=true value present in collection myStudent and only show (Name ,active and __id) fields
        // const getDocuments = async ()=>{
        //     try{
        //         const result =await myStudent.find({active:true} ).select( { name:1 , active:1 })
        //             console.log(result);
        //     }catch(err){
        //         console.log(err);
        //     }
        // }
        // getDocuments();

//*****  using select() and limit method (show only single data present at first instance)
// to show all the document which contains active=true value present in collection myStudent and only show (Name ,active and __id) fields
        // const getDocuments = async ()=>{
        //     try{
        //         const result =await myStudent.find({active:true} ).select( { name:1 , active:1 }).limit(1)
        //             console.log(result);
        //     }catch(err){
        //         console.log(err);
        //     }
        // }
        // getDocuments();

        //*****  using select(),limit() and skip()  method (show single data aftre skiping first data)
// to show all the document which contains active=true value present in collection myStudent and only show (Name ,active and __id) fields
        const getDocuments = async ()=>{
            try{
                const result =await myStudent.find({active:true} ).select( { name:1 , active:1 }).limit(1).skip(1)
                    console.log(result);
            }catch(err){
                console.log(err);
            }
        }
        getDocuments();