import React, { useEffect,useState } from 'react'
import axios from 'axios'
export const ChatPage = () => {
    const [chats, setChats]= useState([])
    const fetchChats= async()=>{
        const data = await axios.get('/api/chats')
        setChats(data)
    }
    useEffect(()=>{
        fetchChats()
    },[])
  return (
    <div>{
        chats.map(chat=>
            (return <div> chat.chatName</div>)
        })
        
        }</div>
  )
}
