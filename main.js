const express = require('express');
const port = 3000;
const app = express();

const userRouter = require('./router/user.js');
// links que comecem com /user serão roteados userRouter
app.use('/user', userRouter);

app.listen(port, ()=>{
	console.log("Server running on..."+port+"\n");
	}
)