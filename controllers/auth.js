const bcrypt = require("bcrypt");
const User = require("../model/User");

//signup route handler

exports.signup = async (req, res) => {
  try {
    //get data
    const { name, email, password, role } = req.body;
    //check if user already exist or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "user already Exists",
      });
    }

    //secure Password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "error while hashing password",
      });
    }

    //create entry for user

    const newuser = User.create({ name,email, password:hashedPassword,role });
    return res.status(200).json({
      success: true,
      message: "newuser successfully created",
    });

  } 
  
  catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User can't be registered, please try after sometime",
    });
  }
};



// exports.login = ()=>{
//   try{

//   }

//   catch(error){
    
//   }
// }