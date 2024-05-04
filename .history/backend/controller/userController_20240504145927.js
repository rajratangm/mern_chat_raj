const asyncHandler = require('express-async-handler')
const User = require('../models/')
const registerUser= asyncHandler(async ()=>{
    const {name,email, password, pic}= req.body
})