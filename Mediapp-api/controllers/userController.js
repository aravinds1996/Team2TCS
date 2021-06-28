const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')
let User = mongoose.model('User', userModel.schema, 'Users')

exports.register = (req,res)=>{
    let newUser = new User(req.body)
    newUser.hash_password = bcrypt.hashSync(req.body.password,10)
    newUser.save((err, user)=>{
        if(err)throw err
        else{
            user.hash_password = undefined
            return res.json(user)
        }
    })
}

exports.sign_in = (req,res)=>{
    User.findOne({
        username: req.body.username
    }, (err, user)=>{
        if (err) throw err;
        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ token: jwt.sign({ username: user.username, _id: user._id }, 'Success') });
    })
}