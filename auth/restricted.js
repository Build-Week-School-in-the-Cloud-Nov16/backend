const jwt = require("jsonwebtoken");
const {jwtSecret} = require("./secret.js");



module.exports = (req, res, next) => {

  const token = req.headers.authorization;
 
  if(!token){
 return res.status(401).json({ you: 'shall not pass!' });
  

  }
  jwt.verify(token,jwtSecret,(err,decoded)=> {
    if(err){
      console.log('decoded error ->', err);
      return res.status(401).json({message:'token bad'});
    }
    console.log("decoded token -> ", decoded);
    req.decodedJwt = decoded;
    next();
  });
};
