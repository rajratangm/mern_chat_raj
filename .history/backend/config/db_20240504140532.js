const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const conn= await mongoose.connect(process.env.Mo)
    }
    catch(error){
        console.log(error)
    }
}