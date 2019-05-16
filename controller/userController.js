const fetch = require('node-fetch');

const restify = require('restify-clients');
const apiJavaDatabase = restify.createJsonClient({
  url:'http://127.0.0.1:8080'
})

const newUser = (req,res) => {
  //console.log(req.body.data+"\nheader"+req.headers);
  //req.headers = { "Content-Type": "application/json" };
  //await fetch('http://127.0.0.1:8080/User', {
  apiJavaDatabase.post('/User', req.body, (err,req,res,ret) => {
    console.log("Erro:"+err);
    console.log("req:"+req);
    console.log("res:"+res);
    console.log("retorno:"+ret);
});
};

module.exports = {
  newUser
}