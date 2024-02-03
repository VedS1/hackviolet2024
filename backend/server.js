const express = require("express");
const mongoose = require ("mongoose");
const cors = require('cors');
const app = express();


const UserModel = require("./models/User");

const { response } = require("express");

app.use(express.json());
app.use(cors());


app.post("/login", async (req, res) =>{  //check if an account exists
    const email = req.body.email;
    const password = req.body.password;
    UserModel.find({email: email, password: password}, (err, result)=>{
        if(err){
            res.send(err);
        }
        if(result){
            res.send(result);}
        else{
            res.send("Wrong information")
        }
    })
})


app.post ('/signup', async(req, res) =>{
    const user = req.body.user;
    console.log(user)
    const user2 = new UserModel({username: user.username, password: user.password, email: user.email})
    console.log(user2)
    await user2.save();
    res.send("registered user");
})

app.listen(3001, ()=> {
    //  console.log('Server up and running on 3001');
});
