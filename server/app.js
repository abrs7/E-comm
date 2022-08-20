const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieparser = require ('cookie-parser');

const app = express();
dotenv.config({path: './db/config.env'});

//Configure ENV file & require connection 
require("./db/conn.js");
const port = process.env.PORT;
//Require Model
const Users = require('./models/userSchema');
const cookieParser = require('cookie-parser');

//These Method is Used to get data and cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Hello Custmers");
})
//Registration
app.post('/register',async(req, res)=>{
try{
    //Get Body or Data
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const createUser = new Users({
        username : username,
        email : email,
        password : password
    });
    //save Method  is used to create user or insert user
    //but before saving or inserting password will hash
    // because of hashing
    
    const created = await createUser.save();
    console.log(created);
    
    res.status(200).send("Registered");

}catch(error){
    res.status(400).send(error);
}

})

//LOGIN USER
app.post('/login',async(req, res)=>{
    try{
        //Get Body or Data
        const email = req.body.email;
        const password = req.body.password;
    //find User if exist
        const user = await Users.findOne({email : email});
     if(user){
        const isMatch = await bcryptjs.compare(password, user.password);

        if(isMatch){
            //Generate Token which is Define in User Schema
            const token = await user.generateToken();
            res.cookie("jwt", token, {
                //expires Token in 24 Hours
                expires : new Data(Data.now() +8640000),
                httpOnly : true
            })
            res.status(200).send("LoggedIn")
        }else{
           res.status(400).send("Invalid Credentials"); 
        }
        }else{
            res.status(400).send("Invalid Credentials"); 
         }
    }catch(error){
     res.status(400).send(error)
    }

})

// running server 
app.listen(port,()=>{
    console.log("Server is listening ");
})
