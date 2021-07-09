import React from 'react';
import contactprofile from '../static/images/img.jpg';
import iconmute from '../static/mute.png';
import '../styles/app.css';

function RowComponent(props) {

    const chatmute = <img src={iconmute} className="chat-iconmute" />;
    const unreadmsg = <div className="chat-unreadcount">{ props.chatunreadcount }</div>;

    return(
        <div className="rowcomponent">
            <div className="image-wrapper">
                <div className="image-container">
                    <img src={contactprofile} id="contact-profile" />
                </div>
            </div>

            <div className="chatinfo-wrapper">
                <div className="chatinfo-container">
                    <span className="chat-name">{ props.chatter }</span>
                    <span className="chat-time">{ props.chattime }</span>
                </div>
                <div className="chatinfo-container">
                    <span className="chat-lastmsg">{ props.chatlastmsg }</span>
                    <div className="chat-icons">
                        { props.chatmute && chatmute }
                        { props.chatunreadcount > 0 && unreadmsg }
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default RowComponent;