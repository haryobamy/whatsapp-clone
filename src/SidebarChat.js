import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import React, { useEffect, useState } from 'react';


function SidebarChat() {

    const [seed, setSeed] = useState('');
 

    useEffect ( () => {
        setSeed(Math.floor(Math.random()*5000));
    },[]);

    return (
        <div className='SidebarChat'>
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className='sidebarChat_info'>
              <h2>Room name</h2>
              <p>Last message....</p>
          </div>
        </div>
    )
}

export default SidebarChat
