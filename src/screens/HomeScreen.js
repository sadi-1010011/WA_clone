import React, { useState } from 'react';
// components
import Navbar from '../components/Navbar';
import RowComponent from '../components/RowComponent';
import NewChatIcon from '../components/NewChatIcon';
// custom scripts & styles
import SwipeTabs from '../scripts/SwipeTabs.js';
import '../styles/app.css';
import '../styles/screens.css';

// dummy data
import { chatsdata } from '../data/chatsData';
import { statusdata } from '../data/statusData';
import { callsdata } from '../data/callsData';


export default function HomeScreen() {
    
    // chats object
    const [chats_obj, setChats_obj]= useState(chatsdata);    
    // status object
    const [status_obj, setStatus_obj]= useState(statusdata);
    // callhistory object
    const [callhistory_obj, setCallhistory_obj]= useState(callsdata);


    return(
        <>
            <Navbar />
            {/* SWIPE GESTURES FOR TABS COMING SOON.. (experimental) */}
            {/* <div id="homescreen_container" onTouchStart={ () => SwipeTabs()}> </div> */}

                <div id="camera_container">
                    <h1>cam section</h1>
                    <p>coming soon..</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>                    
                    <span># If anyone interested in this project to continue / complete this app, for collaboration kindly contact me anytime..</span>
                    <br/>
                    <span className="contactme-myphone">+91 6238998062</span>
                </div>

                <div id="chats_container">
                    { 
                        chats_obj.map( item => <RowComponent
                            key={item.id}
                            chatter={item.name}
                            chattime={item.time}
                            chatlastmsg={item.lastchat}
                            chatunreadcount={item.unreadmsg}
                            chatmute={item.ismuted} />)
                    }
                </div>

                <div id="status_container">
                    {
                        status_obj.map( item => <RowComponent
                            key={item.id}
                            chatter={item.name}
                            chatlastmsg={item.time} />)
                    }
                </div>

                <div id="callhistory_container">
                    {
                        callhistory_obj.map( item => <RowComponent
                            key={item.id}
                            chatter={item.name}
                            chatlastmsg={item.time} />)
                    }
                </div>
                <NewChatIcon />
       </>
    );
}
