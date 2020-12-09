import React from 'react';
import "./sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar , IconButton} from "@material-ui/core"
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
        </div>
    )
}

export default sidebar
