import React from 'react';
import iconchats from '../static/chats.png';

function NewChatIcon() {
    return (
        <div className="mainChatsIcon-container">
            <img src={ iconchats } alt="new_chat" />
        </div>
    );
}

export default NewChatIcon;