// src/components/Chat.tsx
import React, { useEffect, useState } from 'react';
import './chat.css';
import ChatWindow from './ChatWindow';

const Chat = ( {close}:{close: any} ) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [ws, setWs] = useState(null);
    
    useEffect(() => {
        const websocket = new WebSocket('ws://mm-ai.eu/ws');
        
        websocket.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        // setWs(websocket);

        return () => {
            websocket.close();
        };
    }, []);

    const sendMessage = (message: any) => {
        // if (ws && message) {
        //     ws.send(message);
        // }
    };


    return (
        <>
                <ChatWindow
                    messages={messages}
                    onSend={sendMessage}
                    onClose={close}
                />
        </>
    );
};

export default Chat;