const express =require('express')

//adding jwt
const jwt = require('jsonwebtoken')
const router = express.Router()
// import user schema 
const User = require('../models/user')
const mongoose = require('mongoose')
const db ="mongodb://userkesav:userkesav1@ds119663.mlab.com:19663/eventsdb"

mongoose.connect(db, err=>{
    if(err){
        console.log('Error !' + err)
    }
    else{
        console.log('connected to mongoDB')
    }
})

//verify token 
function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload =jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    res.UserId = payload.subject
    next()
}


router.get('/',(req,res)=>{
    res.send('From API route')
})

router.post('/register',(req,res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        }else{
            //jwt 
            let payload={subject:registeredUser._id}
            let token =jwt.sign(payload,'secretKey')

            //before adding jwt
           // res.status(200).send(registeredUser)

            //after add jwt
           res.status(200).send({token})
        }
    })
})

//get all users
router.get('/users',(req,res)=>{
   User.find(function (err,result){
       if(err){
           console.log('no data')

       }
       else{
        res.send(result)
          
       }
   })
})

//get a user
router.get('/users/:id',function(req,res){
  console.log('api works');
        User.findById(req.params.id)
        .exec(function(err,getuser){
        if(err){
            console.log("Error in get data ");
        }else{
            res.send(getuser)
        }
 
    });
 });

 //delete user
 router.delete('users/:id',function(req,res){
     console.log('delete user');
     User.findByIdAndRemove(req.params.id,function(errors,deleteuser){
         if(errors){
             res.send("Error deleting");

         }else{
             res.json(deleteuser)
         }
     })
 })

router.post('/login',(req,res)=>{
    let userData = req.body

    User.findOne({email: userData.email},(error,user)=>{
        if(error){
            console.log(error)

        }else{
            if(!user){
                res.status(401).send('Invalid email')
               
            }else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid Password')
                }else{
                //add jwt
                let payload={subject:user._id}
                let token =jwt.sign(payload,'secretKey')

                    //before add jwt
                    //res.status(200).send(user)

                    //after add jwt
                    res.status(200).send({token})
                }
            }
        }
    })
})

router.get('/events',(req,res)=>{
    let events =[
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          }
    ]

    res.json(events)
})

//verfify token verifies the token
router.get('/special',verifyToken,(req,res)=>{
    let events =[
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          }
    ]

    res.json(events)
})
module.exports = router