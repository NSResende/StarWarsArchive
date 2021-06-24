import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

function StarshipCardComponent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get('produto');
      setMessages(response.data);
    }
    loadMessages();
  }, []);

  let history = useHistory();

  return (
    <section className="cardComponent">
      {messages.map((starship, i) => (
        <div
          onMouseUp={() => {
            history.push(`/starchips-sheets?'${i}`);
          }}
          key={i}
        >
          <img src={starship.imageUrl} alt="millenium" />
          <div className="line"></div>
          <div className="cardTitleContainer">
            <h1> {starship.starshipName} </h1>
          </div>
        </div>
      ))}
    </section>
  );
}
export default StarshipCardComponent;
