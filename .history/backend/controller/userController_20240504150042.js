const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const registerUser= asyncHandler(async ()=>{
    const {name,email, password, pic}= req.body;

    if(!body||!email||!password){
        res.status(400);
        throw new Error('Please Enter all the Fields')
    }
    const userExists = await User.findOne({email})
})