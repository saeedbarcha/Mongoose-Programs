// saeed barcha 5/8/21

//  code7=> comprision operaters
//  creating connection withdatabase / inserting multiple documents
const mongoose = require("mongoose");

// creating connection with mongodb
mongoose
  .connect("mongodb://localhost:27017/company", {
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

// inserting data into document / collection (employee)
const createDocuments = async () => {
  try {
    const noor = new employee({
      name: "noor ali",
      empId: 01,
      empFname: "khalid khan",
      active: true,
      salary: 2000
    });

    const kalim = new employee({
      name: "kalim",
      empId: 02,
      empFname: "kamil jan",
      active: true,
      salary: 25000
    });
    const waheed = new employee({
      name: "waheed",
      empId: 03,
      empFname: "karim khan",
      active: true,
      salary: 15000
    });
    const karam = new employee({
      name: "karam",
      empId: 04,
      empFname: "karam ali",
      active: false,
      salary: 8000
    });
    const ram = new employee({
      name: "Ram",
      empId: 05,
      empFname: "shri ram",
      active: true,
      salary: 18000
    });
    const tasneem = new employee({
      name: "Tasneem",
      empId: 06,
      empFname: "karan jan",
      active: false,
      salary: 8000
    });
    const eshal = new employee({
      name: "Eshal farman",
      empId: 07,
      empFname: "farman ali",
      active: true,
      salary: 3000
    });
    const kulsoom = new employee({
      name: "Kulsoom Ali",
      empId: 08,
      empFname: "ali kamal",
      active: true,
      salary: 35000
    });
    const nasreen = new employee({
      name: "Nasreen Akhtar",
      empId: 09,
      empFname: "karam ali",
      active: true,
      salary: 8000
    });
    const asif = new employee({
      name: "Asif Aman",
      empId: 10,
      empFname: "aman karim",
      active: false,
      salary: 48000
    });
    const kainat = new employee({
      name: "kainnat azim",
      empId: 11,
      empFname: "azim nisar",
      active: true,
      salary: 1000
    });
    const alisha = new employee({
      name: "Alisha",
      empId: 12,
      empFname: "naseer",
      active: false,
      salary: 33000
    });
    const karima = new employee({
      name: "karima",
      empId: 13,
      empFname: "karim khan",
      active: true,
      salary: 36000
    });
    const naveed = new employee({
      name: "naveed",
      empId: 14,
      empFname: "irfan khan",
      active: true,
      salary: 50000
    });
    const hafeeza = new employee({
      name: "hafeeza",
      empId: 004,
      empFname: "barkat baig",
      active: false,
      salary: 410000
    });

    const result = await employee.insertMany([
      noor,
      kalim,
      waheed,
      karam,
      ram,
      tasneem,
      eshal,
      kulsoom,
      nasreen,
      asif,
      kainat,
      alisha,
      karima,
      naveed,
      hafeeza
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createDocuments();

// logical operaters in mongooose

// $and => Joins guery clauses with a logical AND returns all the documents that match the conditions of the clauses.
// $not => Inverts the effect of a query expression and returns documents that do not match the query expression.
// $nor =>joins query clause with a logical NOR returns all the documents that fail to match both clauses.
// $or => Joins query clause with a logical OR returns all the documents that match the condition of either clause.

/////////****    $and    ******

        // const getDocuments = async () => {
        //   try {
        //     const result = await employee.find({$and:[{name:"naveed"},{empId:14}] })
        //     console.log(result);
        //   } catch (err) {
        //     console.log(err);
        //   }
        // };
        // getDocuments();

        
/////////****    $or    ******
    // for multiple conditions (conditions = 2)
        // const getDocuments = async () => {
        //     try {
        //     const result = await employee.find({$or:[{name:"naseem"},{empId:14}] })
        //     console.log(result);
        //     } catch (err) {
        //     console.log(err);
        //     }
        // };
        // getDocuments();

 // for multiple conditions (conditions = 3)
        // const getDocuments = async () => {
        //     try {
        //     const result = await employee.find({$or:[{name:"naseem"},{empId:1000},{empFname:"irfan khan"}] })
        //     console.log(result);
        //     } catch (err) {
        //     console.log(err);
        //     }
        // };
        // getDocuments();

 /////////****    $not   ******

        const getDocuments = async () => {
            try {
            const result = await employee.find( { salary: { $not: { $gt: 15000 } } } )
            console.log(result);
            } catch (err) {
            console.log(err);
            }
        };
        getDocuments();

        

     