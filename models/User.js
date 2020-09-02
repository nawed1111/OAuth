const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    name: String, 
    oauthID: String
});

mongoose.model('users', userSchema);