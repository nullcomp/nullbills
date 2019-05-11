const fetch = require('node-fetch');

const newUser = async (req,res) => {
  //console.log(req.body)
  await fetch('http://127.0.0.1:8080/User', {
    method:'POST',
    body: req.body
  } )
  .then(function(result){
    console.log(result);
    res.send(result);

  })
  .catch(function(err){
    res.send(err)
  })
};

module.exports = {
  newUser
}