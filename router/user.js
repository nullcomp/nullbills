const userRouter = require('express').Router();
const path = require('path');

userRouter.get('/', async(req,res) => {
		const pastpath = path.resolve( path.join(__dirname) + '/../public/cadastro.html');
		console.log("Requisicao para página cadastro de usuário\nIP:"+ req.ip + " HOST:"+req.hostname+"\n");
		res.sendFile(pastpath)
})

module.exports = userRouter;