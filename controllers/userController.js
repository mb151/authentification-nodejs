const mongoose = require('mongoose');
const User = require('../models/User')
const sha256 = require('js-sha256');
const jwt = require('jwt-then');

exports.register = async (req, res) => {
    const {name, email, password} = req.body;
    //the email must be in the specify domain name you can change it.
    const emailRegex = /@gmail.com|@hotmail.com|@live.com|@yahoo.com/;
    if(!emailRegex.test(email)) throw "Email is not supported from your domain.";
    if(password.length < 6) throw "Password must be atleast 6 characters long.";

    const userExists = await User.findOne({
        email,
    });

    if(userExists) throw "User with same email already exists."

    const user = new User({name, email, password: sha256(password + process.env.SALT)});

    await user.save();

    res.json({
        message: "User [" + name + "] registered successfully !"
    })
}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({
        email,
        password: sha256(password + process.env.SALT),
    });

    if(!user) throw "Email and Password did not match.";
    
    const token = await jwt.sign({id: user.id}, process.env.SECRET);

    res.json({
        message: "User logged in Successfully",
        token,
    });
};