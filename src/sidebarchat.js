import { Avatar } from '@material-ui/core'
import React from 'react';
import "./sidebarchat.css";
export default function sidebarchat() {
    return (
        <div className="sidebarchat">
            <Avatar/>
            <div className="sidebarchat__info">
                <h2>Room name</h2>
                <p>This is last massage</p>
            </div>
        </div>
    )
}
