const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const registerUser= asyncHandler(async ()=>{
    const {name,email, password, pic}= req.body;

    if(!body)
})