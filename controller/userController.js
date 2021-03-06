const jwt = require('jsonwebtoken');
const restify = require('restify-clients');
const tolkenService = require('../tokenService/tokenAccess.js');
const apiJavaDatabase = restify.createJsonClient({
  url:'http://127.0.0.1:8080'
})

const newUser = (req,res) => {
  console.log(req.body);
  apiJavaDatabase.post('/User', req.body, (err,req,res2,ret) => {
    if (err) console.log("Um erro ocorreu:\n"+err);
    if (ret){
      console.log("Retorno do Web Service Java:\n"+JSON.stringify(ret));
      res.send().status(200);
    } 
  });
};

const logIn = (req,res) => {
  console.log(JSON.stringify(req.body));
  
  
  apiJavaDatabase.post('/findUser',req.body ,(err,req2,res2,ret) => {
    if (err){
      console.log("Um erro ocorreu:\n"+err);
      res.send().status(404);
    } 
    if (ret){
      console.log("Retorno do Web Service Java:\n"+JSON.stringify(ret));
      if (ret == 404) res.sendStatus(404);
      else{
        let tokenAccess = tolkenService.generateTolken(ret);
          res.json({'x-access-token': tokenAccess});
      }
    } 
  });
};

const userHome = (req,res) => {
  console.log("User home acessada");
  return true;
};

module.exports = {
  newUser,
  logIn
}