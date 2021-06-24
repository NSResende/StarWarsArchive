import './stylesStarshipSheet.css';
import api from '../../services/api';

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function StarchipsSheets() {
  const [messages, setMessages] = useState([]);

  let history = useHistory();

  useEffect(() => {
    async function loadMessages() {
      let arr = window.location.href;
      let id = [...arr].pop();
      const response = await api.get('produto');
      setMessages(response.data[id]);
    }
    loadMessages();
  }, []);

  console.log(messages);
  return (
    <div className="sContainer">
      <div>
        <div className="starshipImg">
          <img src={messages.imageUrl} alt="Characters" />
        </div>
        <div className="starshipAtributions">
          <p>
            Name: {messages.starshipName} <br />
            Model: {messages.model} <br /> Manufacturer: {messages.manufacturer}
            <br />
            Crew: {messages.crew}
            <br /> Passengers: {messages.passengers}
            <br /> CostInCredits: {messages.costInCredits}
            <br /> CargoCapacity: {messages.cargoCapacity}
          </p>
        </div>
      </div>
      <div className="starshipDescripition">
        <p>{messages.descricao}</p>
      </div>
      <div
        onMouseUp={() => {
          console.log('click');
          history.push('/starships');
        }}
        className="sBackButton"
      >
        <img src="https://i.imgur.com/HyS096F.png" alt="backButton" />
      </div>
      <div
        onMouseUp={() => {
          console.log('click');
          history.push('/');
        }}
        className="shomeButton"
      >
        <img src="https://i.imgur.com/0StY9GC.png" alt="homeButton" />
      </div>
    </div>
  );
}
export default StarchipsSheets;
