const userRouter = require('express').Router();
const path = require('path');
const controller = require('../controller/userController.js')


userRouter.get('/', async(req,res) => {
    const pastpath = path.resolve( path.join(__dirname) + '/../public/cadastro.html');
    res.sendFile(pastpath)
})

// parte interna do sistema
userRouter.get('/userhome', async(req,res) => {
  
  const pastpath = path.resolve( path.join(__dirname) + '/../public/system.html');
  res.sendFile(pastpath);
});

// função de registro de usuário
userRouter.post('/newUserValidation', controller.newUser); 

// função de log in do usuário
userRouter.post('/ActionLogin', controller.logIn);


module.exports = userRouter;