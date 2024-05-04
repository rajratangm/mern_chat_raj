const express =  require('express')
const {chats}= require('./data/data')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT ||5000
const app = express()
dotenv.config()

app.get('/',(req,res)=>{
    res.send('API is Runnig')
})

app.get('/api/chats', (req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
    const singleChat = chats.find((c)=> c._id === req.params.id)
    res.send(singleChat)
// console.log(req.params)
})

app.listen(5000, console.log('server started terteon port 5000'))