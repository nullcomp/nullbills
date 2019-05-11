const userRouter = require('express').Router();
const path = require('path');
const controller = require('../controller/userController.js')


userRouter.get('/', async(req,res) => {
    const pastpath = path.resolve( path.join(__dirname) + '/../public/cadastro.html');
    res.sendFile(pastpath)
})

userRouter.post('/newUserValidation', controller.newUser);

module.exports = userRouter;