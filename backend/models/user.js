const { listenerCount } = require("events");
const mongoose = require ("mongoose");
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
});

// eslint-disable-next-line no-undef
userDb = mongoose.createConnection("mongodb+srv://vedsoolgiri:OnlyLetters@cluster0.8nnfpb9.mongodb.net/?retryWrites=true&w=majority");

// eslint-disable-next-line no-undef
const User = userDb.model("User", UserSchema);
module.exports = User;
