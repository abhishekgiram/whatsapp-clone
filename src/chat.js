import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import "./chat.css";
function chat() {
    return (
        <div className="chatBox">  
            <div className="chat__header">
               <Avatar/>
               <div className="chat__headerInfo">
                   <h3>Room name</h3>
                   <p>last seen at ...</p>
                </div> 
                <div className="chat__headerRight">
                   <IconButton>
                        <SearchOutlined/>   
                    </IconButton> 
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
                
            </div>
            <div className="chat__body">
            <p className="chat__message">
                    <span className="chat__name">Abhishek</span>
                    this is message
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                        </span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Abhishek</span>
                    this is message
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                        </span>
                </p>
             </div>
             <div className="chat__footer">
                    <InsertEmoticon/>
                    <form>
                        <input placeholder="type a message" type="text"/>
                       <SendIcon/>
                    </form>
                    <MicIcon/>
             </div>
        </div>
    )
}

export default chat
