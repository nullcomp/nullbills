const jwt = require('jsonwebtoken');
const restify = require('restify-clients');
const apiJavaDatabase = restify.createJsonClient({
  url:'http://127.0.0.1:8080'
})


const includeNewMoviment = (req, res) => {
	console.log("To incluve new buill!")
};

module.exports = {
	includeNewMoviment
}