// src/components/ChatWindow.tsx
import React, { useState } from 'react';
import MessageList from './MessageList';
import './chat.css';
// import MessageInput from './MessageInput';
import minus from './images/minus.svg';
import x from './images/x.svg';
import MessageInput from './Input/InputWithButton';

interface ChatWindowProps {
    messages: string[];
    onSend: (message: string) => void;
    onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSend, onClose }) => {
    const [close, setClose] = useState(false)
    const closeChat = () => {
        setClose(true)
        setTimeout(() => { onClose() }, 500)
    }
    return (
        <div className={close ? 'close-window' : 'chat-container'}>
            <div className="chat-header">
                <img className="chat-avatar" src="https://cm4-production-assets.s3.amazonaws.com/1713053696833-1chill.png" alt="Avatar" width={40} height={40} />
                <span className="chat-title">M&M AI</span>
                <button className="btn chat-minimize-button" onClick={closeChat}><img src={minus} alt="-" /></button>
                <button className="btn chat-close-button" onClick={closeChat}><img src={x} alt="x" /></button>
            </div>
            <div className='chat-content'>
                <MessageList messages={messages} />
                {/* <MessageInput onSend={onSend} /> */}
<MessageInput/>
            </div>
        </div>
    );
};

export default ChatWindow;