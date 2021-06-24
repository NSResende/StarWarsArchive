import './styles.css';
import { useHistory } from 'react-router-dom';

function Home() {
  let history = useHistory();
  return (
    <div className="homeContainer">
      <div className="swLogo">
        <div className="ssLogo">
          <img src="https://i.imgur.com/ffdDOg1.png" alt="StarchipsButton" />
        </div>
        <div className="ccLogo">
          <img src="https://i.imgur.com/lLKGUIm.png" alt="StarchipsButton" />
        </div>
      </div>

      <div className="homeButtons">
        <button
          onMouseUp={() => {
            history.push('/starships');
          }}
          className="starshipButton"
        >
          <img src="https://i.imgur.com/BJ5o9QE.png" alt="StarchipsButton" />
        </button>
        <button
          onMouseUp={() => {
            history.push('/characters');
          }}
          className="characterButton"
        >
          <img src="https://i.imgur.com/m8XKEPL.png " alt="CharactersButton" />
        </button>
      </div>
    </div>
  );
}
export default Home;
