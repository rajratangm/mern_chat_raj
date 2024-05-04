const asyncHandler = require('express-async-handler')
const User = require('../')
const registerUser= asyncHandler(async ()=>{
    const {name,email, password, pic}= req.body
})