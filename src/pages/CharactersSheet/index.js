import './stylesCharacterSheet.css';
import api from '../../services/api';

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function CharactersSheet() {
  const [messages, setMessages] = useState([]);

  let history = useHistory();

  useEffect(() => {
    async function loadMessages() {
      let arr = window.location.href;
      let id = [...arr].pop();
      const response = await api.get('transacao');
      setMessages(response.data[id]);
    }
    loadMessages();
  }, []);

  return (
    <div className="csContainer">
      <div>
        <div className="characterImg">
          <img src={messages.imageUrl} alt="Characters" />
        </div>
        <div className="characterAtributions">
          <p>
            Name: {messages.name}
            <br /> Specie: {messages.specie}
            <br /> Birth Year:
            {messages.birthYear}
            <br /> Gender: {messages.gender}
            <br />
            Hair Color: {messages.hairColor}
            <br /> Eye Color: {messages.eyeColor}
          </p>
        </div>
      </div>
      <div className="characterDescripition">
        <p>{messages.descricao}</p>
      </div>
      <div
        onMouseUp={() => {
          console.log('click');
          history.push('/characters');
        }}
        className="csBackButton"
      >
        <img src="https://i.imgur.com/HyS096F.png" alt="backButton" />
      </div>
      <div
        onMouseUp={() => {
          console.log('click');
          history.push('/');
        }}
        className="cshomeButton"
      >
        <img src="https://i.imgur.com/0StY9GC.png" alt="homeButton" />
      </div>
    </div>
  );
}
export default CharactersSheet;
