const User = require("../models/userAuth");
const jwt = require('jsonwebtoken');

const createToken = id =>{
  const error = {
    email: "", password: ""
  }
  return jwt.sign({id}, process.env.SECRET, {expiresIn : "3d"});
}

module.exports.signup = async( req, res ) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({email, token})
    
  } catch (error) {
    res.status(400).json({error : error.message});
    console.log(error.message)
  }
}

module.exports.login = async(req, res) =>{
  const {email, password} = req.body; 

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    
    res.status(200).json({email, token})
    
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}