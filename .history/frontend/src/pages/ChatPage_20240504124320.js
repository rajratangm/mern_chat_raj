import React, { useEffect,useState } from 'react'
import axios from 'axios'
export const ChatPage = () => {
    const [chats, setChats]= useState([])
    const fetchChats= async()=>{
        const data = await axios.get('/api/chats')
        setChats(data)
        console.log(chats)
    }
    useEffect(()=>{
        fetchChats()
        console.log(chats.data.map((chat)=>(1)))
    },[])
  return (
    <div> 
        
      { chats.data.map((chat)=> (<div></div>chat.chatName))}
    </div>
  )
}
