// saeed barcha 14/7/21

//  code6=> comprision operaters
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
// comparison operaters in mongooose

// $eq => Matches values that are equal to spacified value.
// $gt => Matches values that are greater then spacified value.
// $gte => Matches values that are greater then or equal to spacified value.
// $in => Matches any of the values specified in array.
// $lt => Matches values that are less then spacified value.
// $lte => Matches values that are less then or equal to spacified value.
// $ne => Matches all the values that are not equal to specified value.
// $nin => Matches none of the values specified in array.

/////////****    $eq    ******

        // const getDocuments = async () => {
        //   try {
        //     const result = await employee.find({empId:04  }).limit(1);
        //     console.log(result);
        //   } catch (err) {
        //     console.log(err);
        //   }
        // };
        // getDocuments();

 ////////////    both are same   ///////////
        // const getDocuments = async () => {
        //     try {
        //       const result = await employee.find({ empId: {$eq:04 }}).limit(1);
        //       console.log(result);
        //     } catch (err) {
        //       console.log(err);
        //     }
        //   };
        //   getDocuments();
        
   
/////////****    $gt    ******
        // const getDocuments = async () => {
        //     try {
        //         const result = await employee.find({ empId: {$gt:04 }}).limit(3);
        //         console.log(result);
        //     } catch (err) {
        //         console.log(err);
        //     }
        //     };
        //     getDocuments();
  
/////////****    $ne    ******
        // const getDocuments = async () => {
        //     try {
        //         const result = await employee.find()
        //         console.log(result);
        //     } catch (err) {
        //         console.log(err);
        //     }
        //     };
        //     getDocuments();

/////////****    $gte    ******
        // const getDocuments = async () => {
        //     try {
        //     const result = await employee.find({ empId: {$gte:04 }}).limit(3);
        //     console.log(result);
        //     } catch (err) {
        //     console.log(err);
        //     }
        // };
        // getDocuments();

          
/////////****    $lt    ******
        // const getDocuments = async () => {
        //     try {
        //     const result = await employee.find({ empId: {$lt:04 }}).limit(3);
        //     console.log(result);
        //     } catch (err) {
        //     console.log(err);
        //     }
        // };
        // getDocuments();

/////////****    $lte    ******
        // const getDocuments = async () => {
        //     try {
        //     const result = await employee.find({ empId: {$lte:04 }});
        //     console.log(result);
        //     } catch (err) {
        //     console.log(err);
        //     }
        // };
        // getDocuments();

/////////****    $in    ******
        // const getDocuments = async () => {
        //     try {
        //     const result = await employee.find({ name : { $in : ["hafeeza","kalim","naveed"]}});
        //     console.log(result);
        //     } catch (err) {
        //     console.log(err);
        //     }
        // };
        // getDocuments();
/////////****    $nin    ******
        const getDocuments = async () => {
            try {
            const result = await employee.find({ name : { $nin : ["hafeeza","kalim","naveed"]}});
            console.log(result);
            } catch (err) {
            console.log(err);
            }
        };
        getDocuments();
