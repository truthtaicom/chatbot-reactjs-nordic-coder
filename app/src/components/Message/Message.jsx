import React from 'react';
import { Avatar } from 'antd';
import './Message.css'

export default function Message(props) {
    return (
        <div className={`chatbot__message ${props.user === 'USER' && 'chatbot__message--user'}`}>
            <p>
                <Avatar>{props.user}</Avatar> {props.message}
            </p>
        </div>
    )
}