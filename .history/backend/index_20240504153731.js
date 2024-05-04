const express =  require('express')
const {chats}= require('./data/data')
const dotenv = require('dotenv')



dotenv.config()
const PORT = process.env.PORT ||5000
const app = express()

dotenv.config()
const connectDB = require('./config/db')
connectDB()
const userRoutes =require('./routes/userRoute') 

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('API is Runnig')
})

app.use('/api/user', userRoutes)

app.listen(5000, console.log('server started terteon port 5000'))