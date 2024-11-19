import React, { useState } from 'react';
import './inputWithButton.css'; // импортируем файлы CSS

const MessageInput: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async () => {
        if (inputValue.trim()) {
            try {
                await sendMessageToServer(inputValue);
                console.log('Submitted:', inputValue);
                setInputValue(''); // очищаем поле после отправки
            } catch (error) {
                console.error('Ошибка при отправке сообщения:', error);
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit(); // отправляем сообщение при нажатии Enter
        }
    };

    return (
        <div className="input-container">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Введите сообщение"
                className="input-field"
            />
            <button
                className={`submit-button ${inputValue.length > 0 ? 'visible' : ''}`}
                onClick={handleSubmit}
            >
                Send
            </button>
        </div>
    );
};

// Пример функции для отправки сообщения на сервер
const sendMessageToServer = async (message: string) => {
    // имитация отправки сообщения
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Сообщение "${message}" успешно отправлено!`);
        }, 1000);
    });
};

export default MessageInput;