import React, { useEffect,useState } from 'react'
import axios from 'axios'
export const ChatPage = () => {
    const [chats, setChats]= useState([])
    const fetchChats= async()=>{
        const data = await axios.get('/api/chats')
        setChats(data)
        console.lo
    }
    useEffect(()=>{
        fetchChats()
        console.log(chats.map((chat)=>(1)))
    },[])
  return (
    <div> chats.map((chat)=
        (1))</div>
  )
}
