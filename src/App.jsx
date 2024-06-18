import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
        <div className="conversation"></div>
        <form className="messageForm"></form>

      </div>
    </>
  )
}

export default App
