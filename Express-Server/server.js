//express package 
const express = require('express')
//middleware package 
const bodyParser =require('body-parser')
//import cors for Cross origin access
 const cors=require('cors')

//define port of server 
const PORT = 3200

// tell server to use route
const api = require('../Express-Server/routes/api')

//instance of express 
const app = express()

//CORS by kirupa 
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,application/json, Accept,x-access-token");
    next();
    });

//use cors
 app.use(cors())
//handle json data 
app.use(bodyParser.json())
//use route 
app.use('/api',api)
//to test get request
app.get('/',function(req,res){
    res.send('Hello from the server ')
})
//req on specify port 
app.listen(PORT, function(){
    console.log("The express server is running on port : " + PORT)
})
