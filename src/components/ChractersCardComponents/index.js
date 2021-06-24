import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

function StarshipCardComponent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get('transacao');
      setMessages(response.data);
    }
    loadMessages();
  }, []);

  let history = useHistory();

  return (
    <section className="cardComponent">
      {messages.map((character, i) => (
        <div
          onMouseUp={() => {
            history.push(`/characters-sheets?'${i}`);
          }}
          key={i}
        >
          <img src={character.imageUrl} alt="millenium" />
          <div className="line"></div>
          <div className="cardTitleContainer">
            <h1> {character.name} </h1>
          </div>
        </div>
      ))}
    </section>
  );
}
export default StarshipCardComponent;
