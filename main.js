const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const userRouter = require('./router/user.js');
const movimentRounter = require('./router/moviment.js')
const app = express();
const port = 3000;


// setup app
app.use( express.static ( path.resolve(path.join(__dirname) + '/public/')  ) ); 
app.use( bodyParser.json() );
app.use( logger('dev'));




// links que comecem com /user serão roteados userRouter
app.use('/user', userRouter);
//.use('/moviment', movimentRounter);
app.listen(port, ()=>{
	console.log("Server running on..."+port+"\n");
	}
)