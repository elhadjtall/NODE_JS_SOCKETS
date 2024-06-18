import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  

  return (
    <>
      <h1 className='title'>ichat</h1>
      <div className="mainChat">
        <div className="name">
          <span>
            <FontAwesomeIcon icon={faUser}/>
            <input type="text" className="nameInput" 
            id="nameInput" 
            value=""
            maxLength="20"/>
          </span>
        </div>
        <ul className="conversation">
            <li className='messageLeft'>
              <p className='message'>Bonjour les amis</p>
              <span>author - 18 Juin 2024</span>
            </li>
            <li className='messageRight'>
              <p className='message'>Ca va?</p>
              <span>author - 18 Juin 2024</span>
            </li>
            <li className='messageFeedback'>
              <p className='feedback'>Toto is typing...</p>
            </li>
        </ul>
        <form className="messageForm">
          <input type="text" className="messageInput" 
          id="messageInput" 
          value=""
          maxLength="100"/>
          <div className="vDivider"></div>
          <button type="submit" className="sendButton">Send<FontAwesomeIcon icon={faPaperPlane}/></button>
        </form>

      </div>
    </>
  )
}

export default App
