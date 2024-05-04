const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            use
        })
    }
    catch(error){
        console.log(error)
    }
}