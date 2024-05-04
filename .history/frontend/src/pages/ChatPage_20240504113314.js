import React from 'react'

export const ChatPage = () => {
    const fetchChats= async()=>{
        const data = await axios.get('/api/chats')
    }
  return (
    <div>ChatPage</div>
  )
}
