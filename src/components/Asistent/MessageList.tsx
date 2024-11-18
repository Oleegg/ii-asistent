// src/components/MessageList.tsx
import React from 'react';

interface MessageListProps {
    messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <ul className="message-list">
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    );
};

export default MessageList;