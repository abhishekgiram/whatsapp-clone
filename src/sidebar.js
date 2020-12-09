import React from 'react';
import "./sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar , IconButton} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import SideBarChat from "./sidebarchat"
function sidebar() {
    return (
        <div className="sideBar">
            <h3>this is sidebar</h3>
            <div className="sidebar__header">
                <Avatar src="https://he-s3.s3.amazonaws.com
                /media/avatars
                /abhishek6135/resized/180
                /925fa3cabhi1.jpg"/>
                <div className="sidebar__headerRight">
                <IconButton>    
                <DonutLargeIcon/>
                </IconButton>    
                <IconButton>
                <ChatIcon/> 
                </IconButton>  
                <IconButton>
                <MoreVertIcon/>
                </IconButton>        
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon/>
                    <input placeholder="search or start new chat" type="text"/>
             </div>
             </div>
             <div className="sidebar_chats">
                 <SideBarChat/>
                 <SideBarChat/>
                 <SideBarChat/>
                 <SideBarChat/>
             </div>
        </div>
    )
}

export default sidebar
