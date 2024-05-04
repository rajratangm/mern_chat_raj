const express =  require('express')
const {chats}= require('./data/data')

const app = express()

app.get('/',(req,res)=>{
    res.send('API is Runnig')
})

app.get('/api/chat', (req,res)=>{
    res.send(chats)
})

app.get()

app.listen(5000, console.log('server started terteon port 5000'))