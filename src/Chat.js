import { Avatar, IconButton } from '@material-ui/core';
import { Search, AttachFile, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import './Chat.css';


function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    
    useEffect ( () => {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);


    const sendMessage =(e) => {
        e.preventDefault();

    }

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar  src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat_headerInfo'>
                    <h3>Room name</h3>
                    <p>last seen at .....</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton><Search /></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVert /></IconButton>

                </div>
            </div>
            <div className='chat_body'>
                <p className={`chat_message ${true && 'chat_reciever'}`}>
                <span className='chat_name'>Haryobamy</span>
                    hey guys 
                    <span className='chat_timestamp'>9:24am</span>
                 </p>
            </div>
            <div className='chat_footer'>
                <IconButton><InsertEmoticon /></IconButton>
                <form>
                    <input   value={input} onChange={ e => setInput(e.target.value )} type='text'  placeholder='Type a massage' />
                    <button onClick={ sendMessage } type='submit'>send a message</button>
                </form>
                <IconButton><Mic /></IconButton>
            </div>
        </div>
    )
}

export default Chat;
