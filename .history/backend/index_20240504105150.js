const express =  require('express')
const {chats}

const app = express()

app.get('/',(req,res)=>{
    res.send('API is Runnig')
})

app.get('/api/chat', (req,res)=>{
    res.send(chats)
})

app.listen(5000, console.log('server started terteon port 5000'))