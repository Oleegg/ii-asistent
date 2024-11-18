import './asistent.css';
import { O } from './halper';
import chat from './images/whatsapp-svgrepo-com.svg'
// import WebSocketClient from '../WSClient';
import { useState } from 'react';
import Chat from './Chat';

function Asistent() {
  const [show,setShow] = useState(false)
  const showChat = () =>{
    console.log('showChat-----');
    setShow(true)    
  }
  const closeChat = () => setShow(false)
  return (
    <div className='asistent-wrapper'>
      {/* <WebSocketClient /> */}
      {O.map((el, i) =>
        <span className='bg-span' key={i} style={{ animationDuration: `${el.d}s`, left: `${el.l}%`, top: `${el.t}%` }}></span>)}
      <div className="content">
        <h1 className='title'>Привет! Это тестовый <br />
          AI-ассистент.</h1>
        <h3 className='sub-title'>Выбранная ниша - школа бухучета. <br />
          Для того чтобы начать - нажми на кнопку справа в нижнем углу и открой диалог.</h3>
        {show
        ? <Chat close={closeChat} />
        : <div className="chat" onClick={showChat}>
          <button><img src={chat} alt="chat" width={30} height={30} /></button>
        </div>}
      </div>

    </div>
  );
}

export default Asistent;