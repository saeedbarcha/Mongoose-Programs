// saeed barcha 5/8/21

//  code8=> counting and sorting querise in mongoose
//  creating connection withdatabase / inserting multiple documents
const mongoose = require("mongoose");

// creating connection with mongodb
mongoose.connect("mongodb://localhost:27017/company", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected successfully... port 27017");
  })
  .catch(error => {
    console.log(error);
    console.log("error ...........");
  });

// schema
// a mongoose schena defines the structure of the document , default values , validators , etc,

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  empId: {
    type: Number,
    required: true
  },
  empFname: String,
  active: Boolean,
  salary: Number
});

// creating document
const employee = new mongoose.model("employee", empSchema);

//counting guery .count()


/////////****    .count()   ******//////////

    //   const getDocuments = async () => {
    //         try {
    //             const result = await employee.find({ empId: {$gt:04 }}).countDocuments()
    //             console.log(result);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //         };
    //         getDocuments();

            
    //   const getDocuments = async () => {
    //     try {
    //         const result = await employee.find({ empId: {$gt:04 }}).skip(3).countDocuments()
    //         console.log(result);
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     };
    //     getDocuments();

        
/////////****    .sorting()   ******//////////
    // 1=> is for asending
    // -1=> is for decending
    // capital latters have greater priverity then small latters 
// this will sort the documents on the basis of id field in asending order

    //   const getDocuments = async () => {
    //     try {
    //         const result = await employee.find({ empId: {$gt:04 }}).select({name:1}).sort()
    //         console.log(result);
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     };
    //     getDocuments();


/////////****    .sorting({name:1})  for assending order for fields containg string value ******//////////

        // const getDocuments = async () => {
        //     try {
        //         const result = await employee.find({ empId: {$gt:04 }}).select({name:1 ,_id:0}).sort({name:1})
        //         console.log(result);
        //     } catch (err) {
        //         console.log(err);
        //     }
        //     };
        //     getDocuments();
 

/////////****    .sorting({name:-})  for desending order for fields containg string value  ******//////////


        // const getDocuments = async () => {
        //     try {
        //         const result = await employee.find({ empId: {$gt:04 }}).select({name:1 ,_id:0}).sort({name:-1})
        //         console.log(result);
        //     } catch (err) {
        //         console.log(err);
        //     }
        //     };
        //     getDocuments();


/////////****    .sorting({name:1})  for assending order for fields containg numeric value ******//////////

        // const getDocuments = async () => {
        //     try {
        //         const result = await employee.find({ empId: {$gte:04 }}).select({name:1,salary:1 ,_id:0}).sort({salary:1})
        //         console.log(result);
        //     } catch (err) {
        //         console.log(err);
        //     }
        //     };
        //     getDocuments();
 

/////////****    .sorting({name:-})  for desending order for fields containg numeric value  ******//////////

           const getDocuments = async () => {
            try {
                const result = await employee.find({ empId: {$gte:04 }}).select({name:1,salary:1 ,_id:0}).sort({salary:-1})
                console.log(result);
            } catch (err) {
                console.log(err);
            }
            };
            getDocuments();