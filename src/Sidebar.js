import React from 'react';
import { Avatar, IconButton, Select } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, Search  } from '@material-ui/icons';


import  './Sidebar.css';
import SidebarChat from './SidebarChat';




function Sidebar() {
    return (
        <div>
            <div className='sidebar'>
            <div className='sidebar_header'>
                        <Avatar />  
                     <div className='sidebar_headerRight'>
                           <IconButton><DonutLarge /></IconButton> 
                             <IconButton><Chat /></IconButton>
                             <IconButton><MoreVert /></IconButton>
               
                        </div>
                    </div>

                    <div className='sidebar_search'>
                     <div className='sidebar_searchContainer'>
                     <Search /> 
                      <input placeholder='search or start new chat' type='text' />
                     </div>
                    </div>

                 <div className='sidebar_chats'>
                     <SidebarChat />
                     <SidebarChat />
                     <SidebarChat />
                     <SidebarChat />
                 </div>
            </div>
                 
            
        </div>
    )
}

export default Sidebar;
