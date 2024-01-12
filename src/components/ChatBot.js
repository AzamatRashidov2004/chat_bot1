import React, {useState} from "react";
import ChatMessage from './ChatMessage';
import InputBox from "./InputBox";
import './../App.css';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';


function ChatBot() {
    const [messages, setMessages] = useState([]);

    const handleUserInput = (userMessage) => {
        const botMessage = { text: `Bot: You just said "${userMessage}"`, user: 'bot' };
        setMessages([...messages, { text: `You: ${userMessage}`, user: 'user' }, botMessage]);    
    };
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState({ width: 500, height: 500 });

    const handleDrag = (e, ui) => {
        // Update the position based on the drag event
        setPosition({ x: ui.x, y: ui.y });
    };

    const handleResize = (e, { size }) => {
        // Update the size based on the resize event
        setSize({ width: size.width, height: size.height });
    };

    return (
        <Draggable 
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={position}
        onStop={(e, ui) => handleDrag(e, ui)}
        >
        <ResizableBox
            width={size.width}
            height={size.height}
            onResize={handleResize}
            draggableOpts={{ disabled: true }}
            resizeHandles={['se']}
        >
            <div className="handle" style={{ width: '100%', height: '100%', cursor: 'move'}}>
                <div className="chat-bot"> 
                    <div className="chat-messages">
                        {messages.map((messages, index) => (
                            <ChatMessage key={index} text={messages.text} user={messages.user}/>
                        ))}
                    </div>
                    <InputBox onSubmit={handleUserInput}/>
                </div>
            </div>
        </ResizableBox>
        </Draggable>
  );
}

export default ChatBot;
