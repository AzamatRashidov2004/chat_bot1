import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons';

function ChatMessage({ text, user }) {
    const iconClass = user === 'user' ? 'fas fa-user' : 'fas fa-robot';
    return (
        <div className={`chat-message ${(user == 'user' ? 'user-message' : 'bot-message')}`}>
        <div className="message-icon">
            <i className={iconClass}></i>
        </div>
            <div className="message-text">{text}</div>
        </div>
    );
}

export default ChatMessage;