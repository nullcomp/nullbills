const jwt = require('jsonwebtoken');
const secretKey = "secretKey";

const generateTolken = (user) => {
  return jwt.sign(
    {user : user},
    secretKey,
    { expiresIn: 84600}
  );
};

module.exports = {
  generateTolken
}