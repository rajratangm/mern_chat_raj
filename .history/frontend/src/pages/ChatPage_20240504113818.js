import React, { useEffect } from 'react'
import axios from 'axios'
export const ChatPage = () => {
    const [chats, setChats]= use
    const fetchChats= async()=>{
        const data = await axios.get('/api/chats')
        console.log(data)
    }
    useEffect(()=>{
        fetchChats()
    },[])
  return (
    <div>{
        
        }</div>
  )
}
