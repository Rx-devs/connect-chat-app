// import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Chat = () => {
  const [chats, setChats] = useState([]);

  /* const fetchChats = async () => {
    const data = await axios.get('/api/chat');
    setChats(data);
  } */
  useEffect(() => {
    fetch('/api/chat')
      .then(res => res.json())
      .then(data => setChats(data))
    
      /* axios.get(' ')
      .then(response => {
      console.log(response);
      }); */
    
    // fetchChats();
  }, []);

  return (
    <div>
      {
        chats.map(chat => (
          <div key={chat._id}>
            <h1>{chat.chatName}</h1>
          </div>
        ))
      }
    </div>
    
  )
}

export default Chat;