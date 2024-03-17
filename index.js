//1.import json-server
const jsonServer = require('json-server');

//2create a server application using json-server
const docServer = jsonServer.create()

//3.setup path for db.json
const router = jsonServer.router('db.json')

//4.return middleware
const middleware = jsonServer.defaults()

//5.setup port number
const port=3001

//6.use in docServer
docServer.use(middleware)
docServer.use(router)

//7.to run the server
docServer.listen(port,()=>{
    console.log("Book MyDoc listening on the port" + port);
})