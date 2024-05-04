const express =  require('express')
const {chats}= require('./data/data')

const app = express()

app.get('/',(req,res)=>{
    res.send('API is Runnig')
})

app.get('/api/chat', (req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
    const singleChat = chats.find((c)=> c._id ==)
console.log(req.params)
})

app.listen(5000, console.log('server started terteon port 5000'))