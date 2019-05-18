const fetch = require('node-fetch');

const restify = require('restify-clients');
const apiJavaDatabase = restify.createJsonClient({
  url:'http://127.0.0.1:8080'
})

const newUser = (req,res) => {
  apiJavaDatabase.post('/User', req.body, (err,req,res2,ret) => {
    if (err) console.log("Um erro ocorreu:\n"+err);
    if (ret){
      console.log("Retorno do Web Service Java:\n"+JSON.stringify(ret));
      res.send().status(200);
    } 
  });
};

const logIn = (req,res)=>{
 // console.log("Params:" +JSON.stringify(req.body));
  apiJavaDatabase.post('/findUser', req.body, (err, req, res2, ret) => {
    if (err) console.log("Um erro ocorreu:\n"+err);
    if (ret){
      console.log("Retorno do Web Service Java:\n"+JSON.stringify(ret)) 
      res.send().status(200);
    } 
  });
};

module.exports = {
  newUser,
  logIn
}