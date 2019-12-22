import React from 'react';
import ReactEmoji from 'react-emoji';

import '../style/Message.css';

const renderContent = (isSendByCurrentUser, user, name, text) => {
    if( isSendByCurrentUser ) {
        return (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{name}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    }
} 

const Message = ({ message, name }) => {
    let isSendByCurrentUser = false;

    const { user, text } = message;

    const trimmedName = name.trim().toLowerCase();
    if(user === trimmedName){
        isSendByCurrentUser = true;
    }

    return renderContent(
        isSendByCurrentUser,
        user,
        trimmedName,
        text
    )
}

export default Message;