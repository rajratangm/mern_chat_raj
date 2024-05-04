import React from 'react'
import axios from 'axios'
export const ChatPage = () => {
    const fetchChats= async()=>{
        const data = await axios.get('/api/chats')
        console.log(data)
    }
    use
  return (
    <div>ChatPage</div>
  )
}
