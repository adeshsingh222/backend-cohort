const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// -----------------------token generate----------------------------------
const tokenCreated = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "plutonium",
          organisation: "FunctionUp",
        },
        "functionup-plutonium-very-very-secret-key"
    )
      res.setHeader(token, "x-auth-token");
      res.send({ status: true, token: token });
    };

// const loginUser = async function (req, res, next) {
//   let userName = req.body.emailId;
//   let password = req.body.password;

//   let user = await userModel.findOne({ emailId: userName, password: password });
//   if (!user){
//     return res.send({
//       status: false,
//       msg: "username or the password is not corerct",
//     });
//   }else{
//     next();
//   }
// }



// ----------------------------------token verify----------------------

const tokenVerify = async function (req, res, next) {
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
      
        //If no token is present in the request header return error. This means the user is not logged in.
        if (!token) return res.send({ status: false, msg: "token must be present" });
      
        // console.log(token);

        let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
    }else{
      next();
    }
}

module.exports. tokenCreated = tokenCreated;
module.exports.tokenVerify = tokenVerify;