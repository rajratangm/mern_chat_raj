const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const conn= await mongoose.connect(process.env.M)
    }
    catch(error){
        console.log(error)
    }
}