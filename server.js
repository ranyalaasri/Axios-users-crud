const express = require('express');
const server = express();
const port = process.env.PORT || 3500;

const usersRouter = require('./Routes/users')

server.use(express.json())


server.use('/users',usersRouter)








server.listen(port,()=>{
    console.log('listening on port '+port)
})

