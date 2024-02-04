const express = require("express");
const mongoose = require ("mongoose");
const cors = require('cors');
const app = express();


const UserModel = require("./models/User");
const CourseSchema = require("./models/User");

const { response } = require("express");

app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
    console.log(password)
        try {
        const result = await UserModel.find({ email: email, password: password }).exec();
        if (result && result.length > 0) {
            console.log("worked" +  result)
            res.send(result);
        } else {
            res.send({email: "EXIT_CODE", password: "EXIT_CODE"})
            console.log("failed resuilt")
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


app.post ('/signup', async(req, res) =>{
    const user = req.body.user;
    console.log(user)
    const user2 = new UserModel({username: user.username, password: user.password, email: user.email})
    console.log(user2)
    await user2.save();
    res.send("registered user");
})

app.post ('/addCourse', async(req, res) =>{
    const user = req.body.user;
    console.log(user)
    const user2 = new CourseSchema({name: user.name, description: user.description})
    console.log(user2)
    await user2.save();
    res.send("registered user");
})





app.listen(3001, ()=> {
    //  console.log('Server up and running on 3001'd);
});
