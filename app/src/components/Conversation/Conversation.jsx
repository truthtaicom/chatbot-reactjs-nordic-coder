import React from 'react';
import './Conversation.css'

export default function Conversation(props) {
    return (
        <div className="chatbot">
            {props.children}
        </div>
    )
}